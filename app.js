const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  PORT = process.env.PORT || 5000,
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  passport = require("passport"),
  User = require("./models/user");

mongoose.connect(
  "mongodb+srv://neildahiya:abcdefg@cluster0-cjlhb.mongodb.net/letstalk?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
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

//Auth Routes

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});
//sign up logic
app.post("/register", (req, res) => {
  User.register(
    new User({
      firstName: req.body.firstName,
      lastName: req.body.firstName,
      phone: req.body.phoneNumber,
      username: req.body.email
    }),
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
        return res.render("home");
      }
      passport.authenticate("local")(req, res, () => {
        res.redirect("/dashboard");
      });
    }
  );
});

app.get("/chat", (req, res) => {
  res.render("chatpage");
});
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(PORT, function() {
  console.log(`listening to port:${PORT}`);
});
