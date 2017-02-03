;(function() {

  'use strict';

angular.module('promo', ['rzModule', 'angular-progress-arc']);

angular.module('promo')
  .filter('keepLimit', function() {

    return function(value, minValue, maxValue) {
      var value = value;
      var valMin = 0.99;
      var valMax = 49.99;

      if (isNaN(value) || value < valMin) {
        return valMin;
      // } else if (value > valMax ) {
      //   return valMax;
      } else {
        return value;
      }
    }
});

angular.module('promo')
  .filter('addCommas', function() {
    return function(value) {
        value += '';
        var x = value.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
});

angular.module('promo')
  .filter('percentage', ['$filter', function ($filter) {
    return function (input, decimals) {
      return $filter('number')(input * 100, decimals) + '%';
  };
}]);


})();