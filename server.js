var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = []

var waitList = []

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/new/reservation", function (req, res) {
    var newReservation = req.body;

    if (reservations.length < 5) {
        reservations.push(newReservation)
    } else {
        waitList.push(newReservation)
    }

    res.send('complete')

    console.log(reservations)
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });