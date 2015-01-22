var musicApp = angular.module('musicApp', []);

musicApp.controller('MusicListCtrl', function ($scope) {
  $scope.musics = [
    {'album': '1989',
     'artist': 'Taylor Swift',
     'released': 'October 27, 2014',
     'year': 2, 
     'imageUrl': 'img/ts.png' 
    },

    {'album': 'Night Visions',
     'artist': 'Imagine Dragons',
     'released': 'September 4, 2012',
     'year': 6, 
     'imageUrl': 'img/imaginedragons.jpeg'
    },

    {'album': 'American Beauty/American Psycho',
     'artist': 'Fall Out Boy',
     'released': 'January 20, 2015',
     'year': 1,
     'imageUrl': 'img/fob_abap.jpg'
    },

    {'album': 'Hozier',
     'artist': 'Hozier',
     'released': 'June 10, 2014',
     'year': 4,
     'imageUrl': 'img/hozier.jpg'
    },

    {'album': 'Native',
     'artist': 'One Republic',
     'released': 'March 22, 2013',
     'year': 5, 
     'imageUrl': 'img/onerepublic.png'
    },

    {'album': '1000 Forms of Fear',
     'artist': 'Sia',
     'released': 'July 4, 2014',
     'year': 3, 
     'imageUrl': 'img/sia.png'
    },

  ];

  $scope.orderProp = 'year';
});
