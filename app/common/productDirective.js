(function () {
  "use strict";
  angular.module("day33Hw")
    .directive("prodDirective", function () {

      return {
        restrict: 'E', ///E = element, A = attribute, C = class
        templateUrl: 'common/views/productDirective.html',
        transclude: false,
        scope: {
          name: '@', // @ = data can come in, = means that data is 2-way, & = express or function
          photo: '@',
          price: '@',
          qty: '@',
          // _.id: '@'
        }
        // link: function (scope, element, attributes) {
        //   console.log(scope)
        //   element.on('click', function (e) {
        //     e.preventDefault
        //     element.css('color','tomato')
        //     element.append('<h2>Sweet!</h2>')
        //   })
        // }
      };

  });
})();
