const models = require("../models");

class UserController {
  static browse = (req, res) => {
    models.user
      .findAllUsers()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserController;
