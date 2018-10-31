app.controller("myctrl",function($scope,myfactory){
    $scope.addition = function(x,y){
       //$scope.result =  $scope.firstNumber + $scope.secondNumber;
    $scope.result = myfactory.add(x,y);
    }
})