// import api routes and express router
const router = require("express").Router();
const appRoutes = require("./apps");

// prefix app route endpoint with "/app"
router.use("/app", appRoutes);

// export routes
module.exports = router;