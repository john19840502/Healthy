// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,  $ionicConfigProvider) {
	$ionicConfigProvider.tabs.position('bottom')
	 $stateProvider    
		.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	  })
	  .state('app.about', {
		url: '/about',
		views: {
		  'menuContent': {
			templateUrl: 'templates/about.html',
			controller: 'AboutCtrl'
		   }
		}
	  })
	  .state('app.favourite', {
		url: '/favourite',
		views: {
		  'menuContent': {
			templateUrl: 'templates/favourite.html',
			controller: 'FavouriteCtrl'
		  }
		}
	  })
	.state('app.deals', {
		url: '/deals',
		views: {
		  'menuContent': {
			templateUrl: 'templates/deal.html',
			controller: 'DealCtrl'
		  }
		}
	  })
	.state('app.events', {
		url: '/events',
		views: {
		  'menuContent': {
			templateUrl: 'templates/event.html',
			controller: 'EventCtrl'
		  }
		}
	  })
	.state('app.explore', {
		  url: '/explore',
		  views: {
			'menuContent': {
			  templateUrl: 'templates/explore.html',
			  controller: 'ExploreCtrl'
			}
		  }
		})
		.state('app.locdetali', {
		  url: '/locdetali',
		  views: {
			'menuContent': {
			  templateUrl: 'templates/locationdetail.html',
			  controller: 'LocationDetailCtrl'
			}
		  }
		})		
		.state('app.categories', {
		  url: '/categories',
		  views: {
			'menuContent': {
			  templateUrl: 'templates/categories.html',
			  controller: 'CategoriesCtrl'
			}
		  }
		})
		.state('app.location', {
		  url: '/location',
		  views: {
			'menuContent': {
			  templateUrl: 'templates/locationdetailVIP.html',
			  controller: 'LocationCtrl'
			}
		  }
		})
		.state('app.coupondetail', {
		  url: '/coupondetail',
		  views: {
			'menuContent': {
			  templateUrl: 'templates/coupondetail.html',
			  controller: 'CouponCtrl'
			}
		  }
		})
		.state('app.discount2', {
		  url: '/discount2',
		  views: {
			'menuContent': {
			  templateUrl: 'templates/loyaltydetail.html',
			  controller: 'DiscountCtrl2'
			}
		  }
		})
		.state('app.discount3', {
		  url: '/discount3',
		  views: {
			'menuContent': {
			  templateUrl: 'templates/eventdetail.html',
			  controller: 'DiscountCtrl3'
			}
		  }
		})
		.state('app.suggest', {
		  url: '/suggest',
		  views: {
			'menuContent': {
			  templateUrl: 'templates/suggestalisting.html',
			}
		  }
		})
		.state('home', {
		  url: '/home',
		  templateUrl: 'templates/home.html',
		  controller: 'HomeCtrl'      
		})
		.state('app.apphome', {
		  url: '/apphome',
		  views: {
			'menuContent': {
			  templateUrl: 'templates/apphome.html',
			  controller: 'SearchCategoryCtrl'
			}
		  }
		});
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
