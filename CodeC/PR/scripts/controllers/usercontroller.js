app.controller("usercontroller",($scope,$firebaseArray,$firebaseObject)=>{
$scope.user = {};
$scope.message = "";
var userReference = firebase.database().ref("/users");
$scope.users = $firebaseArray(userReference);
$scope.register=()=>{
//console.log("Register Called ",$scope.user);
$scope.users.$add({
    userid:$scope.user.userid,
    password:$scope.user.pwd,
    role:$scope.user.role

}).then(ref=>{
$scope.message = "Register SuccessFully "+ref.key;
},err=>{
$scope.message = "Error During Register";
console.log("Error is ",error);
})


}
$scope.login=()=>{
    $scope.message = "";
    console.log("User Object is ",$scope.user);
    var userObject = userReference.orderByChild("userid").equalTo($scope.user.userid);
    var obj = $firebaseObject(userObject);
    obj.$loaded().then(data=>{
        console.log("data is ",data);
        var isFound =false;
        var object = {};
        for(let key in data){
            if(typeof(key)==='string' && key.startsWith("-L")){
                var object = data[key];
                console.log("Object is ",object);
                isFound = true;
                if(object.password == $scope.user.pwd){
                   var role = object.role=="S"?"Student":"Teacher";
                    $scope.message = "Welcome User "+$scope.user.userid+" Role "+role;
                }
                break;
            }
        }
        if(!isFound){
            $scope.message="Invalid Userid or Password";
        }
    },err=>{
        console.log("Error is ",err);
    })
    
    
}
})