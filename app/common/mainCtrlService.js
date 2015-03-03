(function () {
  "use strict";
  angular.module('day33Hw')
  .factory('ProductService', function ($http, $rootScope, $log) {

    var url = 'http://tiy-fee-rest.herokuapp.com/collections/tylerngone'

    var getProducts = function () {
      return $http.get(url);
      // return products;
    };

    var addProduct = function (product) {
      $http.post(url, product);
      $rootScope.$broadcast('product: created')
      $log.info("product: created");

      // products.push(product);
    }

    var updateProduct = function (product, id) {
      $http.put(url + '/' + id, product);
      $rootScope.$broadcast('product: updated')
      $log.info("product: updated");

        // var selectedProduct = product;
        // console.log(selectedProduct);
    }

    var removeProduct = function (id) {
      $http.delete(url + '/' + id);
      $rootScope.$broadcast('product: deleted')
      $log.info("product: deleted");

      // var index = products.indexOf(product)
      // products.splice(index, 1);
    }

    var getSingleProduct = function (id) {
      console.log('fired!')
      return $http.get(url + '/' + id)
      console.log($http.get(url + '/' + id))
    }


    return {
      getAllProducts: getProducts,
      addOneProduct: addProduct,
      updateOneProduct: updateProduct,
      removeOneProduct: removeProduct,
      getOneProduct: getSingleProduct
    };

});

})();
