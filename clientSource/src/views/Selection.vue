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
        <VSheet
          class="
          ml-2
        "
          color="transparent"
        >
          <VTextField
            v-model.trim.lazy="search"
            :disabled="signalSelectionItems.length === 0"
            label="Search signals"
            flat
            hide-details
            clearable
            prepend-icon="search"
            @focus="collapseTree"
            @blur="openTree"
          />
          <VCheckbox
            v-model="caseSensitive"
            :disabled="signalSelectionItems.length === 0"
            hide-details
            label="Case sensitive"
          />
        </VSheet>
      </template>
    </VToolbar>
    <VLayout
      row
      wrap
    >
      <VFlex
        xs12
        py-4
        pl-4
        sm12
        md6
        class="overflowY"
      >
        <VCardText
          v-if="signalSelectionItems.length === 1"
          py-0
          class="tree"
        >
          <VExpandTransition>
            <VTreeview
              v-model="selectedSignalsLocal"
              :search="search"
              itemid="id"
              :items="signalSelectionItems"
              selectable
              transition
              :open.sync="treeOpenItems"
              return-object
              @input="selectSignals"
            />
          </VExpandTransition>
        </VCardText>
        <VCardText
          v-else
          pt-3
        >
          <VContainer>
            <VLayout
              align-center
              justify-center
            >
              <VIcon
                large
                disabled
              >
                sync_problem
              </VIcon>
            </VLayout>
          </VContainer>
        </VCardText>
      </VFlex>
      <VDivider />
      <VFlex
        xs12
        sm12
        md6
        py-4
        class="overflowY"
      >
        <VDivider class="hidden-md-and-up" />
        <div
          v-if="selectedSignalsLocalLength === 0"
          key="title"
          class="title font-weight-light grey--text pa-3 text-xs-center"
        >
          Select signals to be controlled through this interface
        </div>
        <span
          v-for="(selection, index) in selectedSignalsChip"
          :key="index"
        >
          <VDivider
            v-if="selection.children.length > 0"
            class="my-2"
          />
          <VChip
            small
            :label="(selection.children.length > 0)"
            @input="remove(index)"
          >
            {{ selection.name }}
          </VChip>
        </span>
      </VFlex>
    </VLayout>
    <VDivider />
    <VCardActions>
      <VLayout
        row
        wrap
      >
        <VBtn
          :disabled="selectedSignalsLocalLength === 0"
          flat
          @click="clear"
        >
          Clear
        </VBtn>
        <VBtn
          flat
          @click="fetchLists"
        >
          Fetch
        </VBtn>
        <VSpacer />
        <VBtn
          :disabled="selectedSignalsChip === selectedSignals"
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
          :disabled="selectedSignalsLength === 0"
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
      </VLayout>
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
        v-if="snackbarUrl.length > 1"
        flat
        :href="snackbarUrl"
      >
        <VIcon>
          help
        </VIcon>
      </VBtn>
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
      selectedSignalsChip: [],
      snackbarMessage: 'Not connected',
      snackbarIcon: 'warning',
      snackbarUrl: '',
    } },
    computed: {
      selectedSignalsLength(){
        return this.selectedSignals.length
      },
      selectedSignalsLocalLength(){
        return this.selectedSignalsLocal.length
      },
      search: {
        get () {
          return this.$store.state.search
        },
        set (value) {
          this.$store.commit('updateSearch', value)
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
    mounted () {
      this.selectedSignalsLocal = this.selectedSignals
      this.reset()
      if (this.signalSelectionItems.length === 0) {
        this.fetchLists()
      }
    },
    methods: {
      collapseTree(){
        this.treeOpenItems = []
      },
      openTree(){
        const resultingArray = []
        resultingArray.push({ name: 'Signal Buses', id: 'Signal Buses', children: [] })
        this.selectedSignalsLocal.forEach(signal => {
          resultingArray[0].children.push({ name: signal.name, id: signal.id, children: signal.children })
        })
        this.treeOpenItems = resultingArray
      },
      selectSignals(){
        this.selectedSignalsChip = this.selectedSignalsLocal
      },
      clear () {
        // this.search = null;
        this.selectedSignalsLocal = []
      },
      reset () {
        const resultingArray = []
        resultingArray.push({ name: 'Signal Buses', id: 'Signal Buses', children: [] })
        this.selectedSignals.forEach(signal => {
          resultingArray[0].children.push({ name: signal.name, id: signal.id, children: signal.children })
        })
        this.treeOpenItems = resultingArray
      },
      snackbar (color, snackbarMessage, url) {
        this.connectionStatus = color
        this.snackbarMessage = snackbarMessage
        this.snackbarDisplayed = true
        if (url) {
          this.snackbarUrl = url
        } else {
          this.snackbarUrl = ''
        }
      },
      saveSignalState () {
        this.selectedSignals = this.selectedSignalsChip
      },
      fetchLists () {
        this.request = 'Fetch lists'
        // eslint-disable-next-line no-undef
        const SystemService = new api.default.SystemServiceClient(this.brokerServerIp)
        // eslint-disable-next-line no-undef
        const request = new api.default.Empty()
        SystemService.getConfiguration(request, {}, this.fetchListsCallback)
      },
      fetchListsCallback (err, response) {
        if (response) {
          if (this.connectionStatus !== 'success--text') {
            this.connectionStatus = 'success--text'
          }
          this.populateParents(response.getNetworkinfoList())
        } else {
          this.snackbar('error--text', "The broker envoy is offline.", "https://github.com/volvo-cars/signalbroker-web-client/tree/master/configuration/grpc_web")
        }
      },
      populateParents (namespaceList) {
        let globalIndex = 0
        const signals = {
          id: 'Signal Buses',
          name: 'Signal Buses',
          children: [],
        }
        namespaceList.forEach(list => {
          const exportedChild = {
            id: list.getNamespace().getName() + globalIndex,
            name: list.getNamespace().getName(),
            children: this.listNamespaceSignals(list),
          };
          globalIndex += 1
          signals.children.push(exportedChild)
        })
        this.signalSelectionItems = [signals]
      },
      listNamespaceSignals (namespaceName) {
        const frameGroup = [];
        const parentName = namespaceName.getNamespace().getName()
        this.request = 'Fetch signals'
        // eslint-disable-next-line no-undef
        const SystemService = new api.default.SystemServiceClient(this.brokerServerIp)
        // eslint-disable-next-line no-undef
        const request = new api.default.NameSpace()
        request.setName(parentName)
        if (this.connectionStatus !== 'success--text') {
          this.connectionStatus = 'success--text'
        }
        this.requestHistory.push({ date: Date.now(), request: this.request, response: 'List signals' })
        SystemService.listSignals(request, {}, function listSignalsCallback (err, response) {
          if (response) {
            let childIndex = 0;
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
                const frameChildLabel = {
                  id: parentName + frameChildName + childIndex,
                  name: frameChildName,
                  children: [],
                  signalId: frameChildSignalId,
                  min: frameChildMetaData.getMin(),
                  max: frameChildMetaData.getMax(),
                  size: frameChildMetaData.getSize(),
                  unit: frameChildMetaData.getUnit(),
                  description: frameChildMetaData.getDescription(),
                }
                childIndex += 1
                frameChildGroup.push(frameChildLabel)
              })
              frameGroup.push({
                id: parentName + frameName + childIndex,
                name: frameName,
                children: frameChildGroup,
                signalId: frameSignalId,
                min: frameMetaData.getMin(),
                max: frameMetaData.getMax(),
                size: frameMetaData.getSize(),
                unit: frameMetaData.getUnit(),
                description: frameMetaData.getDescription(),
              })
              childIndex += 1
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
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(98vh - 380px);
}
.marginToolbar {
  margin-top: -64px;
}
.tree{
overflow-x: visible
}
</style>