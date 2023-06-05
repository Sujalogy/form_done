const express = require("express");
const sewakRouter = express.Router();

const { getAll } = require("../controller/sewak/getAll.controller");
const { addSewak } = require("../controller/sewak/create.controller");
const { updateSewak } = require("../controller/sewak/update.controller");
const { deleteSewak } = require("../controller/sewak/delete.controller");
const { getOne } = require("../controller/sewak/getOne.controller");

sewakRouter.route("/").get(getAll).post(addSewak);
sewakRouter.route("/:id").patch(updateSewak).delete(deleteSewak).get(getOne);

module.exports = {
    sewakRouter
}