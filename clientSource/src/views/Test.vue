<template>
  <div>
    <VCard class="marginToolbar">
      <VToolbar
        card
        color="transparent"
      >
        <VIcon>
          bug_report
        </VIcon>
        <VToolbarTitle>
          Diagnostic
        </VToolbarTitle>
      </VToolbar>
      <VCardText class="overflowY py-3">
        <div
          v-if="selectedSignals.length === 0"
          key="title"
          class="title font-weight-light grey--text pa-3 text-xs-center"
        >
          You have no selected signals at this time.
        </div>
        Search for
        <br>
        PscmToVddmChasDiagResFrame <br>
        VddmToAllFuncChasDiagReqFrame <br>
        <VBtn
          depressed
          href="https://github.com/volvo-cars/signalbroker-server/blob/master/examples/grpc/python/simple_example.py"
          color="primary"
        >
          Example
        </VBtn>
        <span
          v-for="(selection, i) in selectedSignals"
          :key="i"
        >
          <VSpacer
            v-if="selection.isParent"
            class="my-4"
          />
          <VChip
            small
            :color="responseIncludes(selection.name) ? 'success' : ''"
            close
            :label="selection.isParent"
            @input="remove(i)"
          >
            {{ selection.name }}
          </VChip>
          <span
            v-if="selection.isParent"
            class="caption grey--text"
          > {{ selection.namespace }}</span>
          <VSpacer v-if="selection.isParent" />
        </span>
      </VCardText>
      <VDivider />
      <VCardActions>
        <VLayout
          row
          wrap
        >
          <VBtn
            flat
            depressed
            to="selection"
          >
            <VIcon>
              nature
            </VIcon>
          </VBtn>
          <VSpacer />
          <VBtn
            v-if="!subscribed"
            :disabled="selectedSignals.length === 0"
            color="green"
            depressed
            @click="streamSetup"
          >
            Query
          </VBtn>
          <VBtn
            v-else
            color="error"
            depressed
            @click="stopStream"
          >
            Cancel
          </VBtn>
        </VLayout>
      </VCardActions>
    </VCard>
    <VSnackbar
      v-model="snackbarDisplayed"
      bottom
      right
      :color="snackbarColor"
      :timeout="8000"
    >
      <VLayout>
        <VIcon left>
          {{ snackbarIcon }}
        </VIcon>
        {{ snackbarMessage }}
      </VLayout>
      <VBtn
        flat
        @click.native="value = false"
      >
        <VIcon>
          close
        </VIcon>
      </VBtn>
    </VSnackbar>
    <VContainer fluid>
      <VLayout row>
        <VCard
          mt-5
          xs12
        >
          <VCardTitle>
            <h1>
              Response payload
            </h1>
          </VCardTitle>
          <VCardText>
            {{ responsePayload }}
          </VCardText>
        </VCard>
      </VLayout>
    </VContainer>
  </div>
</template>
<script>
  import './../grpc/dist/api.js'
  export default {
    name: "Diagnostic",
    data: () => { return {
      snackbarDisplayed: false,
      chipValue: [],
      subscribed: false,
      request: '',
      search: null,
      stream: null,
      dataHistory: 52,
      snackbarMessage: 'Not connected',
      snackbarIcon: 'warning',
      snackbarColor: 'error',
      responseArray: [],
      signalDataList: [],
      firstRun: true,
      chipOnline: [],
      selected: false,
      uniqueFilterGlobal: 0,
      diagnosticsServiceClient: null,
      responsePayload: null,
    } },
    computed: {
      connectionStatus: {
        get () {
          return this.$store.state.connectionStatus
        },
        set (value) {
          this.$store.commit('updateConnectionStatus', value)
        },
      },
      brokerServerIp: {
        get () {
          return this.$store.state.brokerServerIp
        },
        set (value) {
          this.$store.commit('updateBrokerServerIp', value)
        },
      },
      selectedSignals: {
        get () {
          return this.$store.state.selectedSignals
        },
        set (value) {
          this.$store.commit('updateSelectedSignals', value)
        },
      },
      requestHistory: {
        get () {
          return this.$store.state.requestHistory
        },
        set (value) {
          this.$store.commit('updateRequestHistory', value)
        },
      },
    },
    watch: {
    },
    created () {
    },
    mounted () {
      this.streamSetup()
    },
    beforeDestroy () {
      const currentStatus = this.connectionStatus
      this.stopStream()
      this.connectionStatus = currentStatus
    },
    methods: {
      snackbar (color, snackbarMessage, icon) {
        this.snackbarColor = color
        this.snackbarMessage = snackbarMessage
        this.snackbarIcon = icon || 'warning'
        this.snackbarDisplayed = true
      },
      responseIncludes (item) {
        const findName = this.responseArray.findIndex((element) => {
          return element === item })
        if (findName === -1) { return false } else { return true }
      },
      remove (index) {
        // this.firstRun = true
        this.stopStream()
        this.selectedSignals.splice(index, 1)
        this.streamSetup()
      },
      onlineChip () {
        return this.signalDataList.map(item => { return item.name })
      },
      streamSetup () {
        this.request = 'Diagnostic'
        const signals = [];
        this.selectedSignals.forEach(signal => {
          if (signal.signalId) {
            signals.push(signal.signalId)
          }
        })
        // eslint-disable-next-line no-undef
        const request = new api.default.DiagnosticsRequest()
        const serviceId = 0x22
        const dataId = 0x1f90
        request.setDownlink(signals[0]) // PscmToVddmChasDiagResFrame
        request.setUplink(signals[1]) // VddmToAllFuncChasDiagReqFrame
        request.setServiceid(serviceId.toString(16))
        request.setDataidentifier(dataId.toString(16))
        this.startStream(request)
      },
      startStream (request) {
        // eslint-disable-next-line no-undef
        const diagnosticsClient = new api.default.DiagnosticsServiceClient(this.brokerServerIp)
        this.stream = diagnosticsClient.sendDiagnosticsQuery(request)
        this.stream.on('data', response => {
          this.streamResponse(response)
          this.snackbar('success', "Connected", 'check')
          if (this.connectionStatus !== 'success--text') {
            this.connectionStatus = 'success--text'
          }
        });
        this.stream.on('end', () => {
          this.stopStream()
          this.snackbarDisplayed = false;
        })
        this.stream.on('status', (status) => {
          if (status.details.length > 1) {
            this.snackbar('info', status.details, 'info')
            this.subscribed = false;
          }
        })
        this.stream.on('error', (error) => {
          this.stopStream();
          this.snackbar('error', error.message, 'warning')
          this.connectionStatus = 'error--text'
        })
        this.$store.commit('updateRequestHistory', this.requestHistory)
      },
      stopStream () {
        this.request = 'Cancel Subscription';
        if (this.stream) {
          this.stream.cancel()
        }
        this.subscribed = false;
        this.$store.commit('updateRequestHistory', this.requestHistory)
      },
      streamResponse (response) {
        this.subscribed = false;
        this.responsePayload = response.messageId_
      },
    },
  }
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
.overflowY {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(86vh - 300px);
}
.marginToolbar {
  margin-top: -64px;
}
.monoSpace {
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
}
</style>
