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
        .when('/detail/:productId', {
          templateUrl: 'common/views/detail.html',
          controller: 'MainCtrl as main'
        })
        .when('/cart', {
          templateUrl: "common/views/cart.html",
          controller: "CartCtrl as cart"
        })
        .when('/not-found', {
          templateUrl: "common/views/not-found.html"
        })
        .otherwise({
          redirectTo: '/not-found'
        });
    });

    // .constant('_', _); //infusing underscore library

    app.run(function ( ) {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("day33Hw", [
    'ngRoute',
    'ui.bootstrap'
])));
