# Library compiler

This repository takes gRPC generated files and bundles them with webpack into one optimized javascript file.

Please install Yarn or substitute the yarn commands with Node equivalents.

## Compilation

Paste in and replace the generated gRPC files in the root of this `libraryCompiler/` folder

To install all dependencies run
```
 yarn
```
To upgrade dependencies run
```
 yarn upgrade
```
To compile the library from generated files run
```
npx webpack
```

Check the `/dist` to make sure it contains an `api.js` file

Copy the generated `/dist` folder containing the `api.js` file

Paste into the frontend client source: `signal-broker/src/grpc` replacing all files contained within.

Open this recently added file and a new line to `api.js` with this text to disable the linter when editing the front-end client.
```
/* eslint-disable */
```

## Modifications

To modify the API, edit `client.js` by adding new imports and including them in the exports.
