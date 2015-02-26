(function () {
  "use strict";
  angular.module("day33Hw")
    .controller("MainCtrl", function (ProductService, $scope) {
      var main = this;

      main.allProducts = ProductService.getAllProducts();

      main.addProduct = function (newproduct) {
        ProductService.addOneProduct(newproduct);
        $scope.newproduct = {};
      };

      main.notFound = "We're sorry, but the page you requested is not found."
  });
})();
