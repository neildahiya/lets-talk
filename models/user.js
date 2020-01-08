var mongoose = require("mongoose");
//schema setup
var userSchema = new mongoose.Schema({
  name: String,
  image: String,
  ethnicity: String,
  age: Number,
  phone: Number,
  email: String,
  gender: String,
  trainee: Boolean,
  feeling: String
});
module.exports = mongoose.model("User", userSchema);
