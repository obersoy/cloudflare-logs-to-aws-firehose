const path = require("path")
const webpack = require("webpack")

const CF_APP_VERSION = JSON.stringify(require("./package.json").version)

module.exports = {
  mode: "development",
  devtool: "hidden-source-map",
  entry: {
    worker: "./index.js",
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[name].map",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new webpack.DefinePlugin({
      CF_APP_VERSION
    }),
  ],
  target: "webworker",
}