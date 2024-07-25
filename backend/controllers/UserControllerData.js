const {userDataModel} = require("../models/UserDataModel.js");

const router1 = async (req, res) => {
    const data = new userDataModel({
        noOfPeopleC: req.body.noOfPeopleC,
        typeOfFood: req.body.typeOfFood,
        time: req.body.time,
        qualityCheck: req.body.qualityCheck
    });
 
    try {
        await data.save();
        res.json({ success: true, message: "Data Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};
const router2 = async (req, res) => {
    try {
        const recvs = await userDataModel.find({});
        res.json({ success: true, data: recvs });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

module.exports = { router1 , router2};
