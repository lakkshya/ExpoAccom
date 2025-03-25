const express = require("express");
const {
  getEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
} = require("../controllers/eventController");

const router = express.Router();

//GET ALL EVENTS
router.get("/", getEvents);

//GET SINGLE EVENT
router.get("/:id", getEvent);

//POST NEW EVENT
router.post("/", createEvent);

//DELETE SINGLE EVENT
router.delete("/:id", deleteEvent);

//PATCH AN EVENT
router.patch("/:id", updateEvent);

module.exports = router;
