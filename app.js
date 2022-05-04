const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

var items = ["buy food", "cook food", "eat food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", function(req, res){
    var today = new Date();
    var day ="";

    var options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)

    res.render("list", {kindOfDay : day, addItem : items})
});


app.post("/", function(req, res){

    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");
});









app.listen("3000", function(){
    console.log("Server is up and running at port 3000");
})