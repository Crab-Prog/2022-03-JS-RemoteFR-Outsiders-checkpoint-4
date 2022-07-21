const express = require("express");

const {
  ItemController,
  MemberController,
  RegistrationController,
  AuthController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/members", MemberController.browse);

router.post("/registration", RegistrationController.add);

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

module.exports = router;
