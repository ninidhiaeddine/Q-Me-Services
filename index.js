// dependecies:
const express = require("express");
const Joi = require("joi");
const { Connection, Request } = require("tedious");
require("dotenv").config({ path: __dirname + "/.env" });

var config = {
  server: "q-me.database.windows.net",
  authentication: {
    type: "default",
    options: {
      userName: "ninidhia-proj-16",
      password: process.env.DB_PWD,
    },
  },
  options: {
    database: "q-me-database",
    encrypt: true,
  },
};

const connection = new Connection(config);

connection.on("connect", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

connection.connect();

function queryDatabase() {
  let sql = "Select * from branch";
  request = new Request(sql, (err, rowCount) => {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + " rows");
    }
    connection.close();
  });

  request.on("row", function (columns) {
    columns.forEach(function (column) {
      if (column.value === null) {
        console.log("NULL");
      } else {
        console.log(column.value);
      }
    });
  });

  connection.execSql(request);
}

// set port number:
const port = process.env.PORT || 3000;

// initialize app:
const app = express();

// set middleware:
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

// root endpoint:
app.get("/", (req, res) => {
  res.send("Hello World! This is the RESTful API for Q-Me!");
});
