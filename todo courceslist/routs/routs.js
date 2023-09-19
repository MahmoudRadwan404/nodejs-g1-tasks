const express=require('express')
const app=express()
app.use(express.json())
const {body,validationResult}=require('express-validator')//middleware
const router=express.Router()
const courcescont=require("../controllers/courcescontroller")

router.get("/api/cources", courcescont.getallcources)


router.get("/api/cources/:courceId", courcescont.getcourse)

router.post("/api/cources",body('title').notEmpty().isLength({min:2}) ,courcescont.addcourse)


router.patch('/api/cources/:courceId',courcescont.updatecourse)

router.delete('/api/cources/:courceId',courcescont.deletecourse)
////m
module.exports = router;