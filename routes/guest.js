const express = require("express");
const guestController = require("../controllers/guest");

const router = express.Router();

router.get("/", guestController.getGuests);
router.get("/:id", guestController.getGuestById);
router.put("/:id", guestController.updateGuestById);
router.delete("/", guestController.deleteGuests);
router.delete("/:id", guestController.deleteGuestById);

module.exports = router;
