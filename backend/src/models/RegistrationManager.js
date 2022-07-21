const AbstractManager = require("./AbstractManager");

class RegistrationManager extends AbstractManager {
  static table = "pre_registration";

  findAllPreMembers() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(regist) {
    return this.connection.query(
      `insert into ${RegistrationManager.table} (first_name, last_name, birth_date, address, postal_code, city, cellphone, cellphone_father, cellphone_mother,phone, email, plan, means_of_knowledge, hasDanced) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        regist.first_name,
        regist.last_name,
        regist.birth_date,
        regist.address,
        regist.postal_code,
        regist.city,
        regist.cellphone,
        regist.cellphone_father,
        regist.cellphone_mother,
        regist.phone,
        regist.email,
        regist.plan,
        regist.means_of_knowledge,
        regist.hasDanced,
      ]
    );
  }
}

module.exports = RegistrationManager;
