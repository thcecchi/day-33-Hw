(function () {
  "use strict";
  angular.module('day33Hw')
  .factory('ProductService', function () {
    var products = [
      {
        name: "Product 1",
        photo: "http://www.placecage.com/100/100",
        price: "$100"
      },
      {
        name: "Product 2",
        photo: "http://www.placecage.com/100/100",
        price: "$100"
      },
      {
        name: "Product 3",
        photo: "http://www.placecage.com/100/100",
        price: "$100"
      },
      {
        name: "Product 4",
        photo: "http://www.placecage.com/100/100",
        price: "$100"
      }
    ];

var getProducts = function () {
  return products;
};

var addProduct = function (product) {
  products.push(product);
}

return {
  getAllProducts: getProducts,
  addOneProduct: addProduct
};
});

})();
