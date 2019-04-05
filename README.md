# Signalbroker web client

HTTP server with static file serving and Core system websocket API.

The webserver used in thes project is [Cowboy](https://github.com/ninenines/cowboy).

## Run

Before starting, the [signalbroker](https://github.com/volvo-cars/signalbroker-server) must be running.


```
iex -S mix
```

## grpc web
Point you browser to [http://you_envoy_machine_ip:8080/](http://localhost:8080/)

in order to get connection working with signal_server you need envoy. Check [readme](configuration/grpc_web/README.md) on how to get started.


## simpler less capable option

To access the *Websocket client* UI point your web browser to [http://localhost:8080/websocket_demo/web_car.html).
The controlls being displayed are hardcoded in a javascript file `service_client/priv/static_files/js/web_car.js`.

## Websocket API

The API is now documentet at this point.
For a working sample of how to use the code go to `priv/websocket_demo/js/web_car.js`.
More importantly, look at the *Websocket* section.
