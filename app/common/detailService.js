(function () {
  "use strict";
  angular.module('day33Hw')
  .factory('DetailService', function ($http, $rootScope, $log) {

    var url = 'http://tiy-fee-rest.herokuapp.com/collections/tylerngcomments'

    var getComments = function () {
      return $http.get(url);
      // return products;
    };

    var addComment = function (comment) {
      $http.post(url, comment);
      $rootScope.$broadcast('comment: created')
      $log.info("comment: created");

      // products.push(comment);
    }

    var updateComment = function (comment, id) {
      $http.put(url + '/' + id, comment);
      $rootScope.$broadcast('comment: updated')
      $log.info("comment: updated");

      // var selectedComment = comment;
      // console.log(selectedComment);
    }

    var removeComment = function (id) {
      $http.delete(url + '/' + id);
      $rootScope.$broadcast('comment: deleted')
      $log.info("comment: deleted");

      // var index = products.indexOf(comment)
      // products.splice(index, 1);
    }

    var getSingleComment = function (id) {
      console.log('fired!')
      return $http.get(url + '/' + id)
      console.log($http.get(url + '/' + id))
    }


    return {
      getAllComments: getComments,
      addOneComment: addComment,
      updateOneComment: updateComment,
      removeOneComment: removeComment,
      getOneComment: getSingleComment
    };

  });

})();
