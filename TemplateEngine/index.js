const express = require("express");
const PORT = 4000;
const hostName = "127.0.0.6";
const app = express();
const hbs = require("hbs");

app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  //res.send("hello")
  res.render("home");
});
app.listen(PORT, hostName, () => {
  console.log(`express sever starting http://${hostName}:${PORT}`);
});
