const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const ip = req.header["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(ip);

  res.send("404 not found");
});

app.listen(port, () => console.log("Welcome to nodeJS")); // port 설정
