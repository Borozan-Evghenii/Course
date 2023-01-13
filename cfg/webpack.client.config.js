const path = require("path");

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
    extensions: [".js", ".jsx", ".json"], // enumerated the extensions
  },
  mode: NODE_ENV ? NODE_ENV : "development", //mode will be runed webpack production | development | none
  entry: path.resolve(__dirname, "../src/client/index.jsx"), // entery point for webpack transpilation
  output: {
    path: path.resolve(__dirname, "../dist/client"), // finnal point for transpilated files ( bundle )
    filename: "client.js", // bundle name
  },
  module: {
    //connect module for webpack will be understand syntax
    rules: [
      {
        //rule for what files will be runed loader
        test: /\.[tj]sx?$/, //describe with regex expresion for what files we need to rune a loader ( js, jsx, ts, tsx )
        use: ["ts-loader"], // loader to be used
      },
      {
        //rule for what files will be runed loader
        test: /\.css$/, //describe with regex expresion for what files we need to rune a loader ( js, jsx, ts, tsx )
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              onlyLocals: true,
            },
          },
        ], // loader to be used
      },
    ],
  },
  devtool: setupDevtool(),
};
