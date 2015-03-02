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


return {
  getAllCart: getCartProducts,
  addOneCart: addCartProduct,
  removeOneCart: removeCartProduct
};

});

})();
