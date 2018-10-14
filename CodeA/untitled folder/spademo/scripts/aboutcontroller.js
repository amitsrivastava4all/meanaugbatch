app.controller("aboutctrl",function($scope,$routeParams){
$scope.msg = "About "+$routeParams.name+" "+$routeParams.job;
var counter = 1;
$scope.myclass = 'green';
$scope.setClass=function(){
if(counter == 5){
    $scope.myclass = 'red';
}
counter++;
}
});