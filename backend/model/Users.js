const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  birthday: { type: Date, required: true },
  password: { type: String, required: true },
  image: { type: Buffer },
  aboutme: { type: String, required: true },
  socialLinks: {
    facebook: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
    threads: { type: String },
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
