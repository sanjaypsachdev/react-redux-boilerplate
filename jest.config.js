module.exports = {
  "verbose": true,
  "setupFiles": [
    "raf/polyfill",
    "<rootDir>/src/tests/setupTests.js"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ]
}