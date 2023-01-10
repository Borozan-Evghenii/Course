import express from "express";
import ReactDOM from "react-dom/server";
import Header from "../shared/Header";
import { indexTemplate } from "./indexTemplate";

const app = express(); // call expres as function

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
  // listener for get method ('/'is route where is accesible, handler witch take request an response)
  res.send(indexTemplate(ReactDOM.renderToString(Header()))); //create respond return computed react app
});

app.listen(3000, () => console.log("Server Started on 3000 port")); //call server for runing from cmd
