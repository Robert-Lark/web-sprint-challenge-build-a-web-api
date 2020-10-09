const express = require("express");

const router = express.Router();
const helpers = require("./data/helpers/actionModel");

const { validateId } = require("./middleware/middleware");

router.get("/", (req, res) => {
	helpers
		.get()
		.then((response) => {
            res.status(200).json(response);
		})
		.catch((error) => {
			res.status(404).json({ message: "does not exist" });
		});
});

router.post("/", async (req, res) => {
helpers
	.insert({
		project_id: req.body.project_id,
		description: req.body.description,
		notes: req.body.notes
	})
	.then((response) => {
		res.status(200).json(response);
	})
	.catch((error) => {
		res.status(404).json({ message: "does not exist" });
	});
});

router.put("/", async (req, res) => {
	try {
	} catch (err) {}
});

router.delete("/", async (req, res) => {
	try {
	} catch (err) {}
});

module.exports = router