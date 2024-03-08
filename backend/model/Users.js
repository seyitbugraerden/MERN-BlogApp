const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  fullname: { type: String, required: true },
  birthday: { type: Date, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: Buffer },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
