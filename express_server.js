const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs");

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) => {
  // res.send("Hello!");
  // res.send("OKKKKKK");
  res.render('landingPage');
});

app.get("/payment", (req, res) => {
  // res.send("Hello!");
  // res.send("OKKKKKK");
  res.render('paymentsPage');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});