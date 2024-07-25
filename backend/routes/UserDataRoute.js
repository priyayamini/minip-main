const express = require("express");
const { router1 } = require("../controllers/UserControllerData.js");
const userDataRouter = express.Router();
const { router2 } = require("../controllers/UserControllerData.js");
userDataRouter.post("/data", router1);
userDataRouter.get("/view",router2);
module.exports = { userDataRouter };
