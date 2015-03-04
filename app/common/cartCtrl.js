(function () {
  "use strict";
  angular.module("day33Hw")
  .controller("CartCtrl", function (ProductCartService, $scope) {
    var cart = this;

    ProductCartService.getAllCart().success(function(data) {
      cart.allCartProducts = data;
      console.log(data)
    })

  cart.numTotal = parseInt(cart.price * cart.qty)

    cart.addCartProduct = function (product) {
      ProductCartService.addOneCart(product);
    };

    cart.removeCartProduct = function (id) {
      ProductCartService.removeOneCart(id);
    }

    cart.updateCartProduct = function (product, id) {
      ProductCartService.updateOneCart(product, id);
    }
    //
    // cart.totalCart = function () {
    // //   ProductCartService.totalAllCart();
    // mainCtrl = functio
    //
    // }

  });
})();
