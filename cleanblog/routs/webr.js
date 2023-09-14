const express=require('express'),
router=express.Router(),
maincontroller=require("../app/controllers/mainController");


module.exports=router


//app router
router.get("/",maincontroller.index)
router.get("/about",maincontroller.about)
router.get("/contact",maincontroller.contact)