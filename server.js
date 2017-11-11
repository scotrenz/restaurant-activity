var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var reservations = [
    {
        name: "",
        phone: "",
        email: "",
        unique_id: ""
    }
];
var waitList = [
    {

    }
]
app.get("/viewtables", function(req,res){

})
app.post("/reservations", function(req, res){
    var newReservation = req.body;
    
    
    console.log(newReservation)
    
    if(reservations.length < 5){
        newReservation.table = reservations.length+1;
        reservations.push(newReservation);
    }else{
        newReservation.waitList_id = waitList.length+1;
        waitList.push(newReservation);
    }
})

