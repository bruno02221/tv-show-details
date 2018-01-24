const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./common");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractAppCss = new ExtractTextPlugin('app.min.css');
const extractVendorCss = new ExtractTextPlugin('vendor.css');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: extractAppCss.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[path]__[local]"
              }
            },
            { loader: "postcss-loader" }
          ]
        })
      },
      {
        test: /(node_modules).+\.css$/,
        use: extractVendorCss.extract({
          use: "css-loader"
        })  
      }
    ]
  },
  plugins: [
    extractAppCss,
    extractVendorCss,
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      },
      PRODUCTION: JSON.stringify(true)
    })
  ]
});
