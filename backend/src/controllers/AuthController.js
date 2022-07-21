require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AuthManager = require("../models/AuthManager");

class AuthController {
  static async register(req, res) {
    try {
      const { username, password } = req.body;

      // hash le mot de passe
      const hash = await bcrypt.hash(password, 10);

      // je passe le MDP hashé dans le model
      const user = await AuthManager.create({ username, password: hash });
      res.status(201).json({
        message: "User created",
        user,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await AuthManager.getUserByUsername(username);
      if (user.length === 0) {
        return res.status(400).json({
          status: 400,
          message: "User not found",
        });
      }
      const isPasswordValid = await bcrypt.compare(password, user[0].password);
      if (!isPasswordValid) {
        return res.status(400).json({
          status: 400,
          message: "Password is incorrect",
        });
      }

      // je crée un token
      const token = jwt.sign(
        {
          username: user[0].username,
          isAdmin: user[0].isAdmin,
        },
        process.env.SECRET_JWT,
        {
          expiresIn: "1h",
        }
      );

      res
        .cookie("user_insschool", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        })

        .json({
          message: "User logged",
          cookie: token,
          username: user[0].username,
          isAdmin: user[0].isAdmin,
        });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
    return null;
  }
}

module.exports = AuthController;
