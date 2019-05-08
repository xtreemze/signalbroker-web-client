(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["diagnostics"],{4656:function(e,t,a){},"7fa1":function(e,t,a){"use strict";var n=a("4656"),r=a.n(n);r.a},"94b6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("VCard",{staticClass:"marginToolbar"},[a("VToolbar",{attrs:{card:"",color:"transparent"}},[a("VIcon",[e._v("\n        bug_report\n      ")]),a("VToolbarTitle",[e._v("\n        Diagnostics\n      ")])],1),a("VCardText",{staticClass:"overflowY py-3"},[a("VLayout",[a("VSlider",{attrs:{max:255,min:0,step:1,label:"Service"},model:{value:e.service,callback:function(t){e.service=e._n(t)},expression:"service"}}),a("VTextField",{staticClass:"mt-0 ml-3 shrink",attrs:{type:"number"},model:{value:e.service,callback:function(t){e.service=e._n(t)},expression:"service"}})],1),a("VLayout",[a("VRangeSlider",{attrs:{max:255,min:0,step:1,label:"PID 1"},model:{value:e.pid,callback:function(t){e.pid=t},expression:"pid"}}),a("VTextField",{staticClass:"mt-0 ml-3 shrink",attrs:{type:"number",label:"Min"},model:{value:e.pid[0],callback:function(t){e.$set(e.pid,0,e._n(t))},expression:"pid[0]"}}),a("VTextField",{staticClass:"mt-0 ml-3 shrink",attrs:{shrink:"",type:"number",label:"Max"},model:{value:e.pid[1],callback:function(t){e.$set(e.pid,1,e._n(t))},expression:"pid[1]"}})],1),a("VLayout",[a("VSlider",{attrs:{max:255,min:0,step:1,label:"PID 2"},model:{value:e.pid2,callback:function(t){e.pid2=e._n(t)},expression:"pid2"}}),a("VTextField",{staticClass:"mt-0 ml-3 shrink",attrs:{type:"number"},model:{value:e.pid2,callback:function(t){e.pid2=e._n(t)},expression:"pid2"}})],1)],1),a("VDivider"),a("VCardActions",[a("VLayout",{attrs:{row:"",wrap:""}},[a("VBtn",{attrs:{depressed:"",color:"grey",flat:""},on:{click:function(t){e.scanResults=[]}}},[e._v("\n          Clear\n        ")]),a("VSpacer"),a("VBtn",{attrs:{depressed:"",color:"success"},on:{click:e.scanObd}},[e._v("\n          OBD Scan\n        ")]),e.subscribed?e._e():a("VBtn",{attrs:{color:"green",depressed:""},on:{click:e.queryVin}},[e._v("\n          Query VIN\n        ")]),e.subscribed?a("VBtn",{attrs:{color:"error",depressed:""},on:{click:e.stopdiagnosticsQuery}},[e._v("\n          Cancel\n        ")]):a("VBtn",{attrs:{color:"green",depressed:""},on:{click:e.queryObd}},[e._v("\n          Query OBD\n        ")])],1)],1)],1),a("VSnackbar",{attrs:{bottom:"",right:"",color:e.snackbarColor,timeout:8e3},model:{value:e.snackbarDisplayed,callback:function(t){e.snackbarDisplayed=t},expression:"snackbarDisplayed"}},[a("VLayout",[a("VIcon",{attrs:{left:""}},[e._v("\n        "+e._s(e.snackbarIcon)+"\n      ")]),e._v("\n      "+e._s(e.snackbarMessage)+"\n    ")],1),a("VBtn",{attrs:{flat:""},nativeOn:{click:function(t){e.value=!1}}},[a("VIcon",[e._v("\n        close\n      ")])],1)],1),a("VDataTable",{staticClass:"mt-4 elevation-2",attrs:{headers:e.headers,items:e.scanResults,"hide-actions":"","item-key":"id"},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v("\n        "+e._s(e._f("toDate")(t.item.date))+"\n      ")]),a("td",[e._v("\n        "+e._s(t.item.name)+"\n      ")]),a("td",{staticClass:"text-xs-left monoSpace"},[a("span",{staticClass:"monoSpace text-truncate text-uppercase"},e._l(t.item.serviceId,function(t,n){return a("span",{key:n},[e.rawStringLength(t)<2?a("span",[e._v("0")]):e._e(),e._v(e._s(e._f("rawStringFilter")(t))+"("),t<10?a("span",[e._v("00")]):t<100?a("span",[e._v("0")]):e._e(),e._v(e._s(t)+")\n          ")])}),0)]),a("td",{staticClass:"text-xs-left monoSpace"},[a("span",{staticClass:"monoSpace text-truncate text-uppercase"},e._l(t.item.pIdHex,function(t,n){return a("span",{key:n},[e.rawStringLength(t)<2?a("span",[e._v("0")]):e._e(),e._v(e._s(e._f("rawStringFilter")(t))+"("),t<10?a("span",[e._v("00")]):t<100?a("span",[e._v("0")]):e._e(),e._v(e._s(t)+")\n          ")])}),0)]),a("td",{staticClass:"text-xs-left monoSpace"},[a("span",{staticClass:"monoSpace text-truncate text-uppercase"},e._l(t.item.data,function(t,n){return a("span",{key:n},[e.rawStringLength(t)<2?a("span",[e._v("0")]):e._e(),e._v(e._s(e._f("rawStringFilter")(t))+"\n          ")])}),0)]),a("td",{staticClass:"text-xs-left text-truncate"},[e._v("\n        "+e._s(t.item.description)+"\n      ")])]}}])})],1)},r=[],s=(a("34ef"),a("ac6a"),a("6b54"),a("9508"),function(){return[[],["PIDs supported [01-20]","Monitor status since DTCs cleared. (Includes malfunction indicator lamp (MIL) status and number of DTCs.)","Freeze DTC","Fuel system status","Calculated engine load","Engine coolant temperature","Short term fuel trim-- Bank 1","Long term fuel trim-- Bank 1","Short term fuel trim-- Bank 2","Long term fuel trim-- Bank 2","Fuel pressure","Intake manifold absolute pressure","Engine RPM","Vehicle speed","Timing advance","Intake air temperature","MAF air flow rate","Throttle position","Commanded secondary air status","Oxygen sensors present (in 2 banks)","Oxygen Sensor 1 A: Voltage B: Short term fuel trim","Oxygen Sensor 2 A: Voltage B: Short term fuel trim","Oxygen Sensor 3 A: Voltage B: Short term fuel trim","Oxygen Sensor 4 A: Voltage B: Short term fuel trim","Oxygen Sensor 5 A: Voltage B: Short term fuel trim","Oxygen Sensor 6 A: Voltage B: Short term fuel trim","Oxygen Sensor 7 A: Voltage B: Short term fuel trim","Oxygen Sensor 8 A: Voltage B: Short term fuel trim","ODB Standards this vehicle conforms to","Oxygen sensors present (in 4 banks)","Auxiliary input status","Run time since engine start","PIDs supported [21 - 40]","Distance traveled with malfunction indicator lamp (MIL) on","Fuel Rail Guage Pressure (diesel, or gasoline direct injection)","Oxygen Sensor 1 AB: Fuel--Air Equivalence Ratio CD: Voltage","Oxygen Sensor 2 AB: Fuel--Air Equivalence Ratio CD: Voltage","Oxygen Sensor 3 AB: Fuel--Air Equivalence Ratio CD: Voltage","Oxygen Sensor 4 AB: Fuel--Air Equivalence Ratio CD: Voltage","Oxygen Sensor 5 AB: Fuel--Air Equivalence Ratio CD: Voltage","Oxygen Sensor 6 AB: Fuel--Air Equivalence Ratio CD: Voltage","Oxygen Sensor 7 AB: Fuel--Air Equivalence Ratio CD: Voltage","Oxygen Sensor 8 AB: Fuel--Air Equivalence Ratio CD: Voltage","Commanded EGR","EGR Error","Commanded evaporative purge","Fuel Tank Level Input","Warm-ups since codes cleared","Distance traveled since codes cleared","Evap. System Vapor Pressure","Absolute Barometric Pressure","Oxygen Sensor 1 AB: Fuell--Air Equivalence Ratio CD: Current","Oxygen Sensor 2 AB: Fuell--Air Equivalence Ratio CD: Current","Oxygen Sensor 3 AB: Fuell--Air Equivalence Ratio CD: Current","Oxygen Sensor 4 AB: Fuell--Air Equivalence Ratio CD: Current","Oxygen Sensor 5 AB: Fuell--Air Equivalence Ratio CD: Current","Oxygen Sensor 6 AB: Fuell--Air Equivalence Ratio CD: Current","Oxygen Sensor 7 AB: Fuell--Air Equivalence Ratio CD: Current","Oxygen Sensor 8 AB: Fuell--Air Equivalence Ratio CD: Current","Catalyst Temperature Bank 1, Sensor 1","Catalyst Temperature Bank 2, Sensor 1","Catalyst Temperature Bank 1, Sensor 2","Catalyst Temperature Bank 2, Sensor 2","PIDs supported [41 - 60]","Monitor status this drive cycle","Control module voltage","Absolute load value","Fuel--Air commanded Equivalence ratio","Relative throttle position","Ambient air temperature","Absolute throttle position B","Absolute throttle position C","Absolute throttle position D","Absolute throttle position E","Absolute throttle position F","Commanded throttle actuator","Time run with MIL on","Time since trouble codes cleared","Maximum value for Fuel--Air equivalence ratio, oxygen sensor voltage, oxygen sensor current, and intake manifold absolute pressure","Maximum value for air flow rate from mass air flow sensor","Fuel Type","Ethanol fuel %","Absolute Evap system Vapor Pressure","Evap syustem vapor pressure","Short term secondary oxygen sensor trim, A: bank 1, B: bank 3","Long term secondary oxygen sensor trim, A: bank 1, B: bank 3","Short term secondary oxygen sensor trim, A: bank 2, B: bank 4","Long term secondary oxygen sensor trim, A: bank 2, B: bank 4","Fuel rail absolute pressure","Relative accelerator pedal position","Hybrid battery pack remaining life","Engine oil temperature","Fuel injection timing","Engine fuel rate","Emission requirements to which vehicle is designed","PIDs supported [61 - 80]","Driver's demand engine - percent torque","Actual engine - percent torque","Engine reference torque","Engine percent torque data","Auxiliary input / output supported","Mass air flow sensor","Engine coolant temperature","Intake air temperature sensor","Commanded EGR and EGR Error","Commanded Diesel intake air flow control and relative intake air flow position","Exhaust gas recirculation temperature","Commanded throttle actuator control and relative throttle position","Fuel pressure control system","Injection pressure control system","Turbocharger compressor inlet pressure","Boost pressure control","Variable Geometry turobo (VGT) control","Wastegate control","Exhaust pressure","Turbocharger RPM","Turbocharger temperature","Turbocharger temperature","Charge air cooler temperature (CACT)","Exhaust Gas temperature (EGT) Bank 1","Exhaust Gas temperature (EGT) Bank 2","Diesel particulate filter (DPF)","Diesel particulate filter (DPF)","Diesel particulate filter (DPF) temperature","NOx NTE (Not-To-Exceed) control area status","PM NTE (Not-To-Exceed) control area status","Engine run time","PIDs supported [81 - A0]","Engine run time for Auxiliary Emissions Control Device(AECD)","Engine run time for Auxiliary Emissions Control Device(AECD)","NOx sensor","Manifold surface temperature","NOx reagent system","Particulate matter (PM) sensor","Intake manifold absolute pressure","SCR Induce System","Run Time for AECD #11-#15","Run Time for AECD #16-#20","Diesel Aftertreatment","O2 Sensor (Wide Range)","Throttle Position G","Engine Friction - Percent Torque","PM Sensor Bank 1 & 2","WWH-OBD Vehicle OBD System Information","WWH-OBD Vehicle OBD System Information","Fuel System Control","WWH-OBD Vehicle OBD Counters support","NOx Warning and Inducement System","Exhaust Gas Temperature Sensor","Exhaust Gas Temperature Sensor","Hybrid/EV Vehicle System Data, Battery, Voltage","Diesel Exhaust Fluid Sensor Data","O2 Sensor Data","Engine Fuel Rate","Engine Exhaust Flow Rate","Fuel System Percentage Use","PIDs supported [A1 - C0]","NOx Sensor Corrected Data","Cylinder Fuel Rate","Evap System Vapor Pressure","Transmission Actual Gear","Diesel Exhaust fluid Dosing","Odometer","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","PIDs supported [C1 - E0]","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],[],[],[],[],[],[],[],["Service 9 supported PIDs [01 - 20]","VIN Message Count in PID 02","Vehicle Identification Number (VIN)","Calibration ID message count for PID 04","Calibration ID","Calibration Verification numbers (CVN) message count for PID 06","Calibration Verification numbers (CVN) Several CVN can be outputed","In-use performance tracking message count for PID 08 and 0B","In-use performance tracking for spark ignition vehicles","ECU name message count for PID 0A","ECU name","In-use performance tracking for compression ignition vehicles"],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],["?"]]}),i=s,o={name:"Diagnostic",filters:{rawStringFilter:function(e){return e.toString(16)},toDate:function(e){var t=new Date(e);return t.toLocaleTimeString({},{hour12:!1})}},data:function(){return{snackbarDisplayed:!1,service:1,pid:[0,24],pid2:0,chipValue:[],subscribed:!1,request:"",diagnosticsQuery:null,dataHistory:52,snackbarMessage:"Not connected",snackbarIcon:"warning",snackbarColor:"error",responseArray:[],signalDataList:[],firstRun:!0,chipOnline:[],selected:!1,diagnosticsServiceClient:null,responsePayload:null,scanResults:[],headers:[{text:"Date",value:"date",align:"left",sortable:!0},{text:"Operation",value:"id",align:"left",sortable:!0},{text:"Service Hex(Dec)",value:"serviceId",align:"left",sortable:!0},{text:"PID Hex(Dec)",value:"pIdHex",align:"left",sortable:!0},{text:"Raw Hex Data",value:"data",class:"grow",align:"left",sortable:!0},{text:"Description",value:"description",align:"left"}]}},computed:{hexPidIndex:{get:function(){return"0x"+this.scanPidIndex.toString(16)}},hexServiceIndex:{get:function(){return"0x"+this.scanServiceIndex.toString(16)}},connectionStatus:{get:function(){return this.$store.state.connectionStatus},set:function(e){this.$store.commit("updateConnectionStatus",e)}},brokerServerIp:{get:function(){return this.$store.state.brokerServerIp},set:function(e){this.$store.commit("updateBrokerServerIp",e)}},selectedSignals:{get:function(){return this.$store.state.selectedSignals},set:function(e){this.$store.commit("updateSelectedSignals",e)}},requestHistory:{get:function(){return this.$store.state.requestHistory},set:function(e){this.$store.commit("updateRequestHistory",e)}}},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){var e=this.connectionStatus;this.stopdiagnosticsQuery(),this.connectionStatus=e},methods:{rawStringLength:function(e){return e.toString(16).length},snackbar:function(e,t,a){this.snackbarColor=e,this.snackbarMessage=t,this.snackbarIcon=a||"warning",this.snackbarDisplayed=!0},queryVinInteractive:function(){this.request="Query VIN";var e=[];this.selectedSignals.forEach(function(t){t.signalId&&e.push(t.signalId)});var t=new api.default.DiagnosticsRequest;t.setDownlink(e[0]),t.setUplink(e[1]);var a=new Uint8Array(1);a[0]=34,t.setServiceid(a);var n=new Uint8Array(2);n[0]=241,n[1]=144,t.setDataidentifier(n),this.diagnosticsRequest(t)},queryVin:function(){this.request="Query VIN";var e=new api.default.DiagnosticsRequest,t=new api.default.NameSpace;t.setName("ChassisCANhs");var a=new api.default.SignalId;a.setName("PscmToVddmChasDiagResFrame"),a.setNamespace(t);var n=new api.default.SignalId;n.setName("VddmToAllFuncChasDiagReqFrame"),n.setNamespace(t),e.setDownlink(a),e.setUplink(n);var r=new Uint8Array(1);r[0]=34,e.setServiceid(r);var s=new Uint8Array(2);s[0]=241,s[1]=144,e.setDataidentifier(s),this.diagnosticsRequest(e)},queryObdInteractive:function(){this.request="Query OBD";var e=[];this.selectedSignals.forEach(function(t){t.signalId&&e.push(t.signalId)});var t=new api.default.DiagnosticsRequest;t.setDownlink(e[0]),t.setUplink(e[1]);var a=new Uint8Array(1);a[0]=1,t.setServiceid(a);var n=new Uint8Array(1);n[0]=66,t.setDataidentifier(n),this.diagnosticsRequest(t)},queryObd:function(){this.request="Query OBD";var e=new api.default.DiagnosticsRequest,t=new api.default.NameSpace;t.setName("PropulsionCANhs");var a=new api.default.SignalId;a.setName("EcmToEtcCarbPropDiagResFrame"),a.setNamespace(t),e.setDownlink(a);var n=new api.default.SignalId;n.setName("EtcToAllCarbPropDiagReqFrame"),n.setNamespace(t),e.setUplink(n);var r=new Uint8Array(1);r[0]=1,e.setServiceid(r);var s=new Uint8Array(1);s[0]=66,e.setDataidentifier(s),this.diagnosticsRequest(e)},scanObd:function(){this.pid[0]===this.pid[1]&&(this.pid[1]=this.pid[0]+1);for(var e=this.pid[0];e<this.pid[1];e+=1){this.request="OBD Scan";var t=new api.default.DiagnosticsRequest,a=new api.default.NameSpace;a.setName("PropulsionCANhs");var n=new api.default.SignalId;n.setName("EcmToEtcCarbPropDiagResFrame"),n.setNamespace(a),t.setDownlink(n);var r=new api.default.SignalId;r.setName("EtcToAllCarbPropDiagReqFrame"),r.setNamespace(a),t.setUplink(r);var s=new Uint8Array(1);s[0]="0x"+this.service.toString(16),t.setServiceid(s);var i=1;this.pid2>0&&(i=2);var o=new Uint8Array(i);o[0]="0x"+e.toString(16),this.pid2>0&&(o[1]="0x"+this.pid2.toString(16)),t.setDataidentifier(o),this.diagnosticsRequest(t)}},diagnosticsRequest:function(e){var t=this,a=new api.default.DiagnosticsServiceClient(this.brokerServerIp);this.diagnosticsQuery=a.sendDiagnosticsQuery(e),this.diagnosticsQuery.on("data",function(a){t.responseQuery(a,e),"success--text"!==t.connectionStatus&&(t.connectionStatus="success--text")}),this.diagnosticsQuery.on("end",function(){t.snackbarDisplayed=!1}),this.diagnosticsQuery.on("status",function(e){e.details.length>1&&(t.snackbar("info",e.details,"info"),t.subscribed=!1)}),this.diagnosticsQuery.on("error",function(e){t.snackbar("error",e.message,"warning"),t.connectionStatus="error--text"}),this.$store.commit("updateRequestHistory",this.requestHistory)},stopdiagnosticsQuery:function(){this.request="Cancel Subscription",this.diagnosticsQuery,this.subscribed=!1,this.$store.commit("updateRequestHistory",this.requestHistory)},responseQuery:function(e,t){this.subscribed=!1;var a=parseInt(t.getDataidentifier().toString(16),10),n=parseInt(t.getServiceid_asU8().toString(16),10),r=i()[n],s={name:this.request,data:e.getRaw_asU8(),date:Date.now(),description:r[a]||"",serviceId:t.getServiceid_asU8(),pIdHex:t.getDataidentifier_asU8()};s.data.length>0&&this.scanResults.push(s)}}},l=o,u=(a("7fa1"),a("2877")),c=a("6544"),d=a.n(c),p=a("8336"),m=a("b0af"),g=a("99d9"),f=a("8fea"),v=a("ce7e"),h=a("132d"),y=a("a722"),S=a("5963"),b=a("ba0d"),D=a("2db4"),x=a("9910"),C=a("2677"),k=a("71d9"),A=a("2a7f"),V=Object(u["a"])(l,n,r,!1,null,null,null);t["default"]=V.exports;d()(V,{VBtn:p["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["b"],VDataTable:f["a"],VDivider:v["a"],VIcon:h["a"],VLayout:y["a"],VRangeSlider:S["a"],VSlider:b["a"],VSnackbar:D["a"],VSpacer:x["a"],VTextField:C["a"],VToolbar:k["a"],VToolbarTitle:A["a"]})}}]);
//# sourceMappingURL=diagnostics.e3efd8d1.js.map