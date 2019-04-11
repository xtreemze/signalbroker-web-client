<template>
  <VContainer grid-list-xl>
    <VLayout
      row
      wrap
    >
      <VFlex
        xs12
        md3
      >
        <VLayout
          row
          wrap
        >
          <VFlex>
            <VCard>
              <VCardTitle>
                <h2>
                  List signals
                </h2>
              </VCardTitle>
              <VCardActions>
                <VBtn
                  depressed
                  @click="listSignals('ChassisCANhs')"
                >
                  Chassis
                </VBtn>
                <VBtn
                  depressed
                  @click="listSignals('BodyCANhs')"
                >
                  Body
                </VBtn>
              </VCardActions>
            </VCard>
          </VFlex>
          <VFlex>
            <VCard>
              <VCardTitle>
                <h2>
                  Get Configuration
                </h2>
              </VCardTitle>
              <VCardActions>
                <VBtn
                  depressed
                  @click="getConfiguration"
                >
                  Get
                </VBtn>
                <VBtn
                  depressed
                  @click="fetchLists"
                >
                  Lists
                </VBtn>
              </VCardActions>
            </VCard>
          </VFlex>
          <VFlex>
            <VCard>
              <VCardTitle>
                <h2>
                  Subscribe
                </h2>
              </VCardTitle>
              <VCardActions>
                <VBtn
                  depressed
                  @click="subscribe('DDMBodyFr01BodyCANhs64')"
                >
                  Subscribe
                </VBtn>
              </VCardActions>
            </VCard>
          </VFlex>
        </VLayout>
      </VFlex>
      <VFlex grow>
        <VCard mt-5>
          <VCardTitle>
            <h2>
              Response
            </h2>
          </VCardTitle>
          <VCardText>
            <VDataTable
              :headers="headers"
              :items="requestHistory"
              hide-actions
              class="elevation-1"
            >
              <template
                slot="items"
                slot-scope="props"
              >
                <td>
                  {{ new Date(props.item.date).toLocaleDateString() }}
                </td>
                <td>
                  {{ props.item.request }}
                </td>
                <td>
                  {{ props.item.response }}
                </td>
              </template>
            </VDataTable>
          </VCardText>
        </VCard>
      </VFlex>
    </VLayout>
  </VContainer>
</template>
<script>
  import './../grpc/dist/api.js'
  export default {
    data: () => { return {
      headers: [{ value: 'date', text: 'Date' }, { value: 'request', text: 'Request' }, { value: 'message', text: 'Response' }],
      request: '',
      requestHistory: [],
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
      storedEventHistory: {
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
      this.requestHistory = this.storedEventHistory
    },
    methods: {
      listSignals (name) {
        this.request = name
        // eslint-disable-next-line no-undef
        const SystemService = new api.default.SystemServiceClient(this.$store.state.brokerServerIp)
        // eslint-disable-next-line no-undef
        const request = new api.default.NameSpace()
        request.setName(name)
        SystemService.listSignals(request, {}, this.callBack)
        this.connectionStatus = 'success--text'
        const entry = { date: Date.now(), request: this.request, response: 'Signals listed' }
        this.requestHistory.push(entry)
        this.$store.commit('updateRequestHistory', this.requestHistory)
      },
      callBack (err, response) {
        if (response) {
          console.error( 'listSingal error: ', err );
        }
      },
      getConfiguration() {
        this.request = 'GetConfiguration'
        // eslint-disable-next-line no-undef
        const SystemService = new api.default.SystemServiceClient(this.$store.state.brokerServerIp)
        // eslint-disable-next-line no-undef
        const request = new api.default.Empty()
        SystemService.getConfiguration(request, {}, this.callBack)
      },
      fetchLists() {
        this.request = name
        // eslint-disable-next-line no-undef
        const SystemService = new api.default.NetworkServiceClient(this.$store.state.brokerServerIp)
        // const request = new api.default.NameSpace()
        // request.setName(name)
        // eslint-disable-next-line no-undef
        const request = new api.default.Empty()
        SystemService.getConfiguration(request, {}, this.fetchListsCallback)
      },
      fetchListsCallback(err, response) {
        if (response) {
          this.connectionStatus == 'success--text'
          const lists = response.getConfigurationList();
          lists.forEach(list => {
            console.log('nameSpace', list.getNamespace().getName());
          })
        } else {
          this.connectionStatus == 'error--text'
        }
      },
      subscribe(ClientId, Signal) {
        this.request = 'Subscribe'
        // eslint-disable-next-line no-undef
        const NetworkService = new api.default.NetworkServiceClient(this.$store.state.brokerServerIp)
        // eslint-disable-next-line no-undef
        const nameSpace = new api.default.NameSpace()
        nameSpace.setName("SafetyCANexposed")
        // eslint-disable-next-line no-undef
        const signalId = new api.default.SignalId()
        signalId.setNamespace(nameSpace)
        signalId.setName("ASDMSafeExpoFr16")
        // create empty array to contain signals
        const signals = [];
        signals.push(signalId)
        // eslint-disable-next-line no-undef
        const signalIds = new api.default.SignalIds()
        signalIds.setSignalidList(signals)
        // eslint-disable-next-line no-undef
        const subsConfig = new api.default.SubscriberConfig()
        // eslint-disable-next-line no-undef
        const clientId = new api.default.ClientId()
        clientId.setId("my_client")
        subsConfig.setSignals(signalIds)
        subsConfig.setClientid(clientId)
        subsConfig.setOnchange(false)
        const stream = NetworkService.subscribeToSignals(subsConfig)
        console.log('stream', stream);
        stream.on('data', function (response) {
          const signals = response.getSignalList()
          signals.forEach(signal => {
            const name = signal.getId().getName()
            const data = signal.getDouble()
            console.log('data', name, data, );
            console.log('signal', signal);
            let signalData = ''
            if (signal.hasDouble()) {
              signalData = signal.getDouble()
            } else if (signal.hasInteger()) {
              signalData = signal.getInteger()
            } else if (signal.hasArbitration()) {
              signalData = signal.getArbitration()
            } else if (signal.hasEmpty()) {
              signalData = signal.getEmpty()
            }
            console.log('signalData', signalData);
            return signalData
          });
        });
        setTimeout(() => {
          stream.cancel()
          this.request = 'Cancel Sub';
          const entry = { date: Date.now(), request: this.request, response: signalId.getName() }
          this.requestHistory.push(entry)
          this.$store.commit('updateRequestHistory', this.requestHistory)
        }, 3000);
        const entry = { date: Date.now(), request: this.request, response: signalId.getName() }
        this.requestHistory.push(entry)
        this.$store.commit('updateRequestHistory', this.requestHistory)
      },
    },
  }
</script>
