const express = require("express");
const dbConnection = require("./db");
const userModel = require("./userModule");
const PORT = 4000;
const hostName = "127.0.0.4";
const app = express();

//middleware
app.use(express.json());

// app.get("/users", async (req, res) => {
//   let data = await userModel.find();
//   res.send(data);
// });

app.get("/search", async (req, res) => {
  console.log(req.query);
  let data = await userModel.finfd({ $or: [{ name: req.query.name }] });
  res.send(data);
});

app.listen(PORT, hostName, () => {
  dbConnection();
  console.log(`the server is running at http://${hostName}:${PORT}`);
});
