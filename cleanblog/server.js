//synchrons doesnt have call back
//39
/*const http=require('http');
const fs=require('fs');
const page=fs.readFileSync("./views/index.html")
const server=http.createServer(function(req, res){
/**
 * عشان تقرا ملف 
 * html 
 * او css
 * او javascript
 * هتحتاج تقراه من فاريابل بيقرا الملف من الفايل سستم
 * وكل ملف بيحصل فيه الحوار ده 
 * وده اسمه راوتنج
 * فعشان كدا بستخدم اكسبرس
 * 
 *//*
   console.log(req.url);
   if(req.url=='/'){
    res.write(page)
   }
   else if(req.url=="/mahmoud"){
    res.write("<h1>link</h1>"+"\n"+req.url)
   }
   else {
    res.write("<h1>404</h1>")
   }
res.end() 

}) 
//31
server.listen(5000,'localhost',()=>{
    console.log("listening on port 5000")

})*/

/////////////////////////////
const express=require('express');
const app=express();
app.use(require("./routs/webr"));//to use filles in views without creating file system for each file
//set view engine
app.set('view engine', 'ejs');
app.use(express.static("./app/public"))

///////////////////////////////////////////////////////////////////////
/*app.use((req,res,next)=>{           //middleware for moving between each get request insted of 
console.log("method:",req.method,"URL:",req.url)//show request method and request url for each route(get request)
next();
})

app.get('/about',(req,res)=>{
  //before use app.use: console.log("method:",req.method,"URL:",req.url)
res.send("Welcome to about! -------");//print on the screan
})
app.get('/sample',(req,res)=>{
// before use app.use: console.log("method:",req.method,"URL:",req.url)
res.send("Welcome to sample*****");//print on the screan
})
*/
app.listen(5000,()=>{
  console.log("listening on port 5000")
})


/*
middleware in express docs
margan tool used for middleware
lec4
*/









