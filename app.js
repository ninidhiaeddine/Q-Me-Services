// dependencies:
const express = require("express");
const rootRoute = require("./routes/root");
const guestRoute = require("./routes/guest");

// set env:
require("dotenv").config();

// initialize app:
const app = express();

// set middleware:
app.use(express.json());

// register routes:
app.use("/api", rootRoute);
app.use("/api/guests", guestRoute);

// set port number:
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on Port ${port}...`);
});
