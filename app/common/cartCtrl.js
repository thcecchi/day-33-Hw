(function () {
  "use strict";
  angular.module("day33Hw")
  .controller("CartCtrl", function (ProductCartService, $scope) {
    var cart = this;

    cart.allCartProducts = ProductCartService.getAllCart();

    // cart.total = cart.totalCart();

    cart.addCartProduct = function (product) {
      ProductCartService.addOneCart(product);
      $scope.newproduct = {};
    };

    cart.removeCartProduct = function (product) {
      ProductCartService.removeOneCart(product);
      $scope.newproduct = {};
    }

    cart.totalCart = function () {
      ProductCartService.totalAllCart();
    }

  });
})();
