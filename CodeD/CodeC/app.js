const express = require("express");
//console.log("express ",typeof express,  " ",express);
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
//console.log("App is ",app);


// Using Middlewares
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');

//     next();
// });

// Routing
app.get('/show/:id/:name',(req,res)=>{
    // Path Parameters
    res.send("id is "+req.params.id+" Name is "+req.params.name);
})

app.get('/json/:key',(req,res)=>{
    console.log("Key is ",req.params.key);
    var key = req.params.key;
    var keys = [10,20,30,40,50,60];
    if(key){
    var index = keys.indexOf(parseInt(req.params.key));
    console.log("Index is ",index," Key ",typeof(key)," Keys ",keys);
    if(index>=0){
    var object = {id:1001,name:'Ram',salary:9999};
    res.json(object);
    }
    else{
        res.json({message:'Invalid Key'});
    }
}
else{
    res.json({message:'No Key Provided'})
}
})

// Post 
app.post('/login',(req,res)=>{
    // QueryString Parameter
   var userid = req.body.userid;
   var pwd = req.body.pwd;
   console.log("USerid ",userid," Pwd ",pwd);
   if(userid==pwd){
       res.send('Welcome '+userid);
   }
   else{
       res.send('Invalid Userid or Password');
   }
   })
// Get request
app.get('/login',(req,res)=>{
 // QueryString Parameter
var userid = req.param('userid');
var pwd = req.param('pwd');
console.log("USerid ",userid," Pwd ",pwd);
if(userid==pwd){
    res.send('Welcome '+userid);
}
else{
    res.send('Invalid Userid or Password');
}
})
app.listen(1234,()=>console.log('Server Start'));