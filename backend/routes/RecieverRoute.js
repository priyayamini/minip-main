const express=require("express")
const {loginReciever}=require("../controllers/RecieverController")
const {registerReciever}=require("../controllers/RecieverController")
const recieverRouter=express.Router()
recieverRouter.post("/register",registerReciever)
recieverRouter.post("/login",loginReciever)
module.exports={recieverRouter}