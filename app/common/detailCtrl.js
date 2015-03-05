(function () {
  "use strict";
  angular.module("day33Hw")
  .controller("DetailCtrl", function (DetailService, $scope, $location, $routeParams) {
    var detail = this;

    DetailService.getAllComments().success(function(data) {
      detail.allComments = data;
      // console.log(data)

      // if (data.hasOwnProperty(name)) {
        // detail.allComments = data;
      // }
    })

    // DetailService.getOneComment($routeParams.commentId).then(function(response) {
    //   detail.getSingleProd = response.data;
    //   console.log(response.data)
    // });
    /////////////

    detail.addComment = function (newcomment, prodName) {
      newcomment.name = prodName
      console.log(newcomment)
      DetailService.addOneComment(newcomment);
    }

    detail.updateComment = function (comment, id) {
      DetailService.updateOneComment(comment, id);
    }

    detail.removeComment = function (id) {
      DetailService.removeOneComment(id);
    }

    detail.notFound = "We're sorry, but the page you requested is not found."
  });
})();
