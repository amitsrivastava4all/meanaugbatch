function callMeBack(error, data){
    console.log("Data is "+data);
}

var fs = require("fs");
console.log("I am Before File Reading....");
//fs.readFile("eventloop.js",callMeBack);
var data  = fs.readFileSync("eventloop.js");
console.log("Data  is Now "+data);
console.log("I am After File Reading...");
var a  =100;
var b = 200;
var c = a + b;
console.log("sum is "+c);