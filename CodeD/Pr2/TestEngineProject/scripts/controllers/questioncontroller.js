
app.controller("questioncontroller",($scope,$firebaseArray)=>{
$scope.question = {};
$scope.message = '';
var questionReference = firebase.database().ref("/questions");
$scope.questions = $firebaseArray(questionReference);
$scope.add=()=>{
$scope.questions.$add($scope.question).then(ref=>$scope.message = 'Question Added...',err=>$scope.message = "Cannot Add a Question Due to Error");

}
})