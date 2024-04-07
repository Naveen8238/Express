const express = require("express");
const cors = require("cors");

const PORT = 8800;

//mongoose
const mongoose = require("mongoose");

const hostName = "127.0.0.8";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/student", (req, res) => {
  let data = {
    name: "spiderman",
    age: "24",
    address: "NewYork",
  };
  res.send(data);
});

//post api
app.post("/newuser", (req, res) => {
  console.log(req.body);
  res.send("send data");
});

//database connection

app.listen(PORT, hostName, () => {
  console.log(`server is running at http://${hostName}:${PORT}`);
});
