(function () {
  "use strict";
  angular.module('day33Hw')
  .factory('ProductCartService', function ($http, $rootScope, $log) {
//     var productsCart = [
//
// ];

var cartUrl = 'http://tiy-fee-rest.herokuapp.com/collections/tylerngfour'

var getCartProducts = function () {
  return $http.get(cartUrl);
};

var addCartProduct = function (product) {
  $http.post(cartUrl, product);
  $rootScope.$broadcast('product: created')
  $log.info("product: created");
}

var removeCartProduct = function (id) {
  $http.delete(cartUrl + '/' + id);
  $rootScope.$broadcast('product: deleted')
  $log.info("product: deleted");
  console.log(cartUrl + '/' + id)
}

var updateCartProduct = function (product, id) {
  $http.put(cartUrl + '/' + id, product);
  $rootScope.$broadcast('product: updated')
  $log.info("product: updated");
}

var getSingleProduct = function (id) {
  console.log('fired!')
  return $http.get(cartUrl + '/' + id)
  console.log($http.get(cartUrl + '/' + id))
}

// ///////////////////////////////
// CART TOTALS
// ///////////////////////////////

// var cartTotal = function() {
//   var total = 0;
//   getCartProducts().success(function(item) {
//     console.log(item);
//     for (var i = 0; i < item.length; i++) {
//       total += (item[i].price * item[i].qty);
//     };
//     var numTotal = parseInt(total)
//     console.log(numTotal);
//   });
//   return numtotal
//  }
// }


return {
  getAllCart: getCartProducts,
  addOneCart: addCartProduct,
  removeOneCart: removeCartProduct,
  updateOneCart: updateCartProduct
  // totalAllCart: cartTotal
};

});

})();
