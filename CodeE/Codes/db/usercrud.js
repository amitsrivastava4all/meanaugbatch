const User = require("./userschema");
const userOperations ={
    getProfile(uid,res){
         User.findOne({"userid":uid},(err,doc)=>{
            if(err){
                res.send('Error')
            }
            else
             if(doc){
                 res.render('profile',{"userid":doc.userid,"pwd":doc.password});
             }   
        })    
    },
    getUsers(res){
        User.find({},(err,docs)=>{
            if(err){
                res.send('Error')
            }
            else
             if(docs && docs.length>0){
                 res.render('showusers',{"users":docs});
             }   
        })
    },
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
                res.render('admin',{"user":userObject.userid});
            //res.json({data:'Welcome..... '+doc.userid});
                //res.send("Welcome "+doc.userid);
            }
            else{
                 res.render('home');
                //res.json({data:'Invalid Userid or Password..... '});
                //res.send('Invalid Userid or Password')
            }
        }
    })
}
}


module.exports = userOperations;
