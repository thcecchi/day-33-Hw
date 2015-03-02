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

      main.updateProduct = function (product) {
        ProductService.updateOneProduct(product);
        $scope.newproduct = {};
      }

      main.removeProduct = function (product) {
        ProductService.removeOneProduct(product);
        $scope.newproduct = {};
      }

      main.flipCard = function() {
        var myEl = angular.element( ( '.flipper' ) );
        myEl.addClass('doFlip');
      }

      main.unflipCard = function() {
        var myEl = angular.element( ( '.flipper' ) );
        myEl.removeClass('doFlip');
      }


      main.notFound = "We're sorry, but the page you requested is not found."
  });
})();
