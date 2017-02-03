;(function() {
	
  'use strict';

angular.module('promo')
  .controller('ArcCtrl', function ($scope) {
    $scope.size = 90;
    $scope.progress = 0.75;
    $scope.strokeWidth = 7;
    $scope.stroke = 'rgba(255,255,255,0.9)';
    $scope.counterClockwise = '';
});

})();