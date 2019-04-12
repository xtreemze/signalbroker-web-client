<template>
  <VFadeTransition>
    <VFlex
      v-if="visible"
      xs12
      sm6
      md4
      lg3
    >
      <VCard ref="name">
        <VCardTitle>
          <h4>
            {{ name }}
          </h4>
        </VCardTitle>
        <VExpandTransition>
          <VSparkline
            :auto-draw="animate"
            :auto-draw-duration="drawDuration"
            height="100"
            :value="chartDataValueArray"
            color="grey"
            :line-width="lineWidth"
            :type="chartType"
            :padding="padding"
            :smooth="radius"
            :fill="fill"
            stroke-linecap="round"
          />
        </VExpandTransition>
        <VDivider />
        <VList dense>
          <VListTile>
            <VListTileContent>
              {{ dataType || 'Data type' }}:
            </VListTileContent>
            <VListTileContent class="align-end">
              <h3 class="monoSpace">
                {{ data.data }}
              </h3>
            </VListTileContent>
          </VListTile>
          <VListTile>
            <VListTileContent>
              Bus:
            </VListTileContent>
            <VListTileContent class="align-end">
              {{ nameSpace }}
            </VListTileContent>
          </VListTile>
        </VList>
        <VCardActions>
          <VBtn
            block
            flat
            @click="showLog = !showLog"
          >
            <VIcon small>
              view_list
            </VIcon>
            <VIcon small>
              {{ showLog ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
            </VIcon>
          </VBtn>
          <VBtn
            block
            flat
            @click="showAdditionalInfo = !showAdditionalInfo"
          >
            <VIcon small>
              info
            </VIcon>
            <VIcon small>
              {{ showAdditionalInfo ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
            </VIcon>
          </VBtn>
          <VBtn
            block
            flat
            @click="showConfiguration = !showConfiguration"
          >
            <VIcon small>
              settings
            </VIcon>
            <VIcon small>
              {{ showConfiguration ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
            </VIcon>
          </VBtn>
        </VCardActions>
        <VSlideYTransition>
          <VCardText
            v-if="showLog"
            pa-0
            ma-0
          >
            <VDataTable
              :items="entryLog"
              item-key="id"
              :pagination.sync="pagination"
              hide-headers
            >
              <template v-slot:items="props">
                <tr class="monoSpace">
                  <td>
                    {{ props.item.id | toDate }}
                  </td>
                  <td>
                    {{ props.item.data }}
                  </td>
                </tr>
              </template>
            </VDataTable>
          </VCardText>
        </VSlideYTransition>
        <VSlideYTransition>
          <VCardText
            v-if="showAdditionalInfo"
            px-0
            mx-0
          >
            <VDivider />
            <VList dense>
              <VListTile>
                <VListTileContent>
                  Description:
                </VListTileContent>
                <VListTileContent class="align-end">
                  {{ description }}
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  Min:
                </VListTileContent>
                <VListTileContent class="align-end">
                  {{ min }}
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  Max:
                </VListTileContent>
                <VListTileContent class="align-end">
                  {{ max }}
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  Unit:
                </VListTileContent>
                <VListTileContent class="align-end">
                  {{ unit }}
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  Size:
                </VListTileContent>
                <VListTileContent class="align-end">
                  {{ size }}
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  Raw:
                </VListTileContent>
                <VListTileContent class="align-end monoSpace">
                  {{ raw | toRawString }}
                </VListTileContent>
              </VListTile>
            </VList>
          </VCardText>
        </VSlideYTransition>
        <VSlideYTransition>
          <VCardText
            v-if="showConfiguration"
            px-0
            mx-0
          >
            <VDivider />
            <VList>
              <VListTile>
                <VListTileContent>
                  <VContainer px-0>
                    <VLayout row>
                      <VFlex>
                        <VSlider
                          v-model="dataHistory"
                          label="Data Entries"
                          max="800"
                          min="2"
                          step="1"
                        />
                      </VFlex>
                      <VFlex
                        shrink
                        headline
                        pt-4
                      >
                        {{ dataHistory }}
                      </VFlex>
                    </VLayout>
                  </VContainer>
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  <VRadioGroup
                    v-model="chartType"
                    row
                  >
                    <VRadio
                      label="Trend line"
                      value="trend"
                    />
                    <VRadio
                      label="Bar graph"
                      value="bar"
                    />
                  </vradiogroup>
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  <VContainer px-0>
                    <VLayout row>
                      <VFlex>
                        <VSlider
                          v-model="lineWidth"
                          label="Line width"
                          max="12"
                          min="0.1"
                          step="0.1"
                        />
                      </VFlex>
                      <VFlex
                        shrink
                        headline
                        pt-4
                      >
                        {{ lineWidth }}
                      </VFlex>
                    </VLayout>
                  </VContainer>
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  <VContainer px-0>
                    <VLayout row>
                      <VFlex>
                        <VSlider
                          v-model="radius"
                          label="Smoothing"
                          max="10"
                          min="0"
                          step="1"
                        />
                      </VFlex>
                      <VFlex
                        shrink
                        headline
                        pt-4
                      >
                        {{ radius }}
                      </VFlex>
                    </VLayout>
                  </VContainer>
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  <VContainer px-0>
                    <VLayout row>
                      <VFlex>
                        <VSlider
                          v-model="padding"
                          label="Padding"
                          max="32"
                          min="0"
                          step="1"
                        />
                      </VFlex>
                      <VFlex
                        shrink
                        headline
                        pt-4
                      >
                        {{ padding }}
                      </VFlex>
                    </VLayout>
                  </VContainer>
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  <VContainer px-0>
                    <VSwitch
                      v-model="fill"
                      label="Fill"
                    />
                  </VContainer>
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  <VContainer px-0>
                    <VSwitch
                      v-model="animate"
                      label="Animate"
                    />
                  </VContainer>
                </VListTileContent>
              </VListTile>
              <VListTile>
                <VListTileContent>
                  <VContainer px-0>
                    <VLayout row>
                      <VFlex>
                        <VSlider
                          v-model="drawDuration"
                          label="Draw duration"
                          max="800"
                          min="100"
                          step="1"
                        />
                      </VFlex>
                      <VFlex
                        shrink
                        headline
                        pt-4
                      >
                        {{ drawDuration }}
                      </VFlex>
                    </VLayout>
                  </VContainer>
                </VListTileContent>
              </VListTile>
            </VList>
          </VCardText>
        </VSlideYTransition>
      </VCard>
    </VFlex>
  </VFadeTransition>
</template>
<script>
  export default {
    name: 'SignalCard',
    filters: {
      toDate (input) {
        return new Date(input).toLocaleTimeString({}, { hour12: false })
      },
      toRawString (input) {
        if (input) {
          return input.map(entry => {
            let preliminaryResult = entry.toString(16)
            let result = ''
            if (preliminaryResult.length < 2) {
              result = "0" + preliminaryResult
            } else {
              result = preliminaryResult
            }
            return result }).toString()
        }
      },
    },
    props: {
      name: { type: String, default: null },
      dataType: { type: String, default: null },
      nameSpace: { type: String, default: null },
      unit: { type: String, default: null },
      description: { type: String, default: null },
      data: { type: Object, default: null },
      min: { type: Number, default: null },
      max: { type: Number, default: null },
      size: { type: Number, default: null },
      raw: { type: [Uint8Array, String], default: null },
      onlineFilter: { type: Boolean },
    },
    data () {
      return {
        pagination: {
          sortBy: 'id',
          descending: true,
        },
        showAdditionalInfo: false,
        showConfiguration: false,
        entryLog: [],
        showLog: false,
        animate: true,
        drawDuration: 300,
        radius: 2,
        padding: 6,
        lineWidth: 2.2,
        dataHistory: 42,
        chartType: 'trend',
        typeOptions: ['trend', 'bar'],
        chartDataValueArray: [],
        fill: false,
        lastUpdate: '',
      }
    },
    computed: {
      // stale(){return (this.lastUpdate + 500 < Date.now())},
      visible () {
        if (this.onlineFilter) {
          const dataLength = this.chartDataValueArray.length
          const dataSet = new Set(this.chartDataValueArray)
          const dataSetLength = dataSet.size
          if (dataSetLength < 3 || dataLength < this.dataHistory) {
            return false
          } else { return true }
        } else { return true }
      },
    },
    watch: {
      data () {
        // this.recordUpdate()
        this.chartDataValueArray.push(this.data.data)
        this.entryLog.push({ id: this.data.timestamp, data: this.data.data })
        if (this.chartDataValueArray.length > this.dataHistory) {
          const difference = this.chartDataValueArray.length - this.dataHistory
          this.chartDataValueArray.splice(0, difference)
        }
        if (this.entryLog.length > this.dataHistory) {
          const difference = this.entryLog.length - this.dataHistory
          this.entryLog.splice(0, difference)
        }
      },
    },
    created () {
      this.chartDataValueArray = new Array(this.dataHistory)
      this.chartDataValueArray.fill(0)
      this.entryLog = new Array(this.dataHistory)
      this.entryLog.fill({ id: 0, data: 0 })
    },
    methods: {
      // recordUpdate(){ this.lastUpdate = Date.now()},
    },
  }
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
.monoSpace {
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
}
</style>
