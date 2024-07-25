const RecieverModel = require('../models/RecieverModel');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerReciever = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const exists = await RecieverModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: 'User already exists' });
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please enter a valid email' });
        }

        // Save password as plain text (NOT RECOMMENDED)
        const newReciever = new RecieverModel({
            name,
            email,
            password // Plain text password (insecure)
        });
        const reciever = await newReciever.save();
        const token = createToken(reciever._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Error' });
    }
};

const loginReciever = async (req, res) => {
    const { email, password } = req.body;
    try {
        const reciever = await RecieverModel.findOne({ email });
        if (!reciever) {
            return res.json({ success: false, message: 'User does not exist' });
        }

        // Compare plain text password (insecure)
        if (password !== reciever.password) {
            return res.json({ success: false, message: 'Invalid credentials' });
        }

        const token = createToken(reciever._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Error' });
    }
};

module.exports = {
    registerReciever,
    loginReciever
};
