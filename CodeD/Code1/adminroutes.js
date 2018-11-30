const express = require("express");
//console.log("express ",express.Router);
const routes = express.Router();
//console.log("Routes ",routes);
// routes.get('/show/:id/:name',(req,res)=>{
//     // Path Parameters
//     res.send("id is "+req.params.id+" Name is "+req.params.name);
// })
routes.get('/show',(req,res)=>{
    // Path Parameters
    res.send("id is "+req.params.id+" Name is "+req.params.name);
})

routes.get('/json/:key',(req,res)=>{
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

module.exports = routes;
