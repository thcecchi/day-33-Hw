(function () {
  "use strict";
  angular.module('day33Hw')
  .factory('ProductCartService', function () {
    var productsCart = [

];

var getCartProducts = function () {
  return productsCart;
};

var addCartProduct = function (product) {
  productsCart.push(product);
}

var removeCartProduct = function (product) {
  var index = productsCart.indexOf(product)
  productsCart.splice(index, 1);
}

// var updateProduct = function (product) {
//   var selectedProduct = product;
//   console.log(selectedProduct);
// }

var cartTotal = function() {
  var total = 0;
  angular.forEach(productsCart, function(item) {
    total += item.qty * item.price;
  })

  return parseInt(total);
}


return {
  getAllCart: getCartProducts,
  addOneCart: addCartProduct,
  removeOneCart: removeCartProduct,
  totalAllCart: cartTotal
};

});

})();
