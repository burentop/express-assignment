var express = require('express');
var app = express();

// add root route
app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment!"); 
});

// add speak route

// add repeat route

// add * route

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started...");
});

// add speak function

// add repeat function
