// RecieverModel.js

const mongoose = require('mongoose');

const recieverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const RecieverModel = mongoose.models.reciever || mongoose.model('reciever', recieverSchema);

module.exports = RecieverModel;
