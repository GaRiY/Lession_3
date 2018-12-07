/*var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hello world");
});

app.listen(3000, function(){
    console.log("Example is running on port 3000");
});

var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello world</h1>");
});

app.get("/google",function(req,res){
    res.redirect("https://www.google.com/");
});

app.get("/google/:search",function(req,res){
    var s = req.params.search;
    res.redirect("https://www.google.com/search?q=" + s);
});

app.get("/:name/:Sname",function(req,res){
    var n = req.params.name;
    var sn = req.params.Sname;
    res.send("<h1>Hello " + sn + " " + n + "</h1>");
});

app.get("/*",function(req,res){
    res.send("error 404");
});

app.listen(3000, function(){
    console.log("Example is running on port 3000");
})*/

var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
