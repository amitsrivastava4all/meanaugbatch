app.controller("myctrl",['$scope','myfactory',(scope,factory)=>{
    scope.item = {};
    scope.items = [];
    scope.add=()=>{
        //console.log("Add ",scope.item);
        var items = factory.add(scope.item);
        scope.items = items;
    }
}]);