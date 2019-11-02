const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Routes
router.use("/api", apiRoutes);

// In case there are no Routes
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;