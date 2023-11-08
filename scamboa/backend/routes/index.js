var express = require("express");
var router = express.Router();

// test

router.get("/date", (req, res) => {
	const date = new Date();
	res.json({ now: date });
});

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

module.exports = router;
