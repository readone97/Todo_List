//jsint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const date = require(__dirname +"/date.js")

const app = express();
var nxts =[];
var workLists =[];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    let day =date.getDay();

    res.render("list",{listTittle:day,newItems:nxts});
});
app.post("/",function(req,res){
    let nxt= req.body.inptItem;
    nxts.push(nxt);
    res.redirect("/");
}); 
app.get("/work",function(req,res){
    
    res.render("list",{listTittle:"Work List",newItems:workLists});

});
app.post("/work",function(req,res){

    let wrklst= req.body.listTittle;
    workLists.push(wrklst);
    res.redirect("/work");


});


app.listen(3000,function(){
    console.log("agba developer is live on port 3000")
})