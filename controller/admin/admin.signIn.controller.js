
const { AdminModel } = require("../../model/admin.model");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const signIn = async (req,res) => {
    const {email, password} = req.body;
    try {
        const admins = await AdminModel.find({email});
        if(admins.length > 0) {
            bcrypt.compare(password, admins[0].password, (err, result) => {
                if(result) {
                    const token = jwt.sign({ adminID : admins[0]._id }, "AkhandBharat");
                    res.status(200).json({"msg" : "logged in successfully...", "token" : token});
                    console.log("result");
                } else {
                    res.status(400).json({"msg" : "something went wrong", "error" : err.message});
                    console.log("not result")
                }
            });
        } else {
            res.status(200).json({"msg" : "wrong credentials...!"})
            console.log("nothing")
        }
    } catch (error) {
        res.status(400).json({"msg" : "something went wrong", "error" : error.message});
        console.log("error")
    }
}

module.exports = {
    signIn
}  