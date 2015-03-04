(function () {
  "use strict";
  angular.module("day33Hw")
  .controller("DetailCtrl", function (DetailService, $scope, $location, $routeParams) {
    var detail = this;

    // main.allProducts = ProductService.getAllProducts();
    DetailService.getAllComments().success(function(data) {
      detail.allComments = data;
      console.log(data)
    })

    // DetailService.getOneComment($routeParams.commentId).then(function(response) {
    //   detail.getSingleProd = response.data;
    //   console.log(response.data)
    // });
    /////////////

    detail.addComment = function (newcomment) {
      DetailService.addOneComment(newcomment);
      // $scope.newcomment = {};
    }

    detail.updateComment = function (comment, id) {
      DetailService.updateOneComment(comment, id);
      // $scope.newcomment = {};
    }

    detail.removeComment = function (id) {
      DetailService.removeOneComment(id);
      // $scope.newcomment = {};
    }

    detail.notFound = "We're sorry, but the page you requested is not found."
  });
})();
