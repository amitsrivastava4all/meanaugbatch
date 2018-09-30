app.controller("myctrl",($scope,myfactory)=>{
    var buttons = myfactory.fillArray();
    $scope.buttons = buttons;
    $scope.printXorZero=(position)=>{
        var gameOver = myfactory.updateButton(position);
        if(gameOver){
            $scope.gameOver = gameOver;
        }
    }
})