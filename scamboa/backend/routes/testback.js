var express = require("express");
var router = express.Router();

let test = ["tom", "cheese", "traditional"];

// get all
router.get("/", (req, res, next) => {
	res.json({ testResult: test });
});

// get one
router.get("/:id", (req, res, next) => {
	res.json({ testResultOne: test });
});

// add
router.post("/addtest", (req, res, next) => {
	if (req.body.newtest) {
		console.log(req.body);
		test.push(req.body.newtest);
		res.json({ updateTestResult: test });
	} else {
		res.json({ updateTestResult: "NOK" });
	}
});

// update
router.put("/update/:position", (req, res, next) => {
	console.log("req.params.position :", req.params.position);
	// recuperation position (in array) for change
	test[req.params.position] = req.body.replacementTest;
	// verify
	console.log("req.body:", req.body.replacementTest);
	// afficher new array
	res.json({ updateTestResult: test });
});

// delete last one
router.delete("/deletelast", (req, res, next) => {
	test.pop();
	res.json({ updateTestResult: test });
});

// delete element depuis sa position
router.delete("/deleteone/:position", (req, res, next) => {
	test.splice(req.params.position, 1);
	res.json({ updateTestResult: test });
});

// delete all elements
router.delete("/delete", (req, res, next) => {
	test.pop();
	res.json({ updateTestResult: test });
});

module.exports = router;
