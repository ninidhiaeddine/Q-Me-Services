const { Connection } = require("tedious");
require("dotenv").config();

// db config:
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
    rowCollectionOnDone: true,
  },
};

// establish connection:
const connection = new Connection(config);
console.log("IN PROGRESS: Establishing Connection with the Database...");
connection.connect((err) => {
  if (err) console.log("FAILURE: " + err);
  else {
    console.log("SUCCESS: Established Connection with the Database!");
  }
});

// export connection:
module.exports = connection;
