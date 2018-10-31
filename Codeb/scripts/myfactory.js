app.factory("myfactory",function(){
    var object = {
        add(x=0,y=0){
            
            console.log("X is "+x);
            return x + y;
        }
    }
    return object;
});