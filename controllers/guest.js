const dataAccessLayer = require("../services/dal");
const GuestValidator = require("../validators/guest-validator");

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

function updateGuestById(req, res) {
  // validate request body:
  let validator = new GuestValidator();
  let validation = validator.validate(req);
  if (validation.error == null) {
    // valid request body:
    let id = req.params.id;
    let name = req.body.name;
    let phoneNumber = req.body.phoneNumber;

    dataAccessLayer
      .updateGuestById(id, name, phoneNumber)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(404).send(err));
  } else {
    // invalid request body:
    res.status(400).send(validation.error.message);
  }
}

function deleteGuests(req, res) {
  dataAccessLayer
    .deleteGuests()
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err));
}

function deleteGuestById(req, res) {
  let id = req.params.id;
  dataAccessLayer
    .deleteGuestById(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send(err));
}

module.exports = {
  getGuests,
  getGuestById,
  updateGuestById,
  deleteGuests,
  deleteGuestById,
};
