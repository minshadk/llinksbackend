const express = require("express");
const linkController = require("./../controllers/linkController");

const router = express.Router();

router.route("/").post(linkController.createLink);

module.exports = router;
