//imports
const mongoose = require("mongoose");

//schema
const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true, max: 100 },
  last_name: { type: String, required: true, max: 100 },
  email: { type: String, required: true, max: 100 },
  password: { type: String, required: true, max: 100 },
});

const UserModel = mongoose.model("User", UserSchema);

//exports
module.exports = { UserModel };
