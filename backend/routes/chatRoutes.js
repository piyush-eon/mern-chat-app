const express = require("express");
const { accessChat } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(accessChat);

module.exports = router;
