const router = require("express").Router();
const bookRoutes = require("./books");

// Routes
router.use("/books", bookRoutes);

module.exports = router;