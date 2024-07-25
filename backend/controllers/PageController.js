const foodModel = require("../models/FoodModel.js");
const fs = require('fs');

const router1 = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        noOfPeople: req.body.noOfPeople,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Receiver Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const listRecievers = async (req, res) => {
    try {
        const recvs = await foodModel.find({});
        res.json({ success: true, data: recvs });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};
const removeRecievers=async(req,res)=>{
try{
    const food=await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Reciever Removed"})
}
catch(error)
{
    console.log(error);
    res.json({success:false,message:"error"})
}
}
module.exports = { router1, listRecievers,removeRecievers};
