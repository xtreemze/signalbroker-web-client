# signal-broker web client

You should be familiar with HTML, Javascript and VueJS to configure the web client. This client is in active development and any constructive ideas are welcome!

For the moment, this serves best as a CAN Monitor but further work is being done to read diagnostics and publish signals.

This is designed to be simple and easy. Once you connect to the signal broker envoy, you just select your signals, save the list you want to subscribe to, and click the traffic signal to automatically view realtime adaptive visualization of data.

## Available features
* Adaptive charting based on activity over time
* Customizable line or bar chart visualizations per Signal
* Tree hierarchy for clear display of CAN Buses, Frames and Signals
* Automatic Frame and Signal recording
* Live hiearchical CAN activity display
* Realtime text search of CAN Buses, Frames and Signals
* Responsive design for all screen sizes
* Cross-platform compatible with modern browsers
* Adjustable filter for unchanged data
* Adjustable data history length
* Historical data table display per Signal and Frame
* Dark theme (customizable interface)

## Future development
* State persistence using browser storage
* Import/Export functionality
* Configurable presets
* Realtime lag/delay calculation and display
* Charts with multiple data sources
* Chart editor for multi-data charts
* External peripheral support
* Control via smartphone sensors such as accelerometers
* Signal chain creation, graphical programming support
* Progressive Webapp support
* Internationalization (translation via i18)

## Known issues
* Timestamp is incorrectly parsed


# Development

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```
If using the "Cowboy" server, you will want to copy the generated `dist` folder to the signalbroker-web-client repo `signalbroker-web-client/priv/` and repace the existing files in that folder.

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
