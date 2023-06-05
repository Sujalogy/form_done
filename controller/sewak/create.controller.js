const { SewakModel } = require("../../model/parichye.model");
const addSewak = async (req, res) => {
    const payload = req.body;
    try {
        const sewak = new SewakModel(payload);
        await sewak.save();
        res.status(200).json({msg : "sewak has been added to the Suchi"});
    } catch (error) {
        res.status(400).json({error : error.message});        
    }
}

module.exports = {
    addSewak
}