var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campgrounds = [
{name: "Salmon Fish", image: "http://www.photosforclass.com/download/6042217185"},
{name: "Salmon Fish", image: "http://www.photosforclass.com/download/6042217185"},
{name: "Salmon Fish", image: "http://www.photosforclass.com/download/6042217185"},
{name: "Cude Rest", image: "http://www.photosforclass.com/download/5641024448"},
{name: "Cude Rest", image: "http://www.photosforclass.com/download/5641024448"},
{name: "Cude Rest", image: "http://www.photosforclass.com/download/5641024448"},
{name: "Cude Rest", image: "http://www.photosforclass.com/download/5641024448"},
{name: "Mountain Goat", image: "http://www.photosforclass.com/download/321487195"},
{name: "Mountain Goat", image: "http://www.photosforclass.com/download/321487195"}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
    //get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampGround = {name: name, image:image};
    campgrounds.push(newCampGround);
    //redirect bacj to campgrounds
    res.redirect("/campgrounds");
});
app.get("/campgrounds/new", function (req,res){
    res.render("new");
});

app.listen(3000, "localhost", function(){
    console.log("yelp camp has started")
});

