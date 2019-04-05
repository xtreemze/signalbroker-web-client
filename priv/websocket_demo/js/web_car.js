let websocket = null
let vue_app;

function main() {

	const value = 0;

	Vue.component("panel-progress", {
		template: "#panel-progress",
		props: ["name", "info"],
		methods: {
			calcProgress: function (channel) {
				return Math.round(100 * (channel.value / channel.arg[0]))
			},
		}
	})
	Vue.component("panel-bitmask", {
		template: "#panel-bitmask",
		props: ["name", "info"],
		methods: {
			maskColor: function (value, bit) {
				return ((value >> bit) & 1) > 0 ? "#3d3" : "#d33"
			},
		}
	})

// "BenchC_d_8","BenchC_d_2","BenchC_c_5","BenchC_c_1","BenchC_c_6","BenchC_d_7","BenchC_d_1","BenchC_c_7","BenchC_a","BenchC_d_4",
// "BenchC_c_2","BenchC_d_6","BenchC_d_5","BenchC_c_8","BenchC_d_3","BenchC_c_4","BenchC_b","BenchC_c_3

	vue_app = new Vue({
		el: "#app",
		data: {
			ws: {
				alive: false,
				uri: "ws://127.0.0.1:8080/websocket",
				// sendRaw: "{\"command\" : \"list\"}",
				sendRaw: "{\"command\":\"write\",\"signals\":{\"BenchC_d_8\":1,\"BenchC_c_1\":1}}",
				// sendRaw: "{\"command\" : \"write\", \"signals\" : {\"HelloBody\": 300}, \"namespace\" : \"vcan1\"}",
				autoSub: true,

				condition_on: false,
				signal: "BenchC_d_8",
				condition: "value > 1",
				command: "{\"command\":\"write\",\"signals\":{\"BenchC_d_4\":1,\"BenchC_c_2\":1}}"
			},
			channels: {
				BenchC_d_8: { panel: "progress", arg: [7], value },
				BenchC_d_2: { panel: "progress", arg: [7], value },
				BenchC_c_5: { panel: "progress", arg: [1024], value },
				BenchC_c_1: { panel: "progress", arg: [1], value },
				BenchC_c_6: { panel: "bitmask", arg: [2], value },
				BenchC_d_7: { panel: "bitmask", arg: [3], value },
				BenchC_d_1: { panel: "bitmask", arg: [3], value },
				BenchC_c_7: { panel: "bitmask", arg: [2], value },
				BenchC_a: { panel: "bitmask", arg: [3], value },
				BenchC_d_4: { panel: "bitmask", arg: [3], value },
				BenchC_c_2: { panel: "bitmask", arg: [1], value },
				BenchC_d_6: { panel: "bitmask", arg: [2], value },
				BenchC_d_5: { panel: "bitmask", arg: [3], value },
				BenchC_c_8: { panel: "bitmask", arg: [2], value },
				BenchC_d_3: { panel: "bitmask", arg: [1], value },
				BenchC_c_4: { panel: "bitmask", arg: [5], value },
				BenchC_c_3: { panel: "bitmask", arg: [5], value },
			},
		},
		methods: {
			btn_connect,
			btn_disconnect,
			btn_sendRaw,
			btn_default_subscriptions,
			btn_activate,
			btn_deactivate
		}
	})
}

//==============================================================================
// Button events
//==============================================================================

function btn_connect(event) {
	websocket = new WebSocket(vue_app.ws.uri)

	websocket.onopen = ws_open
	websocket.onclose = ws_close
	websocket.onmessage = ws_message

}

function btn_activate(event) {
	vue_app.ws.condition_on = true
	console.log(vue_app.ws.signal)
	console.log(vue_app.ws.condition)
	console.log(vue_app.ws.command)
	// websocket = new WebSocket(vue_app.ws.uri)
	//
	// websocket.onopen = ws_open
	// websocket.onclose = ws_close
	// websocket.onmessage = ws_message
}

function btn_deactivate(event) {
	vue_app.ws.condition_on = false
}



function btn_disconnect(event) {
	websocket.close()
}

function btn_sendRaw(event) {
	ws_send(vue_app.ws.sendRaw);
}

// for stressing the system during test
// function btn_sendRaw(event) {
// 	for (var i = 0; i < 1000; i++) {
// 		// Usage!
// 		sleep(i*2).then(() => {
// 		    // Do something after the sleep!
// 				console.log("blip" + i);
// 				ws_send(vue_app.ws.sendRaw);
//
// 		});
//
// 		// await sleep(10);
// 	}
// }

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Usage!
// sleep(500).then(() => {
//     // Do something after the sleep!
// });

function btn_default_subscriptions(event) {
	default_subscriptions()
}

//==============================================================================
// Websocket
//==============================================================================

function ws_open(event) {
	console.log("WS open!")
	vue_app.ws.alive = true

	if (vue_app.ws.autoSub) {
		default_subscriptions()
	}
}

function ws_close(event) {
	console.log("WS close!")
	vue_app.ws.alive = false
}

function ws_send_json(json) {
	ws_send(JSON.stringify(json))
}

function ws_send(data) {
	console.log("Websocket sending", data)
	websocket.send(data)
}

function ws_message(event) {
	let json;
	try {
		json = JSON.parse(event.data)
	} catch (e) {
		console.error("Can't parse json:", event.data)
		return;
	}

	handle_json(json)
}

//==============================================================================
// Helpers
//==============================================================================


//==============================================================================
// Model
//==============================================================================

function handle_json(json) {
	Object.keys(json.signals).map(channel_name => {
		if (vue_app.channels[channel_name]) {
			//console.info("Match", channel_name, "value", json[channel_name])

			vue_app.channels[channel_name].value = json.signals[channel_name]

			if (vue_app.ws.condition_on) {
				if (vue_app.ws.signal == channel_name) {
						console.log(json.signals[channel_name])
						// check if json is valid
						if (isJsonString(vue_app.ws.command)) {
							value = json.signals[channel_name]
							if (eval(vue_app.ws.condition)) {
								console.log("submitting: "+ vue_app.ws.command)
								ws_send(vue_app.ws.command)
							} else {
								console.log("condition not meet")
							}

							// console.log("submitting: "+ vue_app.ws.command)
							//
							// value = json.signals[channel_name]
							// console.log(eval(vue_app.ws.condition))
						} else {
							console.error("bad json" + vue_app.ws.command)
						}
				}
			}

		} else {
			console.warn("No match", channel_name)
		}
	})
}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function request_subscriptions(channel_names) {
	console.log("Subscribing to", channel_names)
	ws_send_json({
		command: "subscribe",
		signals: channel_names,
		namespace: "VirtualCanInterface"
	})
}

function default_subscriptions() {
	//let names = vue_app.channels.map(chan => chan.name)
	let names = Object.keys(vue_app.channels)
	request_subscriptions(names)
}
