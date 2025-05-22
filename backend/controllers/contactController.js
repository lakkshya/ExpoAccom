const Contact = require("../models/contactModel");
const mongoose = require("mongoose");

//SUBMIT A CONTACT FORM - POST
const submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, companyName, email, phoneNumber, message } =
      req.body;

    const newContact = new Contact({
      firstName,
      lastName,
      companyName,
      email,
      phoneNumber,
      message,
    });
    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again later." });
  }
};

module.exports = {
  submitContactForm,
};
