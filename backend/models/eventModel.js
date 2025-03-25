const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    foundedIn: {
      type: Date,
      required: true,
    },
    frequency: {
      type: Number,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);