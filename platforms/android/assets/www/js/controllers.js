angular.module('starter.controllers', [])

.directive('starRating',
	function() {
		return {
			restrict : 'A',
			template : '<ul class="rating">'
					 + '	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
					 + '\u2605'
					 + '</li>'
					 + '</ul>',
			scope : {
				ratingValue : '=',
				max : '=',
				onRatingSelected : '&'
			},
			link : function(scope, elem, attrs) {
				var updateStars = function() {
					scope.stars = [];
					for ( var i = 0; i < scope.max; i++) {
						scope.stars.push({
							filled : i < scope.ratingValue
						});
					}
				};
				
				scope.toggle = function(index) {
					scope.ratingValue = index + 1;
					scope.onRatingSelected({
						rating : index + 1
					});
				};
				
				scope.$watch('ratingValue',
					function(oldVal, newVal) {
						if (newVal) {
							updateStars();
						}
					}
				);
			}
		};
	}
)
.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup, $timeout, $state, $ionicTabsDelegate) {
	
	$scope.checkTab = function(){
		var active = $ionicTabsDelegate.selectedIndex();
		if (active === 0){
		  $scope.doRefresh();
		}
		else{
		  $ionicTabsDelegate.select(0);
		}
  }
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
    // scope: $scope
  // }).then(function(modal) {
    // $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
    // $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
    // $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
    // console.log('Doing login', $scope.loginData);

    // // Simulate a login delay. Remove this and replace with your login
    // // code if using a login system
    // $timeout(function() {
      // $scope.closeLogin();
    // }, 1000);
  // };
	  $scope.explore = function(user) {
		$state.go('app.explore');
	  };
	  $scope.favourite = function(user) {
		$state.go('app.favourite');
	  };
	  $scope.deals = function(user) {
		$state.go('app.deals');
	  };
	  $scope.events = function(user) {
		$state.go('app.events');
	  };
  
	  $scope.resturantDescription = function(user) {
		$state.go('app.locdetali');
	  };
	  $scope.location = function(user) {
		$state.go('app.location');
	  };
	  $scope.discount = function(user) {
		$state.go('app.coupondetail');
	  };
	  $scope.discount2 = function(user) {
		$state.go('app.discount2');
	  };
	  $scope.discount3 = function(user) {
		$state.go('app.discount3');
	  };
 
	  $scope.about = function(user) {
		$state.go('app.about');
	  };
	  
	   $scope.suggest = function(user) {
		$state.go('app.suggest');
	  };
	  $scope.categories = function(user){
		  $state.go('app.categories')
	  }
	  $scope.login=function(user){
		  $state.go('home')
	  }
})

.controller('CategoriesCtrl', function($scope, Category) {
 $scope.categories = Category.all();
})

.controller('LocationCtrl', function($scope) {
 $scope.formdata = [{
				id: 0,
				head:'NOTE :  This is the VIP version of LocationDetail',
				imgsrc1:'img/TopGraphic.png',
				imgsrc2:'img/Oval15.png'
			  }];
})
.controller('AboutCtrl', function($scope, About) {
	
	$scope.items = About.about();
})
.controller('CouponCtrl', function($scope) {
			$scope.stars = [];
			$scope.userRating = 5;
            for (var i = 0; i < 5; i++) {
				if(i>$scope.userRating)
				{
					$scope.stars.push("ion-star");					
				}
				else
				{
					$scope.stars.push("ion-star");
				}
            }
			$scope.formdata = [{
				id: 0,
				head:'10% Off',
				discription:' This is info about item. This is info about item. This is info about item. This is info about item.',
				title: 'Elevation burger',
				reviews:'6 Reviews',
				address1:'6010 NW 57th Ave',
				address2:'Miami Lakes, FL 33014',
				phone:'(786) 517-5775',
				website:'elevationburger.com',
				distance:'1.0 miles',
				imgsrc:'img/TopGraphic.png'
			  }];
})


.controller('DiscountCtrl2', function($scope, $ionicPopup) {
	
	$scope.stars = [];
			$scope.userRating = 5;
            for (var i = 0; i < 5; i++) {
				if(i>$scope.userRating)
				{
					$scope.stars.push("ion-star");					
				}
				else
				{
					$scope.stars.push("ion-star");
				}
                
            }
			$scope.roundrate = [];
			$scope.roundrateuserRating = 3;
            for (var i = 0; i < 10; i++) {
				if(i>$scope.roundrateuserRating)
				{
					$scope.roundrate.push("ion-ios-circle-outline");					
				}
				else
				{
					$scope.roundrate.push("ion-record");
				}
            }
			
	$scope.formdata = [{
				id: 0,
				head:'Buy 9 Get 1 Free',
				discription:' This is info about item. This is info about item. This is info about item. This is info about item.',
				title: 'Elevation burger',
				reviews:'6 Reviews',
				address1:'6010 NW 57th Ave',
				address2:'Miami Lakes, FL 33014',
				phone:'(786) 517-5775',
				website:'elevationburger.com',
				distance:'0.5 miles',
			    imgsrc:'img/TopGraphic.png'
			  }];
	
 $scope.stamp = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="text" ng-model="data.email">',
     title: 'SECRET CODE',
     subTitle: 'Please hand your device to the business representative who will stamp your card.',
     scope: $scope,
     buttons: [ 
       {
         text: '<b>STAMP</b>',
         type: 'button-royal',
         onTap: function(e) {
           if (!$scope.data.email) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.email;
           }
         }
       },
	   { text: '<b>CANCEL</b>',
		 type: 'button-custom button-royal',	   
	   },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   // $timeout(function() {
      // myPopup.close(); //close the popup after 3 seconds for some reason
   // }, 3000);
  };
})

.controller('DiscountCtrl3', function($scope) {
 
 $scope.formdata = [{
				id: 0,
				head:'Tunie’s 16th Annual Free Run',
				discription:' This is info about item. This is info about item. This is info about item. This is info about item.',
				offers:'View Special Offer',
				title: 'Freedom Park',
				address1:'6010 NW 57th Ave',
				address2:'Miami Lakes, FL 33014',
				phone:'(786) 517-5775',
				website:'http://www.freedompark.org/tunierun',
				distance:'1.0 miles',
			    imgsrc:'img/TopGraphic.png'
			  }];
})

.controller('SuggestalistingCtrl', function($scope) {
 
})
.controller('ExploreCtrl', function($scope, $stateParams, $ionicLoading, $compile, ExploreList) {
	
		$scope.explorelistvalue = ExploreList.all();
	
		$scope.stars = [];
			$scope.userRating = 5;
            for (var i = 0; i < 5; i++) {
				if(i>$scope.userRating)
				{
					$scope.stars.push("ion-star");					
				}
				else
				{
					$scope.stars.push("ion-star");
				} 
            }
		
		$scope.explorelist=false;

		$scope.maplist = function(){
		var btnlist = angular.element( document.querySelector( '#btnlist' ) );
		var btnmap = angular.element( document.querySelector( '#btnmap' ) );
		btnlist.removeClass('btnactive');  
		btnlist.addClass('btnNormal');
		btnmap.removeClass('btnNormal');     
		btnmap.addClass('btnactive');   
		$scope.explorelist=false;
		}

		$scope.itemlist = function(){
		var btnlist = angular.element( document.querySelector( '#btnlist' ) );
		var btnmap = angular.element( document.querySelector( '#btnmap' ) );
		btnlist.removeClass('btnNormal');  
		btnlist.addClass('btnactive');
		btnmap.removeClass('btnactive');     
		btnmap.addClass('btnNormal');     

		$scope.explorelist=true;
		}


	$scope.init = function() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);

        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("exploremap"),
            mapOptions);

			    var data = [{
							'position': {
							  'lat':43.07493,
							  'lng':-89.381388
							 }
						  },
						  {
							'position': {
							  'lat':43.074720,
							  'lng':-89.384083
							 }
						  },{
							'position': {
							  'lat':43.076246,
							  'lng':-89.383657
							 }
						  },{
							'position': {
							  'lat':43.076377,
							  'lng':-89.384141
							 }
						  }];
        //Marker + infowindow + angularjs compiled ng-click
        //var contentString = "<div class='row'><div class='col col-25' ><img src='img/PopoutPic.png' /> </div><div class='col col-70' style='padding-top:1px;margin-left:5px;font-weight:bold;'><p style='margin:0px;'> Elevation Burger</p> <p style='margin:0px;'>1.0 miles <span>Open</span></p></div></div>";
       
      //  var compiled = $compile(contentString)($scope);

        //var infowindow = new google.maps.InfoWindow({
          //content: compiled[0]
       // });
 for (var i = 0; i < data.length; i++) {
      var current = data[i];
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(current.position.lat, current.position.lng),
          map: map, 
          title: 'Uluru (Ayers Rock)'
        });
		
		
		marker.setIcon("img/pin3.png");
        google.maps.event.addListener(marker, 'click', function() {
         // infowindow.open(map,marker);
		 infobox.open(map, this);
        });
		
		 var infobox = new InfoBox({
         content: document.getElementById("infobox"),
         disableAutoPan: false,
         maxWidth: 150,
         pixelOffset: new google.maps.Size(-70, -80),
         zIndex: null,
         boxStyle: {
            //background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
            //opacity: 0.75,
            width: "170px"
        },
        closeBoxMargin: "12px 4px 2px 2px",
        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
        infoBoxClearance: new google.maps.Size(1, 1)
    });
 }
        $scope.map = map;
    };

    // google.maps.event.addDomListener(window, 'load', initialize);

    $scope.centerOnMe = function() {
        if(!$scope.map) {
            return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
    };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('LocationDetailCtrl', function($scope, $stateParams,$ionicLoading, $compile, Restaurant, $ionicPopup) {
			$scope.rating = 5;
			
		   $scope.addreview = function() {
		   $scope.data = {}

		   // An elaborate, custom popup
		   var myPopup = $ionicPopup.show({
			 template: '<textarea type="text" ng-model="data.email" rows="3"></textarea><span>0 / 50</span><p><div ng-init="rating = star.rating + 1"></div><div class="star-rating" star-rating rating-value="rating" data-max="5"></div></p>',
			 title: 'ADD REVIEW',
			 subTitle: 'Please add a comment about your experience here.',
			 scope: $scope,
			 buttons: [ 
			   {
				 text: '<b>SAVE</b>',
				 type: 'button-royal button-save',
				 onTap: function(e) {
				   if (!$scope.data.email) {
					 //don't allow the user to close unless he enters wifi password
					 e.preventDefault();
				   } else {
					 return $scope.data.email;
				   }
				 }
			   },
			   { text: '<b>CANCEL</b>',
				 type: 'button-custom button-royal',	   
			   },
			 ]
		   });
		   myPopup.then(function(res) {
			 console.log('Tapped!', res);
		   });
		  };
   
			$scope.stars = [];
			$scope.userRating = 5;
            for (var i = 0; i < 5; i++) {
				if(i>$scope.userRating)
				{
					$scope.stars.push("ion-star");					
				}
				else
				{
					$scope.stars.push("ion-star");
				} 
            }
			$scope.tagsinfo =Restaurant.tagsdata(); 
			$scope.formdata = [{
						id: 0,
						title:'Elevation Burger',
						reviews:'6 Reviews',
						offer:'View Special Offer',
						address1:'6010 NW 57th Ave',
						address2:'Miami Lakes, FL 33014',
						distance:'0.5 miles',
						phone:'(786) 517-5775',
						website:'elevationburger.com',
						status:'Currently Closed',
						opentime:'Opens at 11AM',
						allreview:'View all (6)'
					  }];
					  
					  $scope.reviewdata =Restaurant.reviewesdata();
	$scope.reviewstar = [];
			$scope.reviewrating = 5;
            for (var i = 0; i < 5; i++) {
				if(i>$scope.reviewrating)
				{
					$scope.reviewstar.push("ion-star");					
				}
				else
				{
					$scope.reviewstar.push("ion-star");
				} 
            }
	//$ionicSideMenuDelegate.canDragContent(false);
	
	$scope.init = function() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);

        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        //Marker + infowindow + angularjs compiled ng-click
       // var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
       // var compiled = $compile(contentString)($scope);

        // var infowindow = new google.maps.InfoWindow({
          // content: compiled[0]
        // });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
		marker.setIcon("img/Pin3.png");
        google.maps.event.addListener(marker, 'click', function() {
         // infowindow.open(map,marker);
        });

        $scope.map = map;
    };

    // google.maps.event.addDomListener(window, 'load', initialize);

    $scope.centerOnMe = function() {
        if(!$scope.map) {
            return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
    };

    $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
    };
	
	
	$scope.items = [{
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }];

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };
})

.controller('DealCtrl', function($scope, $stateParams) {

$scope.coupanlist=false;

$scope.coupon = function(){
var loyalty = angular.element( document.querySelector( '#btnloyalty' ) );
var coupan = angular.element( document.querySelector( '#btncoupan' ) );
loyalty.removeClass('btnactive');  
loyalty.addClass('btnNormal');
coupan.removeClass('btnNormal');     
coupan.addClass('btnactive');   
$scope.coupanlist=false;
}

$scope.loyalty = function(){
var loyalty = angular.element( document.querySelector( '#btnloyalty' ) );
var coupan = angular.element( document.querySelector( '#btncoupan' ) );
loyalty.removeClass('btnNormal');  
loyalty.addClass('btnactive');
coupan.removeClass('btnactive');     
coupan.addClass('btnNormal');     

$scope.coupanlist=true;
}
			$scope.stars = [];
			$scope.userRating = 3;
            for (var i = 0; i < 10; i++) {
				if(i>$scope.userRating)
				{
					$scope.stars.push("ion-ios-circle-outline");					
				}
				else
				{
					$scope.stars.push("ion-record");
				}
                
            }
			
			$scope.coupansdata = [{
				id: 0,
				title: '$5 off Family Salad',
				title2:'Green Salad Mart',
				imgsrc:'img/ThumbnailImage.png',
				distance:'0.5 miles'
			  }, {
				id: 1,
				title: 'Free Veggie Torta',
				title2:'Villarreal’s Cafe',
				imgsrc:'img/PopoutPic.png',
				distance:'1.2 miles'
			  }];
			
			
			$scope.loyaltydata = [{
				id: 0,
				title: 'Green Salad Mart',
				title2:'$5 off Family Salad',
				imgsrc:'img/ThumbnailImage.png',
				distance:'0.5 miles'
			  }, {
				id: 1,
				title: 'Villarreal’s Cafe',
				title2:'Free Veggie Torta',
				imgsrc:'img/PopoutPic.png',
				distance:'1.2 miles'
			  }];

})

.controller('FavouriteCtrl', function($scope, $stateParams,$ionicSideMenuDelegate, Favourite) {

$scope.distancedata =Favourite.distance();
$scope.atozdata =Favourite.atoz();

$scope.distancelist=false;

$scope.distance = function(){
var atozbtn = angular.element( document.querySelector( '#btnatoz' ) );
var distancebtn = angular.element( document.querySelector( '#btndistance' ) );
atozbtn.removeClass('btnactive');  
atozbtn.addClass('btnNormal');
distancebtn.removeClass('btnNormal');     
distancebtn.addClass('btnactive');   
$scope.distancelist=false;
}

$scope.atoz = function(){
var atozbtn = angular.element( document.querySelector( '#btnatoz' ) );
var distancebtn = angular.element( document.querySelector( '#btndistance' ) );
atozbtn.removeClass('btnNormal');  
atozbtn.addClass('btnactive');
distancebtn.removeClass('btnactive');     
distancebtn.addClass('btnNormal');     

$scope.distancelist=true;
}

})

.controller('SearchCategoryCtrl', function($scope, $stateParams) {
})

.controller('EventCtrl', function($scope, $stateParams, Event) {
	$scope.eventdata =Event.events();
})

.controller('TabsCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  
})
.controller('HomeCtrl', function($scope, $state, $ionicSideMenuDelegate,$ionicPopup, $timeout) {
	  //$ionicSideMenuDelegate.canDragContent(false);
	  
	  // Triggered on a button click, or some other target
 $scope.login = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="text" ng-model="data.email">',
     title: 'ENTER EMAIL',
     subTitle: 'Please enter your email address, and you will receive a verification email shortly.',
     scope: $scope,
     buttons: [ 
       {
         text: '<b>SIGNUP</b>',
         type: 'button-royal',
         onTap: function(e) {
           if (!$scope.data.email) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.email;
           }
         }
       },
	   { text: '<b>CANCEL</b>',
		 type: 'button-custom button-royal',	   
	   },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   // $timeout(function() {
      // myPopup.close(); //close the popup after 3 seconds for some reason
   // }, 3000);
  };
  $scope.loginasguest = function(user) {
    $state.go('app.explore');
  };

  
});
