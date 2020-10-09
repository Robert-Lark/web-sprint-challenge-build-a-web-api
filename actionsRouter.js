const express = require("express");

const router = express.Router();
const helpers = require("./data/helpers/actionModel");

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

router.post("/", (req, res) => {
    helpers
        .insert({
            project_id: req.body.project_id,
            description: req.body.description,
            notes: req.body.notes,
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
            project_id: req.body.project_id,
            description: req.body.description,
            notes: req.body.notes,
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

module.exports = router