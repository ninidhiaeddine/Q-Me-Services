const express = require("express");
const guestController = require("../controllers/guest");

const router = express.Router();

router.get("/", guestController.getGuests);
router.get("/:id", guestController.getGuestById);
router.put("/:id", guestController.updateGuest);
router.delete("/", guestController.deleteGuests);
router.delete("/:id", guestController.deleteGuest);

module.exports = router;
