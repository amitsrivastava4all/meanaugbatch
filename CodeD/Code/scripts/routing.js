app.config(($routeProvider,$locationProvider,HOME,LOGIN,REGISTER,CONTACTUS,ADDQUESTION,ADDGROUP,TAKETEST,ASSIGNTEST)=>{
    $locationProvider.hashPrefix('');
    $routeProvider.when(HOME,{
        templateUrl:'views/home.html'
    }).when(LOGIN,{
        templateUrl:'views/login.html'
    }).when(REGISTER,{
        templateUrl:'views/register.html'
    }).when(CONTACTUS,{
        templateUrl:'views/contactus.html'
    }).when(ADDQUESTION,{
        templateUrl:'views/addquestion.html'
    }).when(ADDGROUP,{
        templateUrl:'views/addgroup.html'
    })
    .when(ASSIGNTEST,{
        templateUrl:'views/assigntest.html'
    })
    
    .when(TAKETEST,{
        templateUrl:'views/taketest.html'
    })
    
    .otherwise({template:'Invalid URL'})
})