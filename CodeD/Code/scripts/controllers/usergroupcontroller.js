
app.controller("usergroupcontroller",($scope,usergroupservice,$firebaseArray)=>{
    var testGroupReference = firebase.database().ref("/testgroupassign");
    var dbopr = $firebaseArray(testGroupReference);
    $scope.message = '';
    $scope.add=()=>{
        dbopr.$add({
            group:$scope.group,
            test:$scope.test,
            
        
        }).then(ref=>{
        $scope.message = "test assign ";
        },err=>{
        $scope.message = "Error During Test assign";
        console.log("Error is ",error);
        })
    }
    $scope.distinctTest = [];
    $scope.distinctGroup = [];
    var currentTest= '';
    var currentGroup= '';
    var tests = usergroupservice.getTest();
   tests.$loaded(data=>{
       console.log("Data is ***** ",data);
       for(let key in data){
        currentTest = data[key].testname;
           if(currentTest){
               if($scope.distinctTest.filter(test=>test==currentTest).length==0){
                $scope.distinctTest.push(currentTest);
               }
           }
       }
   },err=>console.log("Error is ",err));
    var groups = usergroupservice.getGroups();
    groups.$loaded(data=>{
        console.log("GData is ***** ",data);
        for(let key in data){
            currentGroup = data[key].groupname;
            if(currentGroup){
                if($scope.distinctGroup.filter(group=>group==currentGroup).length==0){
                 $scope.distinctGroup.push(currentGroup);
                }
            }
        }
    },err=>console.log("Error is ",err));
    console.log("tests ",tests);
    console.log("Groups ",groups);
    groups.$loaded(data=>console.log("GData is ***** ",data),err=>console.log("Error is ",err));

})