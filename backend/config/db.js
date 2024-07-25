const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect('mongodb+srv://yaminipriya123:Happy12345@cluster0.enyj1ig.mongodb.net/minip')
    .then(() => console.log("DB connected"))
    .catch(err => console.log("DB connection error:", err));
};

module.exports = { connectDB };
