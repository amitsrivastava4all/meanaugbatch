app.config(($routeProvider,$locationProvider,HOME,LOGIN,REGISTER,CONTACTUS)=>{
    $locationProvider.hashPrefix('');
    $routeProvider.when(HOME,{
        templateUrl:'views/home.html'
    }).when(LOGIN,{
        templateUrl:'views/login.html'
    }).when(REGISTER,{
        templateUrl:'views/register.html'
    }).when(CONTACTUS,{
        templateUrl:'views/contactus.html'
    }).otherwise({template:'Invalid URL'})
})