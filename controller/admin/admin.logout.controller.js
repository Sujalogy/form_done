const {blacklist} = require("../../blacklist.lgot");

const logOut = (req,res) => {
    const token = req.headers.authorization
    try {
        blacklist.push(token);
        res.status(200).json({msg : "The user has been logged out..."})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {
    logOut
}