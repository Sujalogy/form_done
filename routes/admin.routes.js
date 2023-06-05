const express = require("express");
const { signUp } = require("../controller/admin/admin.signUp.controller");
const { signIn } = require("../controller/admin/admin.signIn.controller");
const { logOut } = require("../controller/admin/admin.logout.controller");
const { auth } = require("../middleware/auth.middleware")
const adminRoute = express.Router();

adminRoute.route("/register").post(signUp);
adminRoute.route("/login").post(signIn);
adminRoute.route("/logout").get(logOut);


module.exports = {
    adminRoute
}