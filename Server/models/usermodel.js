const mongoose = require("mongoose");

let userSchema = mongoose.Schema;


let user = new userSchema({
  name: String,
  email: String,
  city: String,
  street: String,
  zipcode: Number,

  tasks : Array,
  posts : Array,


});

module.exports = mongoose.model("users",user)
