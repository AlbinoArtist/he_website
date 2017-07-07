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