const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  PORT = process.env.PORT || 5000,
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  passport = require("passport"),
  User = require("./models/user");

app.use(
  require("express-session")({
    secret: "This will be changed",
    resave: false,
    saveUninitialized: false
  })
);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
