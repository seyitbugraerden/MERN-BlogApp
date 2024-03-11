const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    fullname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    birthday: { type: Date, required: false },
    password: { type: String, required: true },
    image: { type: Buffer },
    aboutme: { type: String, required: true },
    facebook: { type: String, required: false },
    twitter: { type: String, required: false },
    linkedin: { type: String, required: false },
    instagram: { type: String, required: false },
    threads: { type: String, required: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
