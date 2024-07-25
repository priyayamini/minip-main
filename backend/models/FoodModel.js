const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    noOfPeople: { type: Number, required: true },
    phoneNumber: { type: Number, required: true },
    address: { type: String, required: true },
    image: { type: String, required: true }
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

module.exports = foodModel;
