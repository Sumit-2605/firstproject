const Contact = require("../models/Contact")

exports.createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

   

    const data = await Contact.create({
      name,
      email,
      message
    });

    res.status(201).json({
      message: "Message saved",
      data
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};