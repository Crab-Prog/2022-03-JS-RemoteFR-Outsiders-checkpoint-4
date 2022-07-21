const express = require("express");

const {
  ItemController,
  MemberController,
  RegistrationController,
  AuthController,
  UserController,
} = require("./controllers");

const router = express.Router();
// const {  middlewareAdmin } = require("./middleware/middlewareAdmin");

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/members", MemberController.browse);

router.get("/registration", RegistrationController.browse);
router.post("/registration", RegistrationController.add);

router.get("/user", UserController.browse);

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

module.exports = router;
