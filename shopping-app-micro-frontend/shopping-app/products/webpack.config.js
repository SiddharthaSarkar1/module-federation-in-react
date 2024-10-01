const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "products", //name of the mfe
      filename: "remoteEntry.js", //name of a filewhich will be imported in container
      exposes: {
        "./ProductIndex": "./src/index.js", //code to be exported and can be used in container
      },
    }),
  ],
};
