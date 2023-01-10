const path = require("path");
const nodeExternals = require("webpack-node-externals");

const NODE_ENV = process.env.NODE_ENV; // process.env is a reference to our enviorement

module.exports = {
  target: "node", //create bundle for node.js
  mode: NODE_ENV ? NODE_ENV : "development", //mode will be runed webpack production | development | none
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },
  resolve: {
    // rules for with what files extension wiil be work webpack
    extensions: [".js", ".jsx", ".json"], // enumerated the extensions
  },
  externals: [nodeExternals()],
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
  optimization: {
    // disable minification
    minimize: false,
  },
};
