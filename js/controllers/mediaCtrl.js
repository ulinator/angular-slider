;(function() {
    
  'use strict';

angular.module('promo')
  .controller('MediaCtrl', function($scope) {

  	var salesNumber = 22345;
  	$scope.salesNumber = salesNumber;

    $scope.salesDigit = function(iterator) {
      var maxLen = 6;
      var splitNum = salesNumber.toString().split("");
      while (splitNum.length < maxLen) {
        splitNum.unshift('0');
      }
      return splitNum[iterator];
    };

    $scope.slides = [
    	{ breakpoint: 10000,  unlocked: 'false', movieUrl: '', thumbnail: '/img/thumbnails/thumb1.jpg', nextBreakpointTitle: 'Reach 10.000...', description: '...to unlock exclusive, never before seen, trailer from Divinity: Original Sin.'  },
    	{ breakpoint: 25000,  unlocked: 'false', movieUrl: '', thumbnail: '/img/thumbnails/thumb1.jpg', nextBreakpointTitle: 'Reach 25.000...', description: '...to unlock exclusive, never before seen, trailer from Divinity: Original Sin.'  },
    	{ breakpoint: 50000,  unlocked: 'false', movieUrl: '', thumbnail: '/img/thumbnails/thumb1.jpg', nextBreakpointTitle: 'Reach 50.000...', description: '...to unlock exclusive, never before seen, trailer from Divinity: Original Sin.'  },
    	{ breakpoint: 80000,  unlocked: 'false', movieUrl: '', thumbnail: '/img/thumbnails/thumb1.jpg', nextBreakpointTitle: 'Reach 80.000...', description: '...to unlock exclusive, never before seen, trailer from Divinity: Original Sin.'  },
    	{ breakpoint: 120000,  unlocked: 'false', movieUrl: '', thumbnail: '/img/thumbnails/thumb1.jpg', nextBreakpointTitle: 'Reach 120.000...', description: '...to unlock exclusive, never before seen, trailer from Divinity: Original Sin.'  },
    ];

    $scope.currentSlide = $scope.slides[0];

    $scope.select= function(index) {
       $scope.selected = index; 
    };

    $scope.setActive = function(slide) {
    	slide.active = true;
    };

    $scope.isUnlocked = function(slide) {
      if (slide.breakpoint < salesNumber) {
          return slide.unlocked;
      }
    };

    $scope.setCurrentSlide = function(slide) {
    	$scope.currentSlide = slide;
    };

    $scope.getPercentage = function(slide) {
      var percentage = $scope.salesNumber / slide.breakpoint;
      if ( percentage > 1 ) {
        return 1;
      } else {
        return $scope.salesNumber / slide.breakpoint;
      }
    };

});

})();