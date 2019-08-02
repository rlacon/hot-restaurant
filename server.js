var express = require("express");
var path = require("path");


var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
    name: "Matt",
    phone: 2158675309,
    email: "pineapple@gmail.com",
    uniqueID: "Matt Party Dague"
},
];

var waitList = [
    {
        name: "Jess",
        phone: 2158675300,
        email: "pineapple2@gmail.com",
        uniqueID: "Jess Party Finlayson"
    }
]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res){
    return res.json(tables)
});

app.get("/api/waitList", function(req, res){
    return res.json(waitList)
});
/////////////////////////////////////////

app.post("/api/tables", function(req, res) {
    var newTable = req.body;
    console.log(newTable);
    if( tables.length < 5 ){
    tables.push(newTable);
    res.json(newTable);
    console.log("You may now be seated!")
    }
    else {
      waitList.push(newTable);
      res.json(newTable)
      console.log("Its gonna be a minute...")
    }
  });

////////////////////////////////////////////

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
