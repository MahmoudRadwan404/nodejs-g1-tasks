const express=require('express')
const app=express()
const mongoose = require('mongoose')
const url="mongodb+srv://mahmoudrdwan:nodejs123@learn-mongo-db.szlqwvz.mongodb.net/codezone?retryWrites=true&w=majority&appName=AtlasApp"

 mongoose.connect(url).then(()=>{
    console.log("mongo works in now")
})

app.use(express.json())//body parser for reading the incoming body
//let {cources}=require("./data/cources")
const courcesrouter=require("./routs/routs")
app.use("/",courcesrouter)//localhost / =>/api/courcesبدل ما اكتب البداية ديه ديما في الاوامؤ انا هثبتها واباصي المختلف منعا للتكرار

////





















app.listen(5000,()=>{
console.log("working...working...working...")
}) 