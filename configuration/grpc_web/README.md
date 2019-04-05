## Run envoy
from the docker folder
```bash
sudo -E  docker build -t envoy:v1 .
```
start it
```bash
sudo docker run  -p 8080:8080 --net=host  envoy:v1
```
## Run
Use the generated js files to access the grpc server!

## Re-configure ip address, if envoy is running on "other machine"
[modify](configuration/grpc_web/docker/envoy.yaml) and rebuild envoy docker.

### Reference, re-generate web-grp js files

inspiration from
https://github.com/grpc/grpc-web/ and https://hackernoon.com/interface-grpc-with-web-using-grpc-web-and-envoy-possibly-the-best-way-forward-3ae9671af67


proto files are avalible in: [signal_server/apps/grpc_service/proto_files/](https://github.com/volvo-cars/signalbroker-server/tree/master/apps/grpc_service/proto_files)

to re-generate files - or just grab the files from the generated folder

- git clone https://github.com/grpc/grpc-web.git
- make plugin
- make sure to copy protoc-gen-grpc-web to a discoverable path such as /user/local/bin

mkdir generated. Run the command from "this" directory!

```bash
protoc ./proto_files/*.proto -I./proto_files/ --js_out=import_style=commonjs:generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:generated
```
