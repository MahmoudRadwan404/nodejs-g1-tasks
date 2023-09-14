function index(req,res){
//res.send("<h1>hallo from controller</h1>")
res.render("pages/index.ejs")//render when something inside views
}

function about(req,res){
    res.render("pages/about.ejs")
    }

    function contact(req,res){
        res.render("pages/contact.ejs")
        }
        
module.exports ={index,about,contact
};