const express=require("express")
const {loginUser}=require("../controllers/Usecontroller")
const {registerUser}=require("../controllers/Usecontroller")
const userRouter=express.Router()
userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
module.exports={userRouter}