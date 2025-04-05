// import contact model
Contact = require("./contactModel");

// handle index actions
exports.index = function (req, res) {
  Contact.get(function (err, contacts) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts,
    });
  });
};

// handle create contact action
exports.new = function (req, res) {
  let contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.gender = req.body.gender;
  contact.email = req.body.email;
  contact.phone = req.body.phone;
  contact.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      message: "New contact created!",
      data: contact,
    });
  });
};

// handle view contact info
exports.view = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      message: "Contact details loading..",
      data: contact,
    });
  });
};

// handle update contact info
exports.update = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.save(function (err) {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.json({
        message: "Contact Info updated!",
        data: contact,
      });
    });
  });
};

// handle delete contact
exports.delete = function (req, res) {
  Contact.remove(
    {
      _id: req.params.contact_id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Contact deleted!",
      });
    }
  );
};
