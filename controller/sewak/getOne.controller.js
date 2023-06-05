const { SewakModel } = require("../../model/parichye.model");
const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const sewak = await SewakModel.findOne({ _id: id });
        res.status(200).send(sewak);
    } catch (error) {
        res.status(400).json({error : error.message});        
    }
}

module.exports = {
    getOne
}