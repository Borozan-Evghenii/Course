const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV; // process.env is a reference to our enviorement
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";

function setupDevtool() {
  if (IS_DEV) return "eval";
  if (IS_PROD) return false;
}

module.exports = {
  resolve: {
    // rules for with what files extension wiil be work webpack
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"], // enumerated the extensions
  },
  mode: NODE_ENV ? NODE_ENV : "development", //mode will be runed webpack production | development | none
  entry: path.resolve(__dirname, "./src/index.jsx"), // entery point for webpack transpilation
  output: {
    path: path.resolve(__dirname, "./dist"), // finnal point for transpilated files ( bundle )
    filename: "index.js", // bundle name
  },
  module: {
    //connect module for webpack will be understand syntax
    rules: [
      {
        //rule for what files will be runed loader
        test: /\.[tj]sx?$/, //describe with regex expresion for what files we need to rune a loader ( js, jsx, ts, tsx )
        use: ["ts-loader"], // loader to be used
      },
    ],
  },
  plugins: [
    //connect and set plugins
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
  ],
  devServer: {
    // after installing WEBPACK-DEV-SERVER
    port: 3000,
    open: true, // after runind page with project will be opened in browser
    hot: IS_DEV, // hot-reload options work only in dev
  },
  devTool: setupDevtool(),
};
