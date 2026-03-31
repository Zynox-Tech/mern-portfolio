const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    console.error("contact contoller error", error);
    return res.status(500).json({ message: "message not delivered" });
    next(error);
  }
};

module.exports = contactForm;