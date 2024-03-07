const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const mainRoute = require("./routes/index.js");
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo.db'ye bağlandı.");
  } catch (error) {
    throw error;
  }
};
app.use(express.json());
app.use("/api", mainRoute);
app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
