const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./common");

module.exports = merge(common, {

  devtool: "inline-source-map",
  devServer: {
    hot: true,
    noInfo: true,
    clientLogLevel: "none",
    port: "9001",
    contentBase: "./dist"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      },
      "DEVELOPMENT": JSON.stringify(true)
    })
  ]

});