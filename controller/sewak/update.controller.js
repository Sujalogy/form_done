const { SewakModel } = require("../../model/parichye.model");

const updateSewak = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const sewak = await SewakModel.findByIdAndUpdate({_id : id}, payload);
        res.status(200).json({msg : "sewak has been updated", sewak : sewak});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {
    updateSewak
}