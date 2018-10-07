app.controller("myctrl",['$scope','myfactory',(scope,factory)=>{
    scope.item = {};
    scope.items = [];
    scope.markCount = 0;
    scope.add=()=>{
        //console.log("Add ",scope.item);
        var items = factory.add(scope.item);
        scope.items = items;
    }
    scope.load=()=>{
        if(localStorage){
            if(localStorage.items){
                factory.items = JSON.parse(localStorage.items);
                scope.items = factory.items;
            }
            else{
                alert("No Data to Load...");
            }
        }
        else{
            alert("No LocalStorage...")
        }
    }
    scope.save=()=>{
        if(localStorage){
          localStorage.items = JSON.stringify(factory.items);  
            alert("Saved..");
        }
        else{
            alert("Can't Save");
        }
    }
    scope.mark = (id)=>{
        factory.mark(id);
        scope.markCount = factory.countMark();
    }
}]);