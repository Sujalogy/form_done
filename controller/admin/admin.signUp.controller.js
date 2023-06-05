const {AdminModel} = require("../../model/admin.model");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if(err) res.status(400).json({err : "somethings wrong", err : err.message})
            else {
                const adminAdd = new AdminModel({name, email, password : hash});
                await adminAdd.save();
                res.status(200).json({msg : "admin has been added", admin : adminAdd});
            }
        });
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {
    signUp
}