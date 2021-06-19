const dataAccessLayer = require("../services/dal");

function getGuests(req, res) {
  dataAccessLayer
    .getGuests()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(404).send(err));
}

function getGuestById(req, res) {
  // extract id from params:
  let id = req.params.id;
  dataAccessLayer
    .getGuestById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(404).send(err));
}

function updateGuest(req, res) {}

function deleteGuests(req, res) {}

function deleteGuest(req, res) {}

module.exports = {
  getGuests,
  getGuestById,
  updateGuest,
  deleteGuests,
  deleteGuest,
};
