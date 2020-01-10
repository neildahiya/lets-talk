var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var UserSchema = new mongoose.Schema({
  name: String,
  image: String,
  password: String,
  ethnicity: String,
  age: Number,
  phone: Number,
  email: String,
  gender: String,
  trainee: Boolean,
  feeling: String
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
