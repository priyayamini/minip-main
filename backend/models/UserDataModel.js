const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
    noOfPeopleC: { type: String, required: true },
    typeOfFood: { type: String, required: true},
    time: { type: String, required: true },
    qualityCheck: { type: Number, required: true }
});

const userDataModel = mongoose.models.userdata || mongoose.model("userdata", userDataSchema);

module.exports = { userDataModel };
