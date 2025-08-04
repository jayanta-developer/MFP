const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
// lessen 4/3

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: true,
    // historyApiFallback: {
    //   index: "index.html",
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
