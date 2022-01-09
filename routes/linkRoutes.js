const express = require("express");
const linkController = require("./../controllers/linkController");

const router = express.Router();

router
  .route("/")
  .post(linkController.createLink)
  .get(linkController.getAllLinks);

router
  .route("/:id")
  .get(linkController.getLink)
  .patch(linkController.updateLink)
  .delete(linkController.deleteLink);

module.exports = router;
