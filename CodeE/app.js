const express = require("express");
const app = express();
app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());
app.post('/reg',(req,res)=>{
    var userid = req.body.userid;
    var password = req.body.pwd;
    //var userObject = {"userid":userid,"password":password};
    var userObject = {userid,password};
    var usercrud = require("./db/usercrud");
    usercrud.register(userObject,res);

})

app.post('/login',(req,res)=>{
    var userid = req.body.userid;
    var password = req.body.pwd;
    //var userObject = {"userid":userid,"password":password};
    var userObject = {userid,password};
    var usercrud = require("./db/usercrud");
    usercrud.login(userObject,res);

})
app.listen(1234,()=>{
    console.log("Server Start...");
})