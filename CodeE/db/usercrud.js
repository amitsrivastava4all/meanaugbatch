const User = require("./userschema");
const userOperations ={
    register(userObject,res){
    User.create(userObject,(err)=>{
        if(err){
            res.send("Can't Register Due to Error");
        }
        else{
            res.send("Register SuccessFully");
        }
    })
},
login(userObject,res){
    User.findOne(userObject,(err,doc)=>{
        if(err){
            res.send("Can't Register Due to Error");
        }
        else{
            console.log("doc is ",doc);
            if(doc && doc.userid){
            res.send("Welcome "+doc.userid);
            }
            else{
                res.send('Invalid Userid or Password')
            }
        }
    })
}
}


module.exports = userOperations;
