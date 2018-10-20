app.factory("myfactory",function(){
    var object = {
        add(x=0,y=0){
            return x + y;
        }
    }
    return object;
});