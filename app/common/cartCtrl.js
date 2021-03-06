(function () {
  "use strict";
  angular.module("day33Hw")
  .controller("CartCtrl", function (ProductCartService, $scope) {
    var cart = this;

    ProductCartService.getAllCart().success(function(data) {
      cart.allCartProducts = data;
      console.log(data)

        var totalArr = []
        for (var i = 0; i < cart.allCartProducts.length; i++) {
          var numPrice = cart.allCartProducts[i].price
          var numQty = cart.allCartProducts[i].qty
          var thisNum = numPrice * numQty
          totalArr.push(thisNum)

          var total = totalArr.reduce(function(a, b) {
            return a + b;
          });
          cart.cartTotal = total
        }

        if(cart.allCartProducts.length == 0) {
          $('.cartContainer').append(document.createTextNode('You Have nothing In Your Cart'))
        }

      })


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
