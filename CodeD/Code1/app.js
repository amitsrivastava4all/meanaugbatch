const express = require("express");
//console.log("express ",typeof express,  " ",express);
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const adminRoute = require("./adminroutes");
const userRoute = require("./userroutes");

//console.log("App is ",app);


// Using Middlewares
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use("/",adminRoute);
app.use("/user",userRoute);
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');

//     next();
// });

// Routing


app.listen(1234,()=>console.log('Server Start'));