'use strict';

app.controller('LoginController',
    function ($scope, $rootScope, $location, authService, notifyService) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notifyService.showInfo("Login successful");
                    $location.path("/user/ads");
                    console.log(userData);
                },
                function error(err) {
                    notifyService.showError("Login failed", err);
                }
            );
        };
    }
);
