app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
$routeProvider.when('/',{templateUrl:'views/home.html',controller:'homectrl'})
.when('/about/:name/:job',{templateUrl:'views/about.html',controller:'aboutctrl'})
.when('/news',{templateUrl:'views/news.html'})
.when('/contactus',{template:'<p>Contact Us</p>'})
.otherwise({template:'No Page Found'})
})