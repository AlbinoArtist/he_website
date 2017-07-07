var app = angular.module('henrikedlund', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/view-home.html",
            controller: "navController"
        })
        .when("/resume", {
            templateUrl: "views/view-resume.html",

        })
        .when("/portfolio", {
            templateUrl: "views/view-portfolio.html",
        })
        .when("/contact", {
            templateUrl: "views/view-contact.html",
        })
        .otherwise({
            redirectTo: "/"
        });

    $locationProvider.html5Mode(true);
});
