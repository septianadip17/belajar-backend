// Import Contact Model
const Contact = require("./contactModel");

// Handle index actions
exports.index = async function (req, res) {
  try {
    const contacts = await Contact.get();
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
};

// Handle create contact actions
exports.new = async function (req, res) {
  try {
    let contact = new Contact();
    contact.name = req.body.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    const savedContact = await contact.save();
    res.json({
      status: "success",
      message: "Contact added successfully",
      contact: savedContact,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message || "Some error occurred while creating the contact.",
    });
  }
};

// Handle view contact info
exports.view = async function (req, res) {
  try {
    const contact = await Contact.findById(req.params.contact_id);
    res.json({
      message: "Contact details loading..",
      data: contact,
    });
  } catch (err) {
    res.send(err);
  }
};

// Handle update contact info
exports.update = async function (req, res) {
  try {
    const contact = await Contact.findById(req.params.contact_id);
    if (!contact) {
      return res.status(404).json({
        status: "error",
        message: "Contact not found",
      });
    }
    contact.name = req.body.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    const updatedContact = await contact.save();
    res.json({
      status: "success",
      message: "Contact Info updated",
      contact: updatedContact,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message || "Error updating contact information",
    });
  }
};

// Handle delete contact
exports.delete = async function (req, res) {
  try {
    await Contact.deleteOne({ _id: req.params.contact_id });
    res.json({
      status: "success",
      message: "Contact deleted successfully!",
    });
  } catch (err) {
    res.send(err);
  }
};

// Handle create multiple contacts
exports.newBatch = async function (req, res) {
  try {
    console.log("Request body:", req.body);
    const contacts = await Contact.insertMany(req.body);
    res.json({
      message: "Multiple contacts created successfully!",
      data: contacts,
    });
  } catch (err) {
    console.error("Error:", err);
    res.json(err);
  }
};
