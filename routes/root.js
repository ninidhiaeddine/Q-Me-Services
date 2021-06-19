const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! This is the RESTful API for Q-Me!");
});

module.exports = router;
