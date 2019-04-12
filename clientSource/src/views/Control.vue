<template>
  <div>
    <VCard class="marginToolbar">
      <VToolbar
        card
        color="transparent"
        extended
      >
        <VIcon>
          gamepad
        </VIcon>
        <VToolbarTitle>
          Control
        </VToolbarTitle>
        <VSpacer />
        <template v-slot:extension>
          <VContainer
            fluid
            fill-height
          >
            <VLayout row>
              <VSwitch
                v-model="onlineFilter"
                label="Hide inactive"
                append-icon="visibility_off"
              />
              <VSwitch
                v-model="firstRun"
                label="Clear history"
                append-icon="clear_all"
              />
            </vlayout>
          </VContainer>
        </template>
      </VToolbar>
      <VLayout column>
        <VFlex
          xs12
          py-3
        >
          <VCardText>
            <div
              v-if="selectedSignals.length === 0"
              key="title"
              class="title font-weight-light grey--text pa-3 text-xs-center"
            >
              You have no selected signals at this time.
            </div>
            <VScrollXTransition
              group
              hide-on-leave
            >
              <VChip
                v-for="(selection, i) in selectedSignals"
                :key="i"
                small
                :color="responseIncludes(selection.name) ? 'success' : ''"
                close
                :label="(selection.children.length > 0)"
                @input="remove(selectedSignals[i])"
              >
                {{ selection.name }}
              </VChip>
            </VScrollXTransition>
          </VCardText>
        </VFlex>
      </VLayout>
      <VDivider />
      <VCardActions>
        <VBtn
          flat
          depressed
          to="selection"
        >
          Signal tree
          <VIcon right>
            ballot
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
          Subscribe
        </VBtn>
        <VBtn
          v-else
          color="error"
          depressed
          @click="stopStream"
        >
          Unsubscribe
        </VBtn>
      </VCardActions>
    </VCard>
    <VContainer
      fluid
      grid-list-lg
      mt-1
      px-0
    >
      <VDataIterator
        hide-actions
        :items="signalDataList"
        content-class="layout row wrap"
        item-key="id"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
      >
        <template v-slot:item="props">
          <SignalCard
            :name="props.item.name"
            :data="props.item.data"
            :name-space="props.item.nameSpace"
            :data-type="props.item.dataType"
            :min="props.item.min"
            :max="props.item.max"
            :unit="props.item.unit"
            :size="props.item.size"
            :raw="props.item.raw"
            :description="props.item.description"
            :online-filter="onlineFilter"
            :timestamp="props.item.timestamp"
          />
        </template>
      </VDataIterator>
    </VContainer>
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
  </div>
</template>
<script>
  import './../grpc/dist/api.js'
  import SignalCard from "./../components/SignalCard.vue"
  export default {
    name: "Control",
    components: { SignalCard },
    data: () => { return {
      snackbarDisplayed: false,
      onlineFilter: false,
      chipValue: [],
      subscribed: false,
      request: '',
      search: null,
      caseSensitive: false,
      stream: null,
      snackbarMessage: 'Not connected',
      snackbarIcon: 'warning',
      snackbarColor: 'error',
      NetworkService: null,
      subsConfig: null,
      responseArray: [],
      rowsPerPageItems: [6, 12, 24, -1],
      pagination: {
        rowsPerPage: -1, // infinite rows per page
        descending: false, // sorting order
        sortBy: "name", // sort field for pagination
      },
      signalDataList: [],
      firstRun: true,
      chipOnline: [],
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
      this.filter()
    },
    beforeDestroy () {
      const currentStatus = this.connectionStatus
      this.stopStream()
      this.connectionStatus = currentStatus
    },
    methods: {
      filter(){ setTimeout(() => {
        this.onlineFilter = true
      }, 7000);},
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
      remove (item) {
        // this.firstRun = true
        this.selectedSignals.splice(this.selectedSignals.indexOf(item), 1)
        this.selectedSignals = [...this.selectedSignals]
        this.stopStream()
        this.streamSetup()
      },
      onlineChip () {
        return this.signalDataList.map(item => { return item.name })
      },
      streamSetup () {
        // eslint-disable-next-line no-undef
        this.NetworkService = new api.default.NetworkServiceClient(this.$store.state.brokerServerIp)
        // eslint-disable-next-line no-undef
        this.subsConfig = new api.default.SubscriberConfig()
        this.request = 'Subscribe'
        const signals = [];
        this.selectedSignals.forEach(signal => {
          if (signal.signalId) {
            signals.push(signal.signalId)
          }
        })
        // eslint-disable-next-line no-undef
        const signalIds = new api.default.SignalIds()
        signalIds.setSignalidList(signals)
        // eslint-disable-next-line no-undef
        const clientId = new api.default.ClientId()
        clientId.setId("my_client")
        this.subsConfig.setSignals(signalIds)
        this.subsConfig.setClientid(clientId)
        this.startStream()
      },
      startStream () {
        this.stream = this.NetworkService.subscribeToSignals(this.subsConfig)
        this.stream.on('data', response => { this.streamResponse(response)
                                             this.connectionStatus = 'success--text'
        });
        this.stream.on('end', () => { this.stopStream()
                                      this.snackbarDisplayed = false;
        })
        this.stream.on('status', (status) => { console.log('status', status.metadata); })
        this.stream.on('error', (error) => { this.stopStream();
                                             this.snackbar('error', "Disconected", 'warning')
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
        this.subscribed = true;
        const signalList = response.getSignalList()
        let streamResult = []
        this.responseArray = []
        signalList.forEach(signal => {
          let signalData = ''
          let dataType = ''
          const nameSpace = signal.getId().getNamespace()
            .getName()
          if (signal.hasDouble()) {
            signalData = signal.getDouble()
            dataType = 'Double'
          } else if (signal.hasInteger()) {
            signalData = signal.getInteger()
            dataType = 'Integer'
          } else if (signal.hasArbitration()) {
            signalData = signal.getArbitration()
            dataType = 'Arbitration'
          } else if (signal.hasEmpty()) {
            signalData = signal.getEmpty()
            dataType = 'Empty'
          }
          const name = signal.getId().getName()
          this.responseArray.push(name)
          const timestamp = signal.getTimestamp()
          console.log('timestamp', timestamp);
          streamResult.push({
            name: name,
            id: name + nameSpace,
            data: {timestamp: timestamp, data: signalData},
            dataType: dataType,
            nameSpace: nameSpace,
            unit: signal.unit,
            max: signal.max,
            min: signal.min,
            size: signal.size,
            raw: signal.getRaw(),
          })
        });
        if (!this.firstRun) {
          streamResult.forEach((streamElement) => {
            const index = this.signalDataList.findIndex(element => { return element.name === streamElement.name })
            if (index !== -1) {
              if (this.signalDataList[index].nameSpace !== undefined) {
                this.signalDataList[index].data = streamElement.data
                this.signalDataList[index].raw = streamElement.raw
              } else {
                this.signalDataList[index] = streamElement } }
            else {
              this.signalDataList.push(streamElement)
            }
          })
        } else {
          this.signalDataList = streamResult
          this.firstRun = false
        }
      },
    },
  }
</script>
<style scoped>
.overflowY {
  overflow-y: auto;
  max-height: calc(58vh - 228px);
}
.marginToolbar {
  margin-top: -64px;
}
</style>
