(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["monitor"],{"0db6":function(t,e,i){},"25ca":function(t,e,i){"use strict";var a=i("0db6"),n=i.n(a);n.a},"4f7f":function(t,e,i){"use strict";var a=i("c26b"),n=i("b39a"),s="Set";t.exports=i("e0b8")(s,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return a.def(n(this,s),t=0===t?0:t,t)}},a)},"5df3":function(t,e,i){"use strict";var a=i("02f4")(!0);i("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=a(e,i),this._i+=t.length,{value:t,done:!1})})},a373:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("VCard",{staticClass:"marginToolbar"},[i("VToolbar",{attrs:{card:"",color:"transparent"}},[i("VIcon",[t._v("\n        traffic\n      ")]),i("VToolbarTitle",[t._v("\n        Traffic Monitor\n      ")])],1),i("VContainer",{staticClass:"my-0 py-0",attrs:{"fill-height":"",fluid:""}},[i("VLayout",{attrs:{row:"",wrap:""}},[i("VSlider",{staticClass:"mr-4",attrs:{label:"Filter strength",max:"20",min:"0",step:"1","thumb-label":"","hide-actions":"","hide-details":""},model:{value:t.filterStrength,callback:function(e){t.filterStrength=t._n(e)},expression:"filterStrength"}}),i("VSlider",{attrs:{"hide-details":"","hide-actions":"",label:"History",max:"300",min:"4",step:"1","thumb-label":""},model:{value:t.dataHistory,callback:function(e){t.dataHistory=t._n(e)},expression:"dataHistory"}}),i("VSwitch",{staticClass:"pl-3",attrs:{label:"Show charts"},model:{value:t.charts,callback:function(e){t.charts=e},expression:"charts"}})],1)],1),i("VCardText",{staticClass:"overflowY py-3"},[0===t.selectedSignals.length?i("div",{key:"title",staticClass:"title font-weight-light grey--text pa-3 text-xs-center my-4"},[t._v("\n        Select frames and signals from the "),i("RouterLink",{attrs:{to:"/selection"}},[i("a",[t._v("Selection Tree")])])],1):t._e(),t._l(t.selectedSignals,function(e,a){return i("span",{key:a},[e.isParent?i("VSpacer",{staticClass:"my-4"}):t._e(),i("VChip",{staticClass:"transitionNone",attrs:{small:"",color:t.responseIncludes(e.name,e.namespace)?"success":"",close:"",selected:e.highlight,label:e.isParent},on:{input:function(e){return t.remove(a)},click:function(i){return i.stopPropagation(),t.highlight(e.name,a)}}},[t._v("\n          "+t._s(e.name)+"\n        ")]),e.isParent?i("span",{staticClass:"caption grey--text"},[t._v(" "+t._s(e.namespace))]):t._e(),e.isParent?i("VSpacer"):t._e()],1)})],2),i("VDivider"),i("VCardActions",[i("VLayout",{attrs:{row:"",wrap:""}},[i("div",{staticClass:"mx-1"},[i("VTooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("VBtn",t._g({attrs:{flat:"",color:"grey",depressed:"",to:"selection"}},a),[i("VIcon",[t._v("\n                  nature\n                ")])],1)]}}])},[i("span",[t._v("Selection tree")])])],1),i("VSpacer"),t.subscribed?i("VBtn",{attrs:{color:"error",depressed:""},on:{click:t.stopStream}},[t._v("\n          Unsubscribe\n        ")]):i("VBtn",{attrs:{disabled:0===t.selectedSignals.length,color:"green",depressed:""},on:{click:t.streamSetup}},[t._v("\n          Subscribe\n        ")])],1)],1)],1),i("VContainer",{attrs:{fluid:"","grid-list-lg":"","mt-1":"","px-0":""}},[i("VDataIterator",{attrs:{"hide-actions":"",items:t.signalDataList,"content-class":"layout row wrap","item-key":"id","rows-per-page-items":t.rowsPerPageItems},scopedSlots:t._u([{key:"item",fn:function(e){return[i("SignalCard",{directives:[{name:"show",rawName:"v-show",value:t.charts,expression:"charts"}],attrs:{name:e.item.name,data:e.item.data,"name-space":e.item.nameSpace,"data-type":e.item.dataType,min:e.item.min,max:e.item.max,unit:e.item.unit,size:e.item.size,raw:e.item.raw,description:e.item.description,timestamp:e.item.timestamp,"data-history":t.dataHistory,highlight:e.item.highlight,"unique-filter-global":t.filterStrength}})]}}])})],1),i("VSnackbar",{attrs:{bottom:"",right:"",color:t.snackbarColor,timeout:8e3},model:{value:t.snackbarDisplayed,callback:function(e){t.snackbarDisplayed=e},expression:"snackbarDisplayed"}},[i("VLayout",[i("VIcon",{attrs:{left:""}},[t._v("\n        "+t._s(t.snackbarIcon)+"\n      ")]),t._v("\n      "+t._s(t.snackbarMessage)+"\n    ")],1),i("VBtn",{attrs:{flat:""},nativeOn:{click:function(e){t.value=!1}}},[i("VIcon",[t._v("\n        close\n      ")])],1)],1)],1)},n=[],s=(i("ac6a"),i("7f7f"),i("20d6"),i("9508"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("VFadeTransition",[t.visible||t.highlight?i("VFlex",{attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[i("VCard",[i("VCardTitle",[i("VExpandXTransition",[i("VIcon",{directives:[{name:"show",rawName:"v-show",value:t.highlight,expression:"highlight"}],attrs:{small:"",left:"",color:"primary"}},[t._v("\n            label\n          ")])],1),i("h4",[t._v("\n          "+t._s(t.name)+"\n        ")]),i("VSpacer")],1),i("VContainer",{attrs:{fluid:"","fill-height":"","ma-0":"","pa-0":"",color:"transparent"}},[i("VSparkline",{attrs:{"auto-draw":t.animate,"auto-draw-duration":t.drawDuration,value:t.chartDataValueArray,color:"grey",height:t.chartHeight,"line-width":t.lineWidth,type:t.chartType,padding:t.padding,smooth:t.radius,fill:t.fill,"stroke-linecap":"round","auto-line-width":t.autoLineWidth}})],1),i("VDivider"),i("VList",{attrs:{dense:"",color:"transparent"}},[t.isParent?i("VListTile",[i("VListTileContent",{staticClass:"grey--text text-uppercase font-weight-black"},[t._v("\n            Raw:\n          ")]),i("VListTileContent",{staticClass:"align-end text-xs-right"},[i("span",{staticClass:"monoSpace text-truncate text-uppercase"},t._l(t.raw,function(e,a){return i("span",{key:a},[t.rawStringLength(e)<2?i("span",[t._v("0")]):t._e(),t._v(t._s(t._f("rawStringFilter")(e))+"\n              ")])}),0)])],1):i("VListTile",[i("VListTileContent",{staticClass:"grey--text text-uppercase font-weight-black"},[t._v("\n            "+t._s(t.dataType||"Data type")+":\n          ")]),i("VListTileContent",{staticClass:"align-end text-xs-right"},[i("span",{staticClass:"monoSpace text-truncate "},[t._v("\n              "+t._s(t.data.data)+"\n            ")])])],1)],1),i("VCardActions",[i("VLayout",[i("VBtn",{attrs:{block:"",flat:""},on:{click:function(e){t.showLog=!t.showLog}}},[i("VIcon",{attrs:{small:"",color:"grey"}},[t._v("\n              view_list\n            ")]),i("VIcon",{attrs:{small:"",color:"grey"}},[t._v("\n              "+t._s(t.showLog?"keyboard_arrow_down":"keyboard_arrow_up")+"\n            ")])],1),i("VBtn",{attrs:{block:"",flat:""},on:{click:function(e){t.showAdditionalInfo=!t.showAdditionalInfo}}},[i("VIcon",{attrs:{small:"",color:"grey"}},[t._v("\n              info\n            ")]),i("VIcon",{attrs:{small:"",color:"grey"}},[t._v("\n              "+t._s(t.showAdditionalInfo?"keyboard_arrow_down":"keyboard_arrow_up")+"\n            ")])],1),i("VBtn",{attrs:{block:"",flat:""},on:{click:function(e){t.showConfiguration=!t.showConfiguration}}},[i("VIcon",{attrs:{small:"",color:"grey"}},[t._v("\n              settings\n            ")]),i("VIcon",{attrs:{small:"",color:"grey"}},[t._v("\n              "+t._s(t.showConfiguration?"keyboard_arrow_down":"keyboard_arrow_up")+"\n            ")])],1)],1)],1),i("VSlideYTransition",[i("VCardText",{directives:[{name:"show",rawName:"v-show",value:t.showLog,expression:"showLog"}],staticClass:"\n      pa-0\n      ma-0\n      "},[t.visible||t.highlight?i("VDataTable",{attrs:{items:t.entryLog,"item-key":"id",pagination:t.pagination,"hide-headers":""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[i("tr",{staticClass:"monoSpace text-uppercase grey--text text--lighten-1"},[i("td",{staticClass:"px-3"},[t._v("\n                  "+t._s(t._f("toDate")(e.item.id))+"\n                ")]),t.isParent?t._e():i("td",{staticClass:"text-xs-right text-truncate px-3 grey--text text--lighten-1"},[t._v("\n                  "+t._s(e.item.data)+"\n                ")]),t.isParent&&e.item.data.length?i("td",{staticClass:"text-xs-right text-truncate px-3 grey--text text--lighten-1"},t._l(e.item.data,function(e,a){return i("span",{key:a},[t.rawStringLength(e)<2?i("span",[t._v("0")]):t._e(),t._v(t._s(t._f("rawStringFilter")(e))+"\n                  ")])}),0):t._e()])]}}],null,!1,1523841151)}):t._e()],1)],1),i("VSlideYTransition",[i("VCardText",{directives:[{name:"show",rawName:"v-show",value:t.showAdditionalInfo,expression:"showAdditionalInfo"}],staticClass:"\n      pa-0\n      ma-0\n      "},[i("VDivider"),t.visible||t.highlight?i("VList",{staticClass:"grey--text text--lighten-2",attrs:{dense:""}},[i("VListTile",[i("VListTileContent",[t._v("\n                Description:\n              ")]),i("VListTileContent",{staticClass:"align-end"},[t._v("\n                "+t._s(t.description)+"\n              ")])],1),i("VListTile",[i("VListTileContent",[t._v("\n                Bus:\n              ")]),i("VListTileContent",{staticClass:"align-end"},[t._v("\n                "+t._s(t.nameSpace)+"\n              ")])],1),t.isParent?t._e():i("VListTile",[i("VListTileContent",[t._v("\n                Min:\n              ")]),i("VListTileContent",{staticClass:"align-end"},[t._v("\n                "+t._s(t.min)+"\n              ")])],1),t.isParent?t._e():i("VListTile",[i("VListTileContent",[t._v("\n                Max:\n              ")]),i("VListTileContent",{staticClass:"align-end"},[t._v("\n                "+t._s(t.max)+"\n              ")])],1),t.isParent?t._e():i("VListTile",[i("VListTileContent",[t._v("\n                Unit:\n              ")]),i("VListTileContent",{staticClass:"align-end"},[t._v("\n                "+t._s(t.unit)+"\n              ")])],1),t.isParent?t._e():i("VListTile",[i("VListTileContent",[t._v("\n                Size:\n              ")]),i("VListTileContent",{staticClass:"align-end"},[t._v("\n                "+t._s(t.size)+"\n              ")])],1)],1):t._e()],1)],1),i("VSlideYTransition",[i("VCardText",{directives:[{name:"show",rawName:"v-show",value:t.showConfiguration,expression:"showConfiguration"}],staticClass:"\n          grey--text text--lighten-2\n      pa-0\n      ma-0\n      "},[i("VDivider"),t.visible||t.highlight?i("VList",{attrs:{dense:""}},[i("VListTile",[i("VListTileContent",[i("VContainer",{attrs:{"px-0":""}},[i("VLayout",{attrs:{row:""}},[i("VFlex",[i("VSlider",{attrs:{"hide-actions":"","hide-details":"",label:"Filter strength",max:"30",min:"1",step:"1"},model:{value:t.uniqueFilter,callback:function(e){t.uniqueFilter=e},expression:"uniqueFilter"}})],1),i("VFlex",{attrs:{shrink:"",headline:"","pt-4":""}},[t._v("\n                      "+t._s(t.uniqueFilter)+"\n                    ")])],1)],1)],1)],1),i("VListTile",[i("VListTileContent",[i("VContainer",{attrs:{"px-0":""}},[i("VLayout",{attrs:{row:""}},[i("VFlex",[i("VSlider",{attrs:{"hide-actions":"","hide-details":"",label:"History",max:"800",min:"2",step:"1"},model:{value:t.dataHistoryLocal,callback:function(e){t.dataHistoryLocal=e},expression:"dataHistoryLocal"}})],1),i("VFlex",{attrs:{shrink:"",headline:"","pt-4":""}},[t._v("\n                      "+t._s(t.dataHistoryLocal)+"\n                    ")])],1)],1)],1)],1),i("VListTile",[i("VListTileContent",[i("VContainer",{attrs:{"px-0":""}},[i("VRadioGroup",{attrs:{row:"","hide-actions":"","hide-details":""},model:{value:t.chartType,callback:function(e){t.chartType=e},expression:"chartType"}},[i("VRadio",{attrs:{label:"Trend line",value:"trend"}}),i("VRadio",{attrs:{label:"Bar graph",value:"bar"}})],1)],1)],1)],1),i("VListTile",[i("VListTileContent",[i("VContainer",{attrs:{"px-0":""}},[i("VLayout",{attrs:{row:""}},[i("VFlex",[i("VSlider",{attrs:{"hide-actions":"","hide-details":"",label:"Line width",max:"32",min:"0.1",step:"0.01"},model:{value:t.lineWidth,callback:function(e){t.lineWidth=e},expression:"lineWidth"}})],1),i("VFlex",{attrs:{shrink:"",headline:"","pt-4":""}},[t._v("\n                      "+t._s(t.lineWidth)+"\n                    ")])],1)],1)],1)],1),i("VListTile",[i("VListTileContent",[i("VContainer",{attrs:{"px-0":""}},[i("VLayout",{attrs:{row:""}},[i("VFlex",[i("VSlider",{attrs:{"hide-actions":"","hide-details":"",label:"Smoothing",max:"10",min:"0",step:"0.01"},model:{value:t.radius,callback:function(e){t.radius=e},expression:"radius"}})],1),i("VFlex",{attrs:{shrink:"",headline:"","pt-4":""}},[t._v("\n                      "+t._s(t.radius)+"\n                    ")])],1)],1)],1)],1),i("VListTile",[i("VListTileContent",[i("VContainer",{attrs:{"px-0":""}},[i("VLayout",{attrs:{row:""}},[i("VFlex",[i("VSlider",{attrs:{"hide-actions":"","hide-details":"",label:"Padding",max:"32",min:"0",step:"0.01"},model:{value:t.padding,callback:function(e){t.padding=e},expression:"padding"}})],1),i("VFlex",{attrs:{shrink:"",headline:"","pt-4":""}},[t._v("\n                      "+t._s(t.padding)+"\n                    ")])],1)],1)],1)],1),i("VListTile",[i("VListTileContent",[i("VContainer",{attrs:{"px-0":""}},[i("VSwitch",{attrs:{"hide-actions":"","hide-details":"",label:"Auto line width"},model:{value:t.autoLineWidth,callback:function(e){t.autoLineWidth=e},expression:"autoLineWidth"}})],1)],1)],1),i("VListTile",[i("VListTileContent",[i("VContainer",{attrs:{"px-0":""}},[i("VSwitch",{attrs:{"hide-actions":"","hide-details":"",label:"Fill"},model:{value:t.fill,callback:function(e){t.fill=e},expression:"fill"}})],1)],1)],1),i("VListTile",[i("VListTileContent",[i("VContainer",{attrs:{"px-0":""}},[i("VSwitch",{attrs:{"hide-actions":"","hide-details":"",label:"Animate"},model:{value:t.animate,callback:function(e){t.animate=e},expression:"animate"}})],1)],1)],1),i("VListTile",[i("VListTileContent",[i("VContainer",{attrs:{"px-0":""}},[i("VLayout",{attrs:{row:""}},[i("VFlex",[i("VSlider",{attrs:{"hide-actions":"","hide-details":"",label:"Draw duration",max:"800",min:"100",step:"1"},model:{value:t.drawDuration,callback:function(e){t.drawDuration=e},expression:"drawDuration"}})],1),i("VFlex",{attrs:{shrink:"",headline:"","pt-4":""}},[t._v("\n                      "+t._s(t.drawDuration)+"\n                    ")])],1)],1)],1)],1)],1):t._e()],1)],1)],1)],1):t._e()],1)}),r=[],o=(i("6c7b"),i("5df3"),i("4f7f"),i("34ef"),i("c5f6"),i("6b54"),{name:"SignalCard",filters:{toDate:function(t){var e=new Date(t/1e3);return e.toLocaleTimeString({},{hour12:!1})},toString:function(t){return t.toString()},rawStringFilter:function(t){return t.toString(16)}},props:{name:{type:String,default:null},dataType:{type:String,default:null},nameSpace:{type:String,default:null},unit:{type:String,default:null},description:{type:String,default:null},data:{type:Object,default:null},dataHistory:{type:Number,default:null},min:{type:Number,default:null},max:{type:Number,default:null},size:{type:Number,default:null},uniqueFilterGlobal:{type:Number,default:null},raw:{type:[String,Uint8Array],default:null},highlight:{type:Boolean}},data:function(){return{pagination:{sortBy:"id",descending:!0},showAdditionalInfo:!1,showConfiguration:!1,entryLog:[],showLog:!1,animate:!1,drawDuration:100,radius:2,padding:6,dataHistoryLocal:2,lineWidth:2.2,chartHeight:64,chartType:"trend",typeOptions:["trend","bar"],chartDataValueArray:[],fill:!1,lastUpdate:"",isParent:!1,isBinary:!1,autoLineWidth:!1,uniqueFilter:0}},computed:{dataLength:function(){return this.chartDataValueArray.length},entryLogLength:function(){return this.entryLog.length},dataSetLength:function(){return this.dataSet.size},dataSet:function(){return new Set(this.chartDataValueArray)},visible:function(){return!(this.dataSetLength<this.uniqueFilter&&this.uniqueFilter>1&&this.dataLength>1)}},watch:{uniqueFilterGlobal:function(){this.uniqueFilter=this.uniqueFilterGlobal},data:function(){if(!1===this.isParent){if(this.raw.length>5&&(this.isParent=!0),this.chartDataValueArray.push(this.data.data),this.dataLength>this.dataHistoryLocal){var t=this.dataLength-this.dataHistoryLocal;this.chartDataValueArray.splice(0,t)}if(this.entryLog.push({id:this.data.timestamp,data:this.data.data}),this.entryLogLength>this.dataHistoryLocal){var e=this.entryLogLength-this.dataHistoryLocal;this.entryLog.splice(0,e)}}this.dataLength>86&&this.isBinary&&this.dataSetLength>3?this.fill=!0:this.dataLength<87&&(this.fill=!1),!this.isBinary&&this.dataLength<60&&this.chartType!==this.typeOptions[2]?(this.isBinary=!0,this.setBar()):this.chartType===this.typeOptions[0]||this.isParent||this.setLine(),!this.isBinary&&this.dataLength<90&&(this.isBinary=!1,this.setLine())},dataHistory:function(){this.dataHistoryLocal=this.dataHistory,this.chartType===this.typeOptions[1]&&this.dataHistoryLocal<30?this.autoLineWidth=!0:this.autoLineWidth=!1},raw:function(){if(this.isParent){if(this.chartDataValueArray.push(this.data.data),this.dataLength>this.dataHistoryLocal){var t=this.dataLength-this.dataHistoryLocal;this.chartDataValueArray.splice(0,t)}if(this.entryLog.push({id:this.data.timestamp,data:this.raw}),this.entryLogLength>this.dataHistoryLocal){var e=this.entryLogLength-this.dataHistoryLocal;this.entryLog.splice(0,e)}}}},created:function(){this.chartDataValueArray=new Array(this.dataHistoryLocal),this.chartDataValueArray.fill(0),this.entryLog=new Array(this.dataHistoryLocal),this.entryLog.fill({id:0,data:0})},methods:{setBar:function(){this.chartType!==this.typeOptions[1]&&(this.chartType=this.typeOptions[1],this.lineWidth=4,this.radius=0)},setLine:function(){this.chartType!==this.typeOptions[0]&&(this.chartType=this.typeOptions[0],this.lineWidth=1.8,this.radius=2,this.autoLineWidth=!1)},rawStringLength:function(t){return t.toString(16).length}}}),l=o,h=i("2877"),u=i("6544"),c=i.n(u),d=i("8336"),f=i("b0af"),p=i("99d9"),g=i("12b2"),m=i("a523"),y=i("8fea"),v=i("ce7e"),b=i("0789"),V=i("0e8f"),x=i("132d"),L=i("a722"),_=i("8860"),S=i("ba95"),w=i("5d23"),C=i("67b6"),T=i("43a6"),k=i("ba0d"),D=i("9910"),I=i("b64a"),B=i("58df");function H(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function A(t,e,i){var a=e.minX,n=e.minY,s=e.maxX,r=e.maxY,o=t.map(function(t){return"number"===typeof t?t:t.value}),l=o.length,h=Math.max.apply(Math,H(o))+1,u=Math.min.apply(Math,H(o));u&&(u-=1);var c=(s-a)/(l-1);"bar"===i&&(c=s/l);var d=(r-n)/(h-u);return o.map(function(t,e){return{x:a+e*c,y:r-(t-u)*d+1e-5*+(e===l-1)-1e-5*+(0===e),value:t}})}function $(t){return parseInt(t,10)}function P(t,e,i){return $(t.x+i.x)===$(2*e.x)&&$(t.y+i.y)===$(2*e.y)}function F(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function N(t,e,i){var a={x:t.x-e.x,y:t.y-e.y},n=Math.sqrt(a.x*a.x+a.y*a.y),s={x:a.x/n,y:a.y/n};return{x:e.x+s.x*i,y:e.y+s.y*i}}function E(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,n=t.shift(),s=t[t.length-1];return(i?"M"+n.x+" "+a+" L"+n.x+" "+n.y:"M"+n.x+" "+n.y)+t.map(function(i,a){var s=t[a+1],r=t[a-1]||n,o=s&&P(s,i,r);if(!s||o)return"L"+i.x+" "+i.y;var l=Math.min(F(r,i),F(s,i)),h=l/2<e,u=h?l/2:e,c=N(r,i,u),d=N(s,i,u);return"L"+c.x+" "+c.y+"S"+i.x+" "+i.y+" "+d.x+" "+d.y}).join("")+(i?"L"+s.x+" "+a+" Z":"")}var W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},q=Object(B["a"])(I["a"]).extend({name:"VSparkline",props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},smooth:{type:[Boolean,Number,String],default:!1},showLabels:Boolean,type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300},labelSize:{type:[Number,String],default:7}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},totalBars:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalBars+1);return(this.parsedWidth-t)/this.totalBars}return Number(this.lineWidth)||4},boundary:function(){var t=Number(this.height);return{minX:this.parsedPadding,minY:this.parsedPadding,maxX:this.parsedWidth-this.parsedPadding,maxY:t-this.parsedPadding}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this.points,i=e.length,a=0;t.length<i;a++){var n=e[a],s=this.labels[a];s||(s=n===Object(n)?n.value:n),t.push(W({},n,{value:String(s)}))}return t},points:function(){return A(this.value.slice(),this.boundary,this.type)},textY:function(){return this.boundary.maxY+6}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick(function(){if(t.autoDraw&&"bar"!==t.type){var e=t.$refs.path,i=e.getTotalLength();t.fill?(e.style.transformOrigin="bottom center",e.style.transition="none",e.style.transform="scaleY(0)",e.getBoundingClientRect(),e.style.transition="transform "+t.autoDrawDuration+"ms "+t.autoDrawEasing,e.style.transform="scaleY(1)"):(e.style.transition="none",e.style.strokeDasharray=i+" "+i,e.style.strokeDashoffset=Math.abs(i-(t.lastLength||0)).toString(),e.getBoundingClientRect(),e.style.transition="stroke-dashoffset "+t.autoDrawDuration+"ms "+t.autoDrawEasing,e.style.strokeDashoffset="0"),t.lastLength=i}})}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,i=this.gradient.slice();i.length||i.push("");var a=Math.max(i.length-1,1),n=i.reverse().map(function(e,i){return t.$createElement("stop",{attrs:{offset:i/a,"stop-color":e||t.color||"currentColor"}})});return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,x1:+("left"===e),y1:+("top"===e),x2:+("right"===e),y2:+("bottom"===e)}},n)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:this.color||"currentColor"}},t)},genLabels:function(){if(this.hasLabels)return this.genG(this.parsedLabels.map(this.genText))},genPath:function(){var t=!0===this.smooth?8:Number(this.smooth);return this.$createElement("path",{attrs:{id:this._uid,d:E(this.points.slice(),t,this.fill,Number(this.height)),fill:this.fill?"url(#"+this._uid+")":"none",stroke:this.fill?"none":"url(#"+this._uid+")"},ref:"path"})},genText:function(t,e){var i=this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value;return this.$createElement("text",{attrs:{x:t.x,y:this.textY}},[i])},genBar:function(){if(this.value&&!(this.totalBars<2)){var t=this.width,e=this.height,i=this.parsedPadding,a=this._lineWidth,n=t||this.totalBars*i*2,s=e||75,r={minX:i,minY:i,maxX:Number(n)-i,maxY:Number(s)-i},o=W({},this.$props);o.points=A(this.value,r,this.type);var l=r.maxX/(o.points.length-1);return o.boundary=r,o.lineWidth=a||l-Number(i||5),o.offsetX=0,this.autoLineWidth||(o.offsetX=r.maxX/this.totalBars/2-r.minX),this.$createElement("svg",{attrs:{width:"100%",height:"25%",viewBox:"0 0 "+n+" "+s}},[this.genGradient(),this.genClipPath(o.offsetX,o.lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genBarLabels(o):void 0,this.$createElement("g",{attrs:{transform:"scale(1,-1) translate(0,-"+r.maxY+")","clip-path":"url(#sparkline-bar-"+this._uid+"-clip)",fill:"url(#"+this._uid+")"}},[this.$createElement("rect",{attrs:{x:0,y:0,width:n,height:s}})])])}},genClipPath:function(t,e,i){var a=this,n=this.boundary.maxY,s="number"===typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:i+"-clip"}},this.points.map(function(i){return a.$createElement("rect",{attrs:{x:i.x+t,y:0,width:e,height:Math.max(n-i.y,0),rx:s,ry:s}},[a.autoDraw?a.$createElement("animate",{attrs:{attributeName:"height",from:0,to:n-i.y,dur:a.autoDrawDuration+"ms",fill:"freeze"}}):void 0])}))},genBarLabels:function(t){var e=this,i=t.offsetX||0,a=t.points.map(function(a){return e.$createElement("text",{attrs:{x:a.x+i+e._lineWidth/2,y:t.boundary.maxY+(Number(e.labelSize)||7),"font-size":Number(e.labelSize)||7}},a.value.toString())});return this.genG(a)},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:{"stroke-width":this._lineWidth||1,width:"100%",height:"25%",viewBox:"0 0 "+this.width+" "+this.height}}),[this.genGradient(),this.genLabels(),this.genPath()])}},render:function(t){if(!(this.totalBars<2))return"trend"===this.type?this.genTrend():this.genBar()}}),O=i("b73d"),R=Object(h["a"])(l,s,r,!1,null,null,null),M=R.exports;c()(R,{VBtn:d["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:g["a"],VContainer:m["a"],VDataTable:y["a"],VDivider:v["a"],VExpandXTransition:b["b"],VFadeTransition:b["d"],VFlex:V["a"],VIcon:x["a"],VLayout:L["a"],VList:_["a"],VListTile:S["a"],VListTileContent:w["a"],VRadio:C["a"],VRadioGroup:T["a"],VSlideYTransition:b["g"],VSlider:k["a"],VSpacer:D["a"],VSparkline:q,VSwitch:O["a"]});var Y={name:"Monitor",components:{SignalCard:M},data:function(){return{snackbarDisplayed:!1,chipValue:[],subscribed:!1,request:"",search:null,caseSensitive:!1,stream:null,charts:!1,dataHistory:0,snackbarMessage:"Not connected",snackbarIcon:"warning",snackbarColor:"error",NetworkService:null,subsConfig:null,responseArray:[],rowsPerPageItems:[6,12,24,-1],pagination:{rowsPerPage:-1,descending:!1,sortBy:"id"},signalDataList:[],firstRun:!0,firstRunSubscribed:!0,chipOnline:[],selected:!1,filterStrength:0}},computed:{connectionStatus:{get:function(){return this.$store.state.connectionStatus},set:function(t){this.$store.commit("updateConnectionStatus",t)}},brokerServerIp:{get:function(){return this.$store.state.brokerServerIp},set:function(t){this.$store.commit("updateBrokerServerIp",t)}},selectedSignals:{get:function(){return this.$store.state.selectedSignals},set:function(t){this.$store.commit("updateSelectedSignals",t)}},requestHistory:{get:function(){return this.$store.state.requestHistory},set:function(t){this.$store.commit("updateRequestHistory",t)}}},watch:{subscribed:function(){var t=this;!0===this.firstRunSubscribed&&(this.firstRunSubscribed=!1,setTimeout(function(){t.dataHistory=36},2e3),setTimeout(function(){t.charts=!0},4e3))},dataHistory:function(){var t=5*this.filterStrength+12;this.dataHistory<5?this.filterStrength=0:this.dataHistory<t&&(this.filterStrength=(this.dataHistory-12)/5)},filterStrength:function(){var t=5*this.filterStrength+12;t>this.dataHistory&&(this.dataHistory=t)}},created:function(){},mounted:function(){this.streamSetup()},beforeDestroy:function(){var t=this.connectionStatus;this.stopStream(),this.connectionStatus=t},methods:{highlight:function(t,e){var i=this,a=this.signalDataList.findIndex(function(e){return e.name===t});-1!==a&&(this.signalDataList[a].highlight=!0,setTimeout(function(){i.signalDataList[a].highlight=!1},6e3)),e&&(this.selectedSignals[e].highlight=!0,setTimeout(function(){i.selectedSignals[e].highlight=!1},6e3))},snackbar:function(t,e,i){this.snackbarColor=t,this.snackbarMessage=e,this.snackbarIcon=i||"warning",this.snackbarDisplayed=!0},responseIncludes:function(t,e){var i=this.responseArray.findIndex(function(i){return i.name===t&&i.namespace===e});return-1!==i},remove:function(t){this.stopStream(),this.selectedSignals.splice(t,1),this.streamSetup(),this.firstRun=!0},onlineChip:function(){return this.signalDataList.map(function(t){return t.name})},streamSetup:function(){this.NetworkService=new api.default.NetworkServiceClient(this.brokerServerIp),this.subsConfig=new api.default.SubscriberConfig,this.request="Subscribe";var t=[];this.selectedSignals.forEach(function(e){e.signalId&&t.push(e.signalId)});var e=new api.default.SignalIds;e.setSignalidList(t);var i=new api.default.ClientId;i.setId("SBWebClient"+Date.now()),this.subsConfig.setSignals(e),this.subsConfig.setClientid(i),this.startStream()},startStream:function(){var t=this;this.stream=this.NetworkService.subscribeToSignals(this.subsConfig),this.stream.on("data",function(e){t.streamResponse(e),"success--text"!==t.connectionStatus&&(t.connectionStatus="success--text")}),this.stream.on("end",function(){t.stopStream(),t.snackbarDisplayed=!1}),this.stream.on("status",function(e){t.snackbar("info",e.details,"info")}),this.stream.on("error",function(e){t.stopStream(),t.connectionStatus="error--text"}),this.$store.commit("updateRequestHistory",this.requestHistory)},stopStream:function(){this.request="Cancel Subscription",this.stream&&this.stream.cancel(),this.subscribed=!1,this.$store.commit("updateRequestHistory",this.requestHistory)},streamResponse:function(t){var e=this;this.subscribed=!0;var i=t.getSignalList(),a=[];this.responseArray=[],i.forEach(function(t){var i="",n="",s=t.getId().getNamespace().getName();t.hasDouble()?(i=t.getDouble(),n="Double"):t.hasInteger()?(i=t.getInteger(),n="Integer"):t.hasArbitration()?(i=t.getArbitration(),n="Arbitration"):t.hasEmpty()&&(i=t.getEmpty(),n="Empty");var r=t.getId().getName();e.responseArray.push({name:r,namespace:s});var o=t.getTimestamp();a.push({name:r,data:{timestamp:o,data:i},dataType:n,nameSpace:s,unit:t.unit,max:t.max,min:t.min,size:t.size,raw:t.getRaw(),highlight:!1})}),this.firstRun?(this.signalDataList=a,this.firstRun=!1):a.forEach(function(t){var i=e.signalDataList.findIndex(function(e){return e.name===t.name});-1!==i?void 0!==e.signalDataList[i].nameSpace?(e.signalDataList[i].data=t.data,e.signalDataList[i].raw=t.raw):e.signalDataList[i]=t:e.signalDataList.push(t)})}}},z=Y,X=(i("25ca"),i("cc20")),G=(i("c0c2"),i("32f1")),j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},U={name:"v-data-iterator",mixins:[G["a"]],inheritAttrs:!1,props:{contentTag:{type:String,default:"div"},contentProps:{type:Object,required:!1},contentClass:{type:String,required:!1}},computed:{classes:function(){return j({"v-data-iterator":!0,"v-data-iterator--select-all":!1!==this.selectAll},this.themeClasses)}},created:function(){this.initPagination()},methods:{genContent:function(){var t=this.genItems(),e={class:this.contentClass,attrs:this.$attrs,on:this.$listeners,props:this.contentProps};return this.$createElement(this.contentTag,e,t)},genEmptyItems:function(t){return[this.$createElement("div",{class:"text-xs-center",style:"width: 100%"},t)]},genFilteredItems:function(){if(!this.$scopedSlots.item)return null;for(var t=[],e=0,i=this.filteredItems.length;e<i;++e){var a=this.filteredItems[e],n=this.createProps(a,e);t.push(this.$scopedSlots.item(n))}return t},genFooter:function(){var t=[];return this.$slots.footer&&t.push(this.$slots.footer),this.hideActions||t.push(this.genActions()),t.length?this.$createElement("div",t):null},genHeader:function(){var t=[];return this.$slots.header&&t.push(this.$slots.header),t.length?this.$createElement("div",t):null}},render:function(t){return t("div",{class:this.classes},[this.genHeader(),this.genContent(),this.genFooter()])}},J=i("2db4"),K=i("71d9"),Z=i("2a7f"),Q=i("3a2f"),tt=Object(h["a"])(z,a,n,!1,null,null,null);e["default"]=tt.exports;c()(tt,{VBtn:d["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VChip:X["a"],VContainer:m["a"],VDataIterator:U,VDivider:v["a"],VIcon:x["a"],VLayout:L["a"],VSlider:k["a"],VSnackbar:J["a"],VSpacer:D["a"],VSwitch:O["a"],VToolbar:K["a"],VToolbarTitle:Z["a"],VTooltip:Q["a"]})},b39a:function(t,e,i){var a=i("d3f4");t.exports=function(t,e){if(!a(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},c0c2:function(t,e,i){},c26b:function(t,e,i){"use strict";var a=i("86cc").f,n=i("2aeb"),s=i("dcbc"),r=i("9b43"),o=i("f605"),l=i("4a59"),h=i("01f9"),u=i("d53b"),c=i("7a56"),d=i("9e1e"),f=i("67ab").fastKey,p=i("b39a"),g=d?"_s":"size",m=function(t,e){var i,a=f(e);if("F"!==a)return t._i[a];for(i=t._f;i;i=i.n)if(i.k==e)return i};t.exports={getConstructor:function(t,e,i,h){var u=t(function(t,a){o(t,u,e,"_i"),t._t=e,t._i=n(null),t._f=void 0,t._l=void 0,t[g]=0,void 0!=a&&l(a,i,t[h],t)});return s(u.prototype,{clear:function(){for(var t=p(this,e),i=t._i,a=t._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete i[a.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var i=p(this,e),a=m(i,t);if(a){var n=a.n,s=a.p;delete i._i[a.i],a.r=!0,s&&(s.n=n),n&&(n.p=s),i._f==a&&(i._f=n),i._l==a&&(i._l=s),i[g]--}return!!a},forEach:function(t){p(this,e);var i,a=r(t,arguments.length>1?arguments[1]:void 0,3);while(i=i?i.n:this._f){a(i.v,i.k,this);while(i&&i.r)i=i.p}},has:function(t){return!!m(p(this,e),t)}}),d&&a(u.prototype,"size",{get:function(){return p(this,e)[g]}}),u},def:function(t,e,i){var a,n,s=m(t,e);return s?s.v=i:(t._l=s={i:n=f(e,!0),k:e,v:i,p:a=t._l,n:void 0,r:!1},t._f||(t._f=s),a&&(a.n=s),t[g]++,"F"!==n&&(t._i[n]=s)),t},getEntry:m,setStrong:function(t,e,i){h(t,e,function(t,i){this._t=p(t,e),this._k=i,this._l=void 0},function(){var t=this,e=t._k,i=t._l;while(i&&i.r)i=i.p;return t._t&&(t._l=i=i?i.n:t._t._f)?u(0,"keys"==e?i.k:"values"==e?i.v:[i.k,i.v]):(t._t=void 0,u(1))},i?"entries":"values",!i,!0),c(e)}}},e0b8:function(t,e,i){"use strict";var a=i("7726"),n=i("5ca1"),s=i("2aba"),r=i("dcbc"),o=i("67ab"),l=i("4a59"),h=i("f605"),u=i("d3f4"),c=i("79e5"),d=i("5cc5"),f=i("7f20"),p=i("5dbc");t.exports=function(t,e,i,g,m,y){var v=a[t],b=v,V=m?"set":"add",x=b&&b.prototype,L={},_=function(t){var e=x[t];s(x,t,"delete"==t?function(t){return!(y&&!u(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,i){return e.call(this,0===t?0:t,i),this})};if("function"==typeof b&&(y||x.forEach&&!c(function(){(new b).entries().next()}))){var S=new b,w=S[V](y?{}:-0,1)!=S,C=c(function(){S.has(1)}),T=d(function(t){new b(t)}),k=!y&&c(function(){var t=new b,e=5;while(e--)t[V](e,e);return!t.has(-0)});T||(b=e(function(e,i){h(e,b,t);var a=p(new v,e,b);return void 0!=i&&l(i,m,a[V],a),a}),b.prototype=x,x.constructor=b),(C||k)&&(_("delete"),_("has"),m&&_("get")),(k||w)&&_(V),y&&x.clear&&delete x.clear}else b=g.getConstructor(e,t,m,V),r(b.prototype,i),o.NEED=!0;return f(b,t),L[t]=b,n(n.G+n.W+n.F*(b!=v),L),y||g.setStrong(b,t,m),b}}}]);
//# sourceMappingURL=monitor.8badf3ad.js.map