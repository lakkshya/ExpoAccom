const express = require("express");
const Event = require("../models/eventModel");

const router = express.Router();

//GET ALL EVENTS
router.get("/", (req, res) => {
  res.send("get all events");
});

//GET SINGLE EVENT
router.get("/:id", (req, res) => {
  res.send("get single event");
});

//POST NEW EVENT
router.post("/", async (req, res) => {
  const { title, startDate, endDate, location, industry, description } =
    req.body;

  try {
    const event = await Event.create({
      title,
      startDate,
      endDate,
      location,
      industry,
      description,
    });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE SINGLE EVENT
router.delete("/:id", (req, res) => {
  res.send("delete single event");
});

//PATCH AN EVENT
router.patch("/:id", (req, res) => {
  res.send("patch an event");
});

module.exports = router;
