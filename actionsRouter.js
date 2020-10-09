const express = require("express");

const router = express.Router();
const helpers = require("./data/helpers/actionModel");
const helpersP = require("./data/helpers/projectModel");
const { validateId } = require("./middleware");

router.get("/actions/", (req, res) => {
    helpers
        .get()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => {
            res.status(404).json({ message: "does not exist" });
        });
});

router.get("/:id/actions/", (req, res) => {
    helpersP
        .getProjectActions(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => {
            res.status(404).json({ message: "does not exist" });
        });
});

router.post("/:id/actions/", validateId(), (req, res) => {
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
router.put("/actions/:id", (req, res) => {
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
router.delete("/actions/:id", (req, res) => {
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