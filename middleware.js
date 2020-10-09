
const helpers = require("./data/helpers/projectModel")
const helpers2 = require("./data/helpers/actionModel");

function validateId(req, res, next) {
    return (req, res, next) => {
        helpers
            .get(req.params.id)
            .then((id) => {
                if (id) {
                    req.id = id;
                    next();
                } else {
                    res.status(404).json({
                        message: "Id not found"
                    })
                }
            })
            .catch((error) => {
                res.status(500).json({
                    message: "Error retrieving ID"
                })
            })
    }
}

module.exports = {
    validateId
}