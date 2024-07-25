const express = require('express');
const {router1} = require('../controllers/PageController');
const {listRecievers} = require('../controllers/PageController');
const {removeRecievers} = require('../controllers/PageController');
const multer = require('multer');
const router=express.Router();
//Image storage Engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>
    {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload=multer({storage:storage})
router.post("/add",upload.single("image"),router1)
router.get("/list",listRecievers)
router.post("/remove",removeRecievers)
module.exports = router;