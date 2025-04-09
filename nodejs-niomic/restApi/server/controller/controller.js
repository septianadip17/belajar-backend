//filename: controller.js

// import model
const userdb = require("../model/model");

// create and save data user
exports.create = (req, res) => {
  // validation request
  if (!req.body) {
    res.status(400).send({
      message: "data content can not be empty!",
    });
    return;
  }
  // get data request from json/form-url-encoded
  const user = new userdb({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
  });
  // save data user to database
  user
    .save()
    .then((data) => {
      res.status(201).json({
        message: "User created successfully",
        Data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "internal server error",
      });
    });
};

// get data user by parameter or get all data user
exports.find = (req, res) => {
  if (req.query.username) {
    const userName = req.query.username;
    userdb
      .findOne({
        username: userName,
      })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: "Cannot found User with username " + userName,
          });
        } else {
          res.json({
            message: "Success get data user",
            Data: data,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Internal server error",
        });
      });
  } else {
    userdb
      .find()
      .then((data) => {
        res.json({
          message: "Success get all data user",
          Data: user,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Internal server error",
        });
      });
  }
};

// update data user by parameter username
exports.update = (req, res) => {
  try {
    userdb
      .findOneAndUpdate({
          username: req.params.username,
        },
        req.body, {
          new: true,
        }
      )
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: "Cannot found User with username " + req.params.username,
          });
        } else {
          res.json({
            message: "Success update data user",
            Data: data,
          });
        }
      });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Internal server error",
    });
  }
};

// delete data user by parameter username
exports.delete = (req, res) => {
  const userName = req.params.username;
  userdb
    .findOneAndDelete({
      username: userName,
    })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot delete User with username " + userName,
        });
      } else {
        res.json({
          message: "Success delete data user",
          Data: data,
        });
      }
    });
};