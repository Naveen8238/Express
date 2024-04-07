// const bcrypt = require("bcrypt");
// const e = require("express");
// const salt = 10;

// const password = "Naveen";

// bcrypt.hash(password, salt, (error, hashData) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(hashData);
//   }
// });

// bcrypt.compare(
//   "Naveen",
//   "$2b$10$PTw0wA5Cnn7vMVwlKEvFMuXUihmDsgMU8181NQl1KJkpHIobduWsq",
//   (error, result) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(result);
//     }
//   }
// );

// //jwt
// const jwt = require("jsonwebtoken");

// const secretKey = "Rocky";

// let student = {
//   name: "Naveen",
//   add: "kadapa",
//   age: "21",
//   marks: [{ subName: "js", mark: "30" }],
// };

// const token = jwt.sign(student, secretKey, { expiresIn: "1h" });

// jwt.verify(token, secretKey, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//express

const express = require("express");

const PORT = 4000;

const hostName = "127.0.0.1";

const app = express();

//middleware;
app.use(express.json());

//get
app.post("/newuser", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, hostName, () => {
  console.log(`the server is connect to the http://${hostName}:${PORT}`);
});
