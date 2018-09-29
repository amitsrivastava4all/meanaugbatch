app.controller("myctrl",($scope,salarydetails)=>{
    console.log("controller Loaded...",salarydetails);
    $scope.hra = 0;
    $scope.da = 0;
   // $scope.salary =0;
    //document.querySelector
    $scope.compute=()=>{
        var salary = $scope.salary;
        salarydetails.takeSalary(salary);
        $scope.hra = salarydetails.hra();
        $scope.da = salarydetails.da();
       $scope.className= $scope.hra>2000?'red':'green';

    }
});