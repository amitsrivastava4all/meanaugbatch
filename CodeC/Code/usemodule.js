const fs = require("fs");
fs.readFile("first.js",(error,content)=>{
if(error){
    console.log("Can't Read First File ",error);
}
else{
    console.log("First File "+content);
}
});
fs.readFile("second.js",(error,content)=>{
    if(error){
        console.log("Can't Read Second File ",error);
    }
    else{
        console.log("Second File "+content);
    }
});
var x=100;
var y = 200;
var z = x + y;
console.log("Sum is ",z);