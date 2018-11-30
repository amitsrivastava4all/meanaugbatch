// Post 
const express = require("express");
//console.log("express ",express.Router);
const routes = express.Router();
routes.post('/login',(req,res)=>{
    // QueryString Parameter
   var userid = req.body.userid;
   var pwd = req.body.pwd;
   console.log("USerid ",userid," Pwd ",pwd);
   if(userid==pwd){
    res.render('dashboard',{"user":userid});  
    // res.send('Welcome '+userid);
   }
   else{
       res.send('Invalid Userid or Password');
   }
   })
// Get request
routes.get('/login',(req,res)=>{
 // QueryString Parameter
var userid = req.param('userid');
var pwd = req.param('pwd');
console.log("USerid ",userid," Pwd ",pwd);
if(userid==pwd){
    res.render('dashboard',{"user":userid});
    //res.send('Welcome '+userid);
}
else{
    res.send('Invalid Userid or Password');
}
})
routes.get('/show',(req,res)=>{
    // Path Parameters
    res.send("<h1>I am Show</h1>");
})

module.exports = routes;