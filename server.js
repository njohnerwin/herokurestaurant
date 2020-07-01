// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        name: "Nicholas",
        phonenumber: "413-555-9137",
        email: "hodouvan.66@gmail.com",
        uniqueid: "nick",
    }
]



app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.post("/api/reservations", function(req, res) {
    
    var newReservation = req.body;
  
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

