const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./common");

module.exports = merge(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      },
      PRODUCTION: JSON.stringify(true)
    })
  ]
});
