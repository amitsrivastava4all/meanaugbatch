app.controller("usercontroller",($scope,$firebaseArray,$firebaseObject,roleservice)=>{
$scope.user = {};
$scope.message = "";
$scope.students=[];
var userReference = firebase.database().ref("/users");
var userGroupReference = firebase.database().ref("/group");
$scope.users = $firebaseArray(userReference);
$scope.group = $firebaseArray(userGroupReference);
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

$scope.addGroup=()=>{

    for(let student of $scope.students){
        if(student.isSelected){
            $scope.group.$add({
                groupname:$scope.groupname,
                userid :student.userid  
            }).then(ref=>$scope.message = 'Group Added...',err=>$scope.message = "Cannot Add a Group Due to Error");
        }
    }

}
$scope.selectAll=()=>{
    for(let student of $scope.students){
        student.isSelected  = !student.isSelected;
        console.log("Student ",student);
    }
}
$scope.getAllUsers=()=>{
    var studentUsers = [];
    for(let user in $scope.users){
        var userObject  = $scope.users[user];
        console.log("userObject ",userObject);
        if(userObject.role && userObject.role=='S'){
            userObject.isSelected  = false;
            studentUsers.push(userObject);
        }
    }
    $scope.students = studentUsers;
    
}
$scope.getAllUsers();
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
                console.log("Object is ::",object);
                isFound = true;
                if(object.password == $scope.user.pwd){
                   var role = object.role=="S"?"Student":"Teacher";
                    $scope.message = "Welcome User "+$scope.user.userid+" Role "+role;
                    var currentRole = roleservice[object.role];
                    localStorage.userid = $scope.user.userid;
                    $scope.$emit("loadroutes",currentRole);
                }
                else{
                    isFound = false;
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