<template>
  <VCard class="marginToolbar">
    <VToolbar
      card
      color="transparent"
      extended
    >
      <VIcon>
        directions_car
      </VIcon>
      <VToolbarTitle>
        Signal tree
      </VToolbarTitle>
      <VSpacer />
      <template v-slot:extension>
        <VFlex
          grow
          ml-2
        >
          <VTextField
            v-model.trim.lazy="search"
            :disabled="signalSelectionItems.length === 0"
            label="Search signals"
            flat
            hide-details
            clearable
            prepend-icon="search"
          />
        </VFlex>
        <VFlex
          shrink
          px-4
        >
          <VCheckbox
            v-model="caseSensitive"
            class="hidden-sm-and-down"
            :disabled="signalSelectionItems.length === 0"
            dark
            hide-details
            label="Case sensitive"
          />
        </VFlex>
      </template>
    </VToolbar>
    <VLayout
      row
      wrap
    >
      <VFlex
        pl-4
        xs12
        sm12
        md6
      >
        <VCardText
          v-if="signalSelectionItems.length === 1"
          class="overflowY"
          py-0
        >
          <VExpandTransition>
            <VTreeview
              v-model="selectedSignalsLocal"
              :search="search"
              :items="signalSelectionItems"
              selectable
              transition
              :open.sync="treeOpenItems"
              return-object
            />
          </VExpandTransition>
        </VCardText>
        <VCardText
          v-else
          pt-3
        >
          <VBtn
            depressed
            block
            @click="fetchLists"
          >
            Fetch
          </VBtn>
        </VCardText>
      </VFlex>
      <VDivider />
      <VFlex
        xs12
        sm12
        md6
      >
        <VDivider class="hidden-md-and-up" />
        <VLayout
          row
          wrap
          class="overflowY"
          py-3
        >
          <div
            v-if="selectedSignalsLocal.length === 0"
            key="title"
            class="title font-weight-light grey--text pa-3 text-xs-center"
          >
            Select signals to be controlled through this interface
          </div>
          <VScrollXTransition
            group
            hide-on-leave
          >
            <VChip
              v-for="(selection, index) in selectedSignalsLocal"
              :key="index"
              small
            >
              {{ selection.name }}
            </VChip>
          </VScrollXTransition>
        </VLayout>
      </VFlex>
    </VLayout>
    <VDivider />
    <VCardActions>
      <VBtn
        flat
        @click="clear"
      >
        Clear
      </VBtn>
      <VSpacer />
      <VBtn
        :disabled="selectedSignalsLocal === selectedSignals"
        color="success"
        depressed
        @click="saveSignalState"
      >
        Save
        <VIcon
          right
          class="hidden-sm-and-down"
        >
          save
        </VIcon>
      </VBtn>
      <VBtn
        :disabled="selectedSignals.length === 0"
        color="info"
        depressed
        to="control"
      >
        Control
        <VIcon
          right
          class="hidden-sm-and-down"
        >
          gamepad
        </VIcon>
      </VBtn>
    </VCardActions>
    <VSnackbar
      v-model="snackbarDisplayed"
      bottom
      right
      color="error"
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
  </VCard>
</template>
<script>
  import './../grpc/dist/api.js'
  export default {
    data: () => { return {
      request: '',
      caseSensitive: false,
      snackbarDisplayed: false,
      treeOpenItems: [],
      selectedSignalsLocal: [],
      snackbarMessage: 'Not connected',
      snackbarIcon: 'warning',
    } },
    computed: {
      search: {
        get () {
          return this.$store.state.search
        },
        set (value) {
          this.$store.commit('updateSearch', value)
        },
      },
      signalSelectionItems: {
        get () {
          return this.$store.state.signalSelectionItems
        },
        set (value) {
          this.$store.commit('updateSignalSelectionItems', value)
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
      filter () {
        return this.caseSensitive
          ? (item, textKey) => { return item[textKey].indexOf(this.search) > -1 }
          : undefined
      },
    },
    watch: {
    },
    created () {
    },
    mounted(){
      this.selectedSignalsLocal = this.selectedSignals
      this.reset()
    },
    methods: {
      clear(){
        this.search = null;
        this.selectedSignalsLocal = []
      },
      reset () {
        const resultingArray = []
        resultingArray.push({name: 'Signal Buses', id: 'Signal Buses', children: []})
        this.selectedSignals.forEach(signal => {
          resultingArray[0].children.push({name: signal.name, id: signal.id, children: signal.children})
        })
        this.treeOpenItems = resultingArray
      },
      snackbar (color, snackbarMessage) {
        this.connectionStatus = color
        this.snackbarMessage = snackbarMessage
        this.snackbarDisplayed = true
      },
      saveSignalState () {
        this.selectedSignals = this.selectedSignalsLocal
      },
      fetchLists () {
        this.request = 'Fetch lists'
        // eslint-disable-next-line no-undef
        const SystemService = new api.default.SystemServiceClient(this.$store.state.brokerServerIp)
        // eslint-disable-next-line no-undef
        const request = new api.default.Empty()
        SystemService.getConfiguration(request, {}, this.fetchListsCallback)
      },
      fetchListsCallback (err, response) {
        if (response) {
          this.connectionStatus == 'success--text'
          this.requestHistory.push({ date: Date.now(), request: this.request, response: 'List networks' })
          this.populateParents(response.getNetworkinfoList())
        } else {
          this.snackbar('error--text', "The broker is offline.")
        }
      },
      populateParents (namespaceList) {
        const signals = {
          id: 'Signal Buses',
          name: 'Signal Buses',
          children: [],
        }
        namespaceList.forEach(list => {
          const exportedChild = {
            id: list.getNamespace().getName(),
            name: list.getNamespace().getName(),
            children: this.listNamespaceSignals(list),
          };
          signals.children.push(exportedChild)
        })
        this.signalSelectionItems = [signals]
      },
      listNamespaceSignals (namespaceName) {
        const frameGroup = [];
        const parentName = namespaceName.getNamespace().getName()
        this.request = 'Fetch signals'
        // eslint-disable-next-line no-undef
        const SystemService = new api.default.SystemServiceClient(this.$store.state.brokerServerIp)
        // eslint-disable-next-line no-undef
        const request = new api.default.NameSpace()
        request.setName(parentName)
        this.connectionStatus = 'success--text'
        this.requestHistory.push({ date: Date.now(), request: this.request, response: 'List signals' })
        SystemService.listSignals(request, {}, function listSignalsCallback (err, response) {
          if (response) {
            const frames = response.getFrameList()
            frames.forEach(frame => {
              const frameMetaData = frame.getSignalinfo().getMetadata()
              const frameSignalId = frame.getSignalinfo().getId()
              const frameName = frameSignalId
                .getName()
              const frameChildInfo = frame.getChildinfoList()
              const frameChildGroup = []
              frameChildInfo.forEach(frameChild => {
                const frameChildSignalId = frameChild.getId()
                const frameChildMetaData = frameChild.getMetadata()
                const frameChildName = frameChildSignalId.getName()
                const frameChildLabel = { id: frameChildName,
                                          name: frameChildName,
                                          children: [],
                                          signalId: frameChildSignalId,
                                          min: frameChildMetaData.getMin(),
                                          max: frameChildMetaData.getMax(),
                                          size: frameChildMetaData.getSize(),
                                          unit: frameChildMetaData.getUnit(),
                                          description: frameChildMetaData.getDescription(),
                }
                frameChildGroup.push(frameChildLabel)
              })
              frameGroup.push({
                id: frameName,
                name: frameName,
                children: frameChildGroup,
                signalId: frameSignalId,
                min: frameMetaData.getMin(),
                max: frameMetaData.getMax(),
                size: frameMetaData.getSize(),
                unit: frameMetaData.getUnit(),
                description: frameMetaData.getDescription(),
              })
            })
          }
        })
        return frameGroup
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
