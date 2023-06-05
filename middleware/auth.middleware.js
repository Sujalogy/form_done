const jwt = require('jsonwebtoken');
const { CURSOR_FLAGS } = require('mongodb');
const { blacklist } = require("../blacklist.lgot")
require("dotenv").config();
const secretKey = process.env.Secret;
const auth = (req, res, next) => {
    const token = req.headers.authorization
    if(token) {
        if(blacklist.includes(token)) {
            res.json({msg : "please login again.."})
        } else {
            jwt.verify(token, secretKey, (err, decoded) => {
                if(decoded) {
                    req.body.adminID = decoded.adminID;
                    next()
                } else {
                    res.status(200).json({msg : "please login!"})
                }
            })
        }
    }
}

module.exports = {
    auth
}