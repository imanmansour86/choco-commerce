const router = require("express").Router();

const api = require("./api/index");

router.use("/api", api);

module.exports = router;
