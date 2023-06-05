const { SewakModel } = require("../../model/parichye.model");

const deleteSewak = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const sewak = await SewakModel.findByIdAndDelete({_id : id}, payload);
        res.status(200).json({msg : "sewak has been deleted", sewak : sewak});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {
    deleteSewak
}