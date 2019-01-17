// import express Router and the book controller
const router = require("express").Router();
const appController = require("../../controllers/apps");

// Matches with "/api/app"
router
  .route("/")
  .get(appController.findAll)
  .post(appController.create);

// Matches with "/api/app/:id"
router
  .route("/:id")
  .get(appController.findById)
  .put(appController.update)
  .delete(appController.remove);

module.exports = router;
