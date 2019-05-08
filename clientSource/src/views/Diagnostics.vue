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
          Diagnostics
        </VToolbarTitle>
      </VToolbar>
      <VCardText class="overflowY py-3">
        <VLayout>
          <VSlider
            v-model.number="service"
            :max="255"
            :min="0"
            :step="1"
            label="Service"
          />
          <VTextField
            v-model.number="service"
            class="mt-0 ml-3 shrink"
            type="number"
          />
        </VLayout>
        <VLayout>
          <VRangeSlider
            v-model="pid"
            :max="255"
            :min="0"
            :step="1"
            label="PID 1"
          />
          <VTextField
            v-model.number="pid[0]"
            class="mt-0 ml-3 shrink"
            type="number"
            label="Min"
          />
          <VTextField
            v-model.number="pid[1]"
            shrink
            class="mt-0 ml-3 shrink"
            type="number"
            label="Max"
          />
        </VLayout>
        <VLayout>
          <VSlider
            v-model.number="pid2"
            :max="255"
            :min="0"
            :step="1"
            label="PID 2"
          />
          <VTextField
            v-model.number="pid2"
            class="mt-0 ml-3 shrink"
            type="number"
          />
        </VLayout>
      </VCardText>
      <VDivider />
      <VCardActions>
        <VLayout
          row
          wrap
        >
          <VBtn
            depressed
            color="grey"
            flat
            @click="scanResults = []"
          >
            Clear
          </VBtn>
          <VSpacer />
          <VBtn
            depressed
            color="success"
            @click="scanObd"
          >
            OBD Scan
          </VBtn>
          <VBtn
            v-if="!subscribed"
            color="green"
            depressed
            @click="queryVin"
          >
            Query VIN
          </VBtn>
          <VBtn
            v-if="!subscribed"
            color="green"
            depressed
            @click="queryObd"
          >
            Query OBD
          </VBtn>
          <VBtn
            v-else
            color="error"
            depressed
            @click="stopdiagnosticsQuery"
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
    <VDataTable
      :headers="headers"
      :items="scanResults"
      hide-actions
      item-key="id"
      class="mt-4 elevation-2"
    >
      <template v-slot:items="props">
        <td>
          {{ props.item.date | toDate }}
        </td>
        <td>
          {{ props.item.name }}
        </td>
        <td class="text-xs-left monoSpace">
          <span class="monoSpace text-truncate text-uppercase">
            <span
              v-for="(byte, i) in props.item.serviceId "
              :key="i"
            >
              <span v-if="(rawStringLength(byte) < 2)">0</span>{{ byte | rawStringFilter }}(<span v-if="byte < 10">00</span><span v-else-if="byte < 100">0</span>{{ byte }})
            </span>
          </span>
        </td>
        <td class="text-xs-left monoSpace">
          <span class="monoSpace text-truncate text-uppercase">
            <span
              v-for="(byte, i) in props.item.pIdHex "
              :key="i"
            >
              <span v-if="(rawStringLength(byte) < 2)">0</span>{{ byte | rawStringFilter }}(<span v-if="byte < 10">00</span><span v-else-if="byte < 100">0</span>{{ byte }})
            </span>
          </span>
        </td>
        <td class="text-xs-left monoSpace">
          <span class="monoSpace text-truncate text-uppercase">
            <span
              v-for="(byte, i) in props.item.data"
              :key="i"
            >
              <span v-if="(rawStringLength(byte) < 2)">0</span>{{ byte | rawStringFilter }}
            </span>
          </span>
        </td>
        <td class="text-xs-left text-truncate">
          {{ props.item.description }}
        </td>
      </template>
    </VDataTable>
  </div>
</template>
<script>
  import './../grpc/dist/api.js'
  import services from './../assets/pid.js'
  export default {
    name: "Diagnostic",
    filters: {
      rawStringFilter (input) {
        return input.toString(16)
      },
      toDate (input) {
        const date = new Date(input)
        return date.toLocaleTimeString({}, { hour12: false })
      },
    },
    data: () => { return {
      snackbarDisplayed: false,
      service: 1,
      pid: [0, 24],
      pid2: 0,
      chipValue: [],
      subscribed: false,
      request: '',
      diagnosticsQuery: null,
      dataHistory: 52,
      snackbarMessage: 'Not connected',
      snackbarIcon: 'warning',
      snackbarColor: 'error',
      responseArray: [],
      signalDataList: [],
      firstRun: true,
      chipOnline: [],
      selected: false,
      diagnosticsServiceClient: null,
      responsePayload: null,
      scanResults: [],
      headers: [
        {
          text: 'Date',
          value: 'date',
          align: 'left',
          sortable: true,
        },
        {
          text: 'Operation',
          value: 'id',
          align: 'left',
          sortable: true,
        },
        {
          text: 'Service Hex(Dec)',
          value: 'serviceId',
          align: 'left',
          sortable: true,
        },
        {
          text: 'PID Hex(Dec)',
          value: 'pIdHex',
          align: 'left',
          sortable: true,
        },
        {
          text: 'Raw Hex Data',
          value: 'data',
          class: 'grow',
          align: 'left',
          sortable: true,
        },
        {
          text: 'Description',
          value: 'description',
          align: 'left',
        },
      ],
    } },
    computed: {
      hexPidIndex: {
        get () {
          return '0x' + this.scanPidIndex.toString(16)
        },
      },
      hexServiceIndex: {
        get () {
          return '0x' + this.scanServiceIndex.toString(16)
        },
      },
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
      // this.queryVin()
      // this.queryObd()
    },
    beforeDestroy () {
      const currentStatus = this.connectionStatus
      this.stopdiagnosticsQuery()
      this.connectionStatus = currentStatus
    },
    methods: {
      rawStringLength (input) {
        return input.toString(16).length
      },
      snackbar (color, snackbarMessage, icon) {
        this.snackbarColor = color
        this.snackbarMessage = snackbarMessage
        this.snackbarIcon = icon || 'warning'
        this.snackbarDisplayed = true
      },
      queryVinInteractive () {
        this.request = 'Query VIN'
        const signals = [];
        this.selectedSignals.forEach(signal => {
          if (signal.signalId) {
            signals.push(signal.signalId)
          }
        })
        // eslint-disable-next-line no-undef
        const request = new api.default.DiagnosticsRequest()
        request.setDownlink(signals[0]) // PscmToVddmChasDiagResFrame
        request.setUplink(signals[1]) // VddmToAllFuncChasDiagReqFrame
        const serviceId = new Uint8Array(1)
        serviceId[0] = 0x22
        request.setServiceid(serviceId)
        const dataId = new Uint8Array(2)
        dataId[0] = 0xf1
        dataId[1] = 0x90
        request.setDataidentifier(dataId)
        this.diagnosticsRequest(request)
      },
      queryVin () {
        this.request = 'Query VIN'
        // eslint-disable-next-line no-undef
        const request = new api.default.DiagnosticsRequest()
        // eslint-disable-next-line no-undef
        const namespace = new api.default.NameSpace()
        namespace.setName('ChassisCANhs')
        // eslint-disable-next-line no-undef
        const downlink = new api.default.SignalId()
        downlink.setName('PscmToVddmChasDiagResFrame')
        downlink.setNamespace(namespace)
        // eslint-disable-next-line no-undef
        const uplink = new api.default.SignalId()
        uplink.setName('VddmToAllFuncChasDiagReqFrame')
        uplink.setNamespace(namespace)
        request.setDownlink(downlink) // PscmToVddmChasDiagResFrame
        request.setUplink(uplink) // VddmToAllFuncChasDiagReqFrame
        const serviceId = new Uint8Array(1)
        serviceId[0] = 0x22
        request.setServiceid(serviceId)
        const dataId = new Uint8Array(2)
        dataId[0] = 0xf1
        dataId[1] = 0x90
        request.setDataidentifier(dataId)
        this.diagnosticsRequest(request)
      },
      queryObdInteractive () {
        this.request = 'Query OBD'
        const signals = [];
        this.selectedSignals.forEach(signal => {
          if (signal.signalId) {
            signals.push(signal.signalId)
          }
        })
        // const namespace = new api.default.NameSpace()
        // namespace.setName('PropulsionCANhs')
        // const downlink = {name: 'BcmToEtcCarbPropDiagResFrame', namespace: namespace}
        // const uplink =  {name: 'EtcToAllCarbPropDiagReqFrame', namespace: namespace}
        // eslint-disable-next-line no-undef
        const request = new api.default.DiagnosticsRequest()
        request.setDownlink(signals[0]) // BcmToEtcCarbPropDiagResFrame
        request.setUplink(signals[1]) // EtcToAllCarbPropDiagReqFrame
        // request.setDownlink(downlink) // BcmToEtcCarbPropDiagResFrame
        // request.setUplink(uplink) // EtcToAllCarbPropDiagReqFrame
        const serviceId = new Uint8Array(1)
        serviceId[0] = 0x01
        request.setServiceid(serviceId)
        const dataId = new Uint8Array(1)
        dataId[0] = 0x42
        request.setDataidentifier(dataId)
        this.diagnosticsRequest(request)
      },
      queryObd () {
        this.request = 'Query OBD'
        // eslint-disable-next-line no-undef
        const request = new api.default.DiagnosticsRequest()
        // eslint-disable-next-line no-undef
        const namespace = new api.default.NameSpace()
        namespace.setName('PropulsionCANhs')
        // eslint-disable-next-line no-undef
        const downlink = new api.default.SignalId()
        downlink.setName('EcmToEtcCarbPropDiagResFrame')
        downlink.setNamespace(namespace)
        request.setDownlink(downlink)
        // eslint-disable-next-line no-undef
        const uplink = new api.default.SignalId()
        uplink.setName('EtcToAllCarbPropDiagReqFrame')
        uplink.setNamespace(namespace)
        request.setUplink(uplink)
        const serviceId = new Uint8Array(1)
        serviceId[0] = 0x01
        request.setServiceid(serviceId)
        const dataId = new Uint8Array(1)
        dataId[0] = 0x42 // control module voltage
        // dataId[0] = 0x8D
        request.setDataidentifier(dataId)
        this.diagnosticsRequest(request)
      },
      scanObd () {
        if (this.pid[0] === this.pid[1]) {
          this.pid[1] = this.pid[0] + 1
        }
        for (let scanPidIndex = this.pid[0]; scanPidIndex < this.pid[1]; scanPidIndex += 1) {
          this.request = 'OBD Scan'
          // eslint-disable-next-line no-undef
          const request = new api.default.DiagnosticsRequest()
          // eslint-disable-next-line no-undef
          const namespace = new api.default.NameSpace()
          namespace.setName('PropulsionCANhs')
          // eslint-disable-next-line no-undef
          const downlink = new api.default.SignalId()
          downlink.setName('EcmToEtcCarbPropDiagResFrame')
          downlink.setNamespace(namespace)
          request.setDownlink(downlink)
          // eslint-disable-next-line no-undef
          const uplink = new api.default.SignalId()
          uplink.setName('EtcToAllCarbPropDiagReqFrame')
          uplink.setNamespace(namespace)
          request.setUplink(uplink)
          const serviceId = new Uint8Array(1)
          serviceId[0] = '0x' + this.service.toString(16)
          request.setServiceid(serviceId)
          let dataIdLength = 1
          if (this.pid2 > 0) {
            dataIdLength = 2
          }
          const dataId = new Uint8Array(dataIdLength)
          dataId[0] = '0x' + scanPidIndex.toString(16)
          if (this.pid2 > 0) {
            dataId[1] = '0x' + this.pid2.toString(16)
          }
          request.setDataidentifier(dataId)
          this.diagnosticsRequest(request)
        }
      },
      diagnosticsRequest (request) {
        // eslint-disable-next-line no-undef
        const diagnosticsClient = new api.default.DiagnosticsServiceClient(this.brokerServerIp)
        this.diagnosticsQuery = diagnosticsClient.sendDiagnosticsQuery(request)
        this.diagnosticsQuery.on('data', response => {
          this.responseQuery(response, request)
          // this.snackbar('success', "", 'check')
          if (this.connectionStatus !== 'success--text') {
            this.connectionStatus = 'success--text'
          }
        });
        this.diagnosticsQuery.on('end', () => {
          // this.stopdiagnosticsQuery()
          this.snackbarDisplayed = false;
        })
        this.diagnosticsQuery.on('status', (status) => {
          if (status.details.length > 1) {
            this.snackbar('info', status.details, 'info')
            this.subscribed = false;
          }
        })
        this.diagnosticsQuery.on('error', (error) => {
          // this.stopdiagnosticsQuery();
          this.snackbar('error', error.message, 'warning')
          this.connectionStatus = 'error--text'
        })
        this.$store.commit('updateRequestHistory', this.requestHistory)
      },
      stopdiagnosticsQuery () {
        this.request = 'Cancel Subscription';
        if (this.diagnosticsQuery) {
          // this.diagnosticsQuery.cancel()
        }
        this.subscribed = false;
        this.$store.commit('updateRequestHistory', this.requestHistory)
      },
      responseQuery (response, request) {
        this.subscribed = false;
        const index = parseInt(request.getDataidentifier().toString(16), 10)
        const serviceId = parseInt(request.getServiceid_asU8().toString(16),10)
        const descriptionArray = services()[serviceId]
        const entry = {
          name: this.request,
          data: response.getRaw_asU8(),
          date: Date.now(),
          description: descriptionArray[index] || '',
          serviceId: request.getServiceid_asU8(),
          pIdHex: request.getDataidentifier_asU8(),
        }
        if (entry.data.length > 0) {
          this.scanResults.push(entry)
        }
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
