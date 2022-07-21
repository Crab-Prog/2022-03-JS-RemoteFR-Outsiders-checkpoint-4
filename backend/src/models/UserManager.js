const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  findAllUsers() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = UserManager;
