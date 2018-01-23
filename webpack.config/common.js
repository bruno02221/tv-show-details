const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {

  context: path.resolve(__dirname, "../"),

  entry: {
    app: "./src/app.js"
  },

  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },

  plugins: [
    new CleanPlugin([
      "../dist",
      "../build"
    ], {
      allowExternal: true
    }),
    new HtmlPlugin({
      template: "./src/index.html"
    })
  ]

}