var express = require('express');
var app = express();

// add root route
app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment!"); 
});

// add speak route
app.get("/speak/:animal", function(req, res) {
   var sounds = {
       pig: "Oink", 
       cow: "Moo",
       dog: "Woof Woof!"
   }
   var animal = req.params.animal.toLowerCase();
   var sound = sounds[animal];
   res.send("The " + animal + " says '" + sound + "'");
});

// add repeat route
app.get("/repeat/:saying/:count", function(req, res) {
   var saying = req.params.saying;
   var count = Number(req.params.count); 
   res.send(repeat(saying, count));
});

// add * route
app.get("*", function(req, res) {
    res.send("Sorry, page note found...What are you doing with your life?");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started...");
});

// add repeat function
function repeat(saying, count) {
    var result = "";
    for (var i = 0; i < count; i++) {
        result = result + saying + " ";
    }
    return result;
}
