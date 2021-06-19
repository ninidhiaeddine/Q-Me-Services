// database dependency:
const db = require("../config/database");
const { Request } = require("tedious");

// model dependencies:
const Guest = require("../models/guest");

function getGuests() {
  return new Promise((resolve, reject) => {
    let result = [];
    let sql = "SELECT * FROM Guest;";

    request = new Request(sql, (err, rowCount, rows) => {
      if (err) {
        reject(err);
      } else if (rowCount == 0) {
        reject("Resource Not Found.");
      } else {
        resolve(result);
      }
    }).on("row", (columns) => {
      // declare new guest:
      let guest = new Guest();

      // map columns to object's fields:
      guest.PK_Guest = columns[0].value;
      guest.Name = columns[1].value;
      guest.PhoneNumber = columns[2].value;
      guest.RegistrationDate = columns[3].value;

      // add to list:
      result.push(guest);
    });

    db.execSql(request);
  });
}

function getGuestById(id) {
  return new Promise((resolve, reject) => {
    let guest = {};
    let sql = `SELECT * FROM Guest WHERE PK_Guest=${id};`;

    request = new Request(sql, (err, rowCount, rows) => {
      if (err) {
        reject(err);
      } else if (rowCount == 0) {
        reject("Resource Not Found.");
      } else {
        resolve(guest);
      }
    }).on("row", (columns) => {
      // map columns to object's fields:
      guest.PK_Guest = columns[0].value;
      guest.Name = columns[1].value;
      guest.PhoneNumber = columns[2].value;
      guest.RegistrationDate = columns[3].value;
    });

    db.execSql(request);
  });
}

module.exports = {
  getGuests,
  getGuestById,
  updateGuest,
  deleteGuests,
  deleteGuests,
};
