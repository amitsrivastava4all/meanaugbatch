
app.controller("questioncontroller",($scope,$firebaseArray)=>{
$scope.question = {};
$scope.showTest= false;
$scope.scoreCard = false;
$scope.testQuestions = [];
$scope.totalScore = 0;
$scope.message = '';
var index = 0;
var questionReference = firebase.database().ref("/questions");
var testGroupReference = firebase.database().ref("/testgroupassign");
var groupReference = firebase.database().ref("/group");
var testGroupArray = $firebaseArray(testGroupReference);
var groupArray = $firebaseArray(groupReference);
$scope.questions = $firebaseArray(questionReference);
$scope.add=()=>{
$scope.questions.$add($scope.question).then(ref=>$scope.message = 'Question Added...',err=>$scope.message = "Cannot Add a Question Due to Error");

}
$scope.finish=()=>{
    $scope.scoreCard = true;
    let total =0;
    for(let question of $scope.testQuestions){
        if(question.rightans==question.yourAns){
            total +=parseInt(question.score);
        }
    }
    $scope.totalScore = total;
}
$scope.storeAns=(questionObject,ans)=>{
    questionObject.yourAns = ans;
    console.log("Your Ans is ",questionObject);
}
$scope.prev=()=>{
    if(index>0){
        index--;
        $scope.printQuestion(index);
    }
   
}
$scope.next=()=>{
    if(index<$scope.questions.length-1){
        index++;
        $scope.printQuestion(index);
    }
}
$scope.printQuestion =(index)=>{
    if(index<$scope.testQuestions.length){
        $scope.questionObject  = $scope.testQuestions[index];
        $scope.question = $scope.testQuestions[index].name;
        $scope.optiona = $scope.testQuestions[index].optiona;
        $scope.optionb = $scope.testQuestions[index].optionb;
        $scope.optionc = $scope.testQuestions[index].optionc;
        $scope.optiond = $scope.testQuestions[index].optiond;
        

    }
}
$scope.startTest = (currentTest)=>{
    alert("test is "+currentTest);
    $scope.showTest=true;
    $scope.questions.$loaded(data=>{
        for(let key in data){
            if(data[key].testname==currentTest){
                $scope.testQuestions.push(data[key]);
            }
        }
        if($scope.testQuestions.length>0){
        $scope.printQuestion(0);
        }
        console.log("Test ",$scope.testQuestions);
    });

    
    
}
$scope.getTest=()=>{
    $scope.userid = localStorage.userid;
    var groups = [];
    
    let groupName = '';
    groupArray.$loaded(data=>{
        for(let key in data){
            if(data[key].userid == localStorage.userid){
                groupName = data[key].groupname;
                console.log("Group Name is ",groupName)
                groups.push(groupName);
                
            }
        }
        // Test Code
        var tests=[];
        for(let group of groups){
            testGroupArray.$loaded(data=>{
                for(let key in data){
                    if(data[key].group == group){
                        tests.push(data[key].test);
                    }
                }
            })
           
          
        }
        console.log("Groups Contains ",groups);
    $scope.groups = groups;
   
    console.log("Groups are ",groups);
   
    $scope.tests  = tests;

    });
    
    }
    $scope.getTest();
});