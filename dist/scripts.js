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

app.controller("navController", ["$scope", "$location", "$routeParams", "$interval", "$window",
    function ($scope, $location, $routeParams, $interval, $window) {
        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.isNavCollapsed = true;


        $scope.closeNav = function () {
            if ($scope.isNavCollapsed == false) {
                $scope.isNavCollapsed = true;
            }
        };

    }
]);
app.directive('animateText', function ($interval) {
    function link(scope, element, attrs) {
        var fullTextLength = scope.inputText.length;
        var fullText = scope.inputText;
        var currentLength = 0;

        function animateText() {

            $interval(function () {
                    if (currentLength <= fullTextLength) {
                        scope.inputText = fullText.substr(0, currentLength);
                        currentLength++;
                    } else {
                        $interval.cancel();
                    }

                },
                70);
        };
        animateText();
    };

    return {

        link: link,
        scope: {
            inputText: '@'
        },
        template: '<span id="logotext" data-ng-bind="inputText" ></span><span class="typed-cursor">|</span>'
    };
});