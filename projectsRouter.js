const express = require("express");

const router = express.Router();
const helpers = require("./data/helpers/projectModel");
const helpersActions = require("./data/helpers/actionModel");


//COMPLETED
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
// router.get("/actions", (req, res) => {
// 	helpersActions
// 		.get()
// 		.then((response) => {
// 			res.status(200).json(response);
// 		})
// 		.catch((error) => {
// 			res.status(404).json({ message: "does not exist" });
// 		});
// });
//COMPLETED
router.post("/", (req, res) => {
    helpers
        .insert({
            name: req.body.name,
            description: req.body.description,
        })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => {
            res.status(404).json({ message: "does not exist" });
        });
});
//COMPLETED
router.put("/:id", (req, res) => {
    helpers
        .update(req.params.id, {
            name: req.body.name,
            description: req.body.description,
        })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => {
            res.status(404).json({ message: "does not exist" });
        });
});
//COMPLETED
router.delete("/:id", (req, res) => {
    helpers
        .remove(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => {
            res.status(404).json({ message: "does not exist" });
        });
});

module.exports = router;
