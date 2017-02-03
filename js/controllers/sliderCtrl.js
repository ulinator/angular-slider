;(function() {

  'use strict';

angular.module('promo')
  .controller('SliderCtrl', function($scope) {

    var averageValue = 7.67; // set first breakpoint
    var topValue = 18.31; // set second breakpoint

    $scope.averageValue = averageValue;
    $scope.topValue = topValue;

    $scope.slider = {
      value: $scope.topValue,
      options: {
        floor: 0.99, // set floor 
        ceil: 49.99, // set ceil 
        step: 0.01,
        precision: 10,
        showSelectionBar: true,
        hideLimitLabels: true,
        hidePointerLabels: true,
        showTicksValues: true,
        ticksArray: [ $scope.averageValue, $scope.topValue ],
        translate: function(value, averageValue, topValue) {
            if (value === $scope.averageValue ) {
              return '$' + value + ' (Average)';
            } else  if ( value === $scope.topValue ) {
              return '$' + value + ' (top 10%)';
            } else {
              return value;
            }
        }

      }
    };

    $scope.isAverage = function() {
      return $scope.slider.value >= $scope.averageValue;
    };
    $scope.isTop = function() {
      return $scope.slider.value >= $scope.topValue;
    };

    $scope.getWidth = function(element, placeholder) {
        return document.querySelector(element).offsetWidth || placeholder;
    };

    $scope.caretValue = function() {
      var sliderVal = $scope.slider.value;
      var sliderMax = $scope.slider.options.ceil;
      var sliderWidth = $scope.getWidth('.rz-bar', 767);
      var caretWidth = $scope.getWidth('.pointer-caret', 222);
      var widthDiff = sliderWidth - caretWidth;
      var scale = sliderWidth / sliderMax;
      var value = sliderVal * scale - caretWidth/2;

      if ( value < 0 ) {
        return 0;
      } else if ( value > widthDiff ) {
        return widthDiff;
      } else {
        return value;
      }
    };

    $scope.getVal = function() {
      var val = $scope.slider.value;
      var floor = $scope.slider.options.floor;

      if (val < floor ) {
        return floor;
      } else {
        return val;
      }
    };


    $scope.shout = function() { // send value 
      var currentValue = $scope.getVal();
      console.log(currentValue);
    };

});

})();