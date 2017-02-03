;(function() {
	
  'use strict';

angular.module('promo')
  .controller('ItemsListCtrl', function($scope) {

    $scope.items = [
    	{ src: 'img/icons/tune-ico.png', title: '4 soundtracks', description: 'Over 3 hours of award winning music from all 3 games.' },
    	{ src: 'img/icons/book-ico.png', title: '2 short stories', description: 'Prequel story for Divine Divinity and Beyond Divinity novella.' },
    	{ src: 'img/icons/journal-ico.png', title: 'Divinity 2 - Dev Journal', description: '144 pages long book, detailing story and art of Divinity 2.' },
    	{ src: 'img/icons/film-ico.png', title: 'Making of Divinity 2', description: '40 minutes long, profesional documentary about the development of Divinity 2.' },
    	{ src: 'img/icons/mac-ico.png', title: '7 wallpapers', description: 'Beatifull, hand crafted HD wallpepers with Divine, Beyond and Divinity 2 art.' },
    	{ src: 'img/icons/zip-ico.png', title: '...and more', description: '3 manuals, 56 artworks, 5 avatars, Beyond Divinity game-guide.' },
    ];

});

})();