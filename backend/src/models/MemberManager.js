const AbstractManager = require("./AbstractManager");

class MemberManager extends AbstractManager {
  static table = "member";

  findAllMembers() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = MemberManager;
