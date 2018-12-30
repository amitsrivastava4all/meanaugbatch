const express = require("express");
const app = express();
const esession = require("express-session");
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','ejs');
app.use(esession({
    secret: 'ucantseeme',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false,maxAge: 60000 }  // 1 min
  }))
var hitCounter =0; 
app.use(bodyParser.json())
app.get('/count',(req,res)=>{
    hitCounter++;
    res.send('COUNT IS '+hitCounter);
})
app.get('/users',(req,res)=>{
     const crud = require("./db/usercrud");
      crud.getUsers(res);
});
    app.get('/profile',(req,res)=>{
        //res.send('Inside Profile '+req.param('uid'));
         const crud = require("./db/usercrud");
         crud.getProfile(req.param('uid'), res);

    })
    app.get('/showprofile',(req,res)=>{
        if(req.session && req.session.uid){
            res.render("showprofile",{"userid":req.session.uid});
        }
        else{
            var path = require("path");
            var fullPath = path.join(__dirname,"public/login.html");
            res.sendFile(fullPath);
        }
    })
app.post('/server',(req,res)=>{
    res.json({data:["Shoes", "Mobiles","Shirts","LED"]});
})
app.post("/login",(req,res)=>{
    //res.send('Rec Userid '+req.body.userid+' Password '+req.body.password);
    const crud = require("./db/usercrud");
    var userObject = {"userid":req.body.userid,"password":req.body.password};
    crud.login(userObject,res,req);    
})
app.post('/reg',(req,res)=>{
var userid = req.body.userid;
var pwd = req.body.pwd;
//res.send('Userid is '+userid+' Password is '+pwd);
var userObject = {"userid":userid,"password":pwd};
const crud = require("./db/usercrud");
crud.register(userObject,res);
})
app.listen(1234,()=>{
    console.log("Server Start....");
})
