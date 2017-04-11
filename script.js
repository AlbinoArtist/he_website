var app = angular.module('henrikedlund', ['ngRoute', 'ngAnimate', 'ui.bootstrap','angularjs-gauge']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/",
        {
            templateUrl: "views/view-home.html",
            controller: "navController"
        })
        .when("/resume",
        {
            templateUrl: "views/view-resume.html",
            controller: "navController",
            
        })
        .when("/portfolio",
        {
            templateUrl: "views/view-portfolio.html",
            controller: "navController"
        })
        .when("/contact",
        {
            templateUrl: "views/view-contact.html",
            controller: "navController"
        })
        .otherwise(
        {
            redirectTo: "/"
        });

    $locationProvider.html5Mode(true);
});

app.controller("navController", ["$scope", "$location", "$routeParams",
    function ($scope, $location, $routeParams) {
        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.isNavCollapsed = true;

        $scope.closeNav = function(){
            if($scope.isNavCollapsed == false){
                $scope.isNavCollapsed = true;
            }
        };

        $scope.bgClass = function(){
            var background = "notworking";
            switch($location.path()){
                case "/":
                    background = "bg-main";
                    break;
                case "/portfolio":
                    background = "bg-portfolio";
                    break;
                case "/resume":
                    background = "bg-resume";
                    break;
                case "/contact":
                    background = "bg-contact";
                    break;
            }
            return background;

        };



    }]);
