const Event = require("../models/eventModel");
const mongoose = require("mongoose");

//GET ALL EVENTS
const getEvents = async (req, res) => {
  const events = await Event.find({}).sort({ startDate: -1 });

  res.status(200).json(events);
};

//GET SINGLE EVENT
const getEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such event" });
  }

  const event = await Event.findById(id);
  if (!event) {
    return res.staus(404).json({ error: "No such event" });
  }
  res.status(200).json(event);
};

//CREATE NEW EVENT
const createEvent = async (req, res) => {
  const {
    title,
    logo,
    startDate,
    endDate,
    location,
    industry,
    organizer,
    foundedIn,
    frequency,
    website,
    description,
  } = req.body;

  //add doc to db
  try {
    const event = await Event.create({
      title,
      logo,
      startDate,
      endDate,
      location,
      industry,
      organizer,
      foundedIn,
      frequency,
      website,
      description,
    });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE SINGLE EVENT
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such event" });
  }

  const event = await Event.findOneAndDelete({ _id: id });
  if (!event) {
    return res.status(404).json({ error: "No such event" });
  }
  res.status(200).json(event);
};

//PATCH AN EVENT
const updateEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such event" });
  }

  const event = await Event.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!event) {
    return res.status(404).json({ error: "No such event" });
  }
  res.status(200).json(event);
};

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
};
