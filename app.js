var express = require('express');
var app = express();

// add root route
app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment!"); 
});

// add speak route
app.get("/speak/:animal", function(req, res) {
   var animal = req.params.animal;
   res.send(speak(animal));
});

// add repeat route

// add * route

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started...");
});

// add speak function
function speak(animal) {
   var greeting = "";
   if (animal === 'pig') {
       greeting = "'Oink'";
   } else if (animal === 'cow') {
       greeting = "'Moo'";
   } else if (animal === 'dog') {
       greeting = "'Woof Woof!";
   }
   return "The " + animal + " says " + greeting;
}

// add repeat function
