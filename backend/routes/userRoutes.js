const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");

const router = express.Router();

router.route("/").get(allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
