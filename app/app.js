(function(app) {

    app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "common/views/main.html",
          controller: "MainCtrl as main"
        })
        .when('/admin', {
          templateUrl: "common/views/admin.html",
          controller: "MainCtrl as main"
        })
        .when('/not-found', {
          templateUrl: "common/views/not-found.html"
        })
        .otherwise({
          redirectTo: '/not-found'
        });
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("day33Hw", [
    'ngRoute',
])));
