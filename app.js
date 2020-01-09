const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  PORT = process.env.PORT || 5000,
  //   Layouts = require("express-ejs-layouts"),
  session = require("express-session"),
  flash = require("connect-flash"),
  passport = require("passport");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
// app.use(Layouts);

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/chat", (req, res) => {
  res.render("chatpage");
});
app.listen(PORT, function() {
  console.log(`listening to port:${PORT}`);
});
