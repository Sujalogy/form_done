const { SewakModel } = require("../../model/parichye.model");

const getAll = async (req, res) => {
    try {
        const sewaks = await SewakModel.find();
        res.status(200).send(sewaks);
    } catch (error) {
        res.status(400).json({error : error.message});        
    }
}

module.exports = {
    getAll
}