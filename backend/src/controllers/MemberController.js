const models = require("../models");

class MemberController {
  static browse = (req, res) => {
    models.member
      .findAllMembers()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = MemberController;
