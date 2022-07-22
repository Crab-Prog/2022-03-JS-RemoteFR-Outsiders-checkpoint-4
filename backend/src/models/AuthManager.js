const AbstractManager = require("./AbstractManager");
const connection = require("../services/connection");

class AuthManager extends AbstractManager {
  static table = "user";

  static async create(data) {
    const { username, password } = data;
    const result = await connection
      .promise()
      .query(`INSERT INTO user (username, password) VALUES (?, ?)`, [
        username,
        password,
      ]);
    return result;
  }

  static async getUserByUsername(username) {
    const result = await connection
      .promise()
      .query(`SELECT * FROM user WHERE username = ?`, [username]);
    return result[0];
  }
}

module.exports = AuthManager;
