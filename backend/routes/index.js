const express = require("express");
const router = express.Router();

// Route dosyalarını buraya import edelim.
const blogRoute = require("./blog.js");

router.use("/blog", blogRoute);

//export etmemiz gerekli!
module.exports = router;
