const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const pageRouter = require('./controllers/PageController'); 
const router = require("./routes/Rroute.js");
const { userRouter } = require("./routes/Userroutes.js");
const dotenv = require('dotenv');
const { recieverRouter } = require("./routes/RecieverRoute.js");
const { userDataRouter } = require("./routes/UserDataRoute.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Use the imported routers
app.use('/api/food', router);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/reciever", recieverRouter);
app.use("/api/userdata", userDataRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
