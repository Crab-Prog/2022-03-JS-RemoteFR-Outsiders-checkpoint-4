const models = require("../models");

class RegistrationController {
  static add = (req, res) => {
    const regist = req.body;
    models.pre_registration
      .insert(regist)
      .then(([result]) => {
        res.status(201).send({ ...regist, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = RegistrationController;
