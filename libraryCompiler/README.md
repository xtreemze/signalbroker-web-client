# Library compiler

This repository takes GRPC generated files and bundles them with webpack into one optimized javascript file.

1. Paste in and replace the generated files in the root of this folder
2. To install all dependencies run
```
 yarn
```
3. To compile the library from generated files run
```
npx webpack
```

4. Check the `/dist` to make sure it contains an api.js file
5. Copy the generated `/dist` folder containing the `api.js` file
6. Paste into the frontend client source: `signal-broker/src/grpc` replacing all files contained within
