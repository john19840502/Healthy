angular.module('starter.services', [])

.factory('Category', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var categories = [{
		id: 0,
		name: 'All Categories'
	  }, {
		id: 1,
		name: 'Dining'
	  }, {
		id: 2,
		name: 'Grocery'
	  }, {
		id: 3,
		name: 'Grocery'
	  }];

  return {
    all: function() {
      return categories;
    }
  };
})

.factory('ExploreList', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var listvalue = [{
		id: 0,
		name: 'Elevation Burger',
		distance:'0.5 miles',
		imgsrc:'img/ThumbnailImage.png'
	  },{
		id: 1,
		name: 'A non-VIP Biz Name',
		distance:'1.2 miles',
		imgsrc:''
	  }];

  return {
    all: function() {
      return listvalue;
    }
  };
})
.factory('About', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var aboutDetails = [{
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentseque faucibus convallis est, a lacinia ex placerat a. Vivamus ut ex rutrum, auctor turpis quis, pretim est. Curabitur sit amet auctor libero, eu prottitor eros. Donec felis quam, tempor pretium tortor ut, vulputate consectetur mi. Interdum et malesauada fames ac ante ipsum primis in faucibus. Ut a tristique torter. Donec ut accumsan massa. Donec quis volutpat orci. Fusce erat dui, facilisis ac tellus quis, posuere gravida dolor.',
		imgsrc1:'img/TopGraphic.png',
		imgsrc2:'img/Oval15.png'
	  }];

  return {
    about: function() {
      return aboutDetails;
    }
  };
})
.factory('Event', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var eventlist = [{
				id: 0,
				Monthhead: 'FEBRUARY 2016',
				month:'FEB',
				date:'27',
				title:'Tunie`s 16th Annual Free',
				address:'Ft. Lauderdale, FL',
				time:'Saturday at 8:00 AM',
				distance:'0.5 miles'
			},{
				id: 1,
				Monthhead: 'MARCH 2016',
				month:'FEB',
				date:'27',
				title:'Tunie`s 16th Annual Free',
				address:'Ft. Lauderdale, FL',
				time:'Friday at 8:00 AM',
				distance:'0.5 miles'
	  }];

  return {
    events: function() {
      return eventlist;
    }
  };
})

.factory('Favourite', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var distancelist = [{
				id: 0,
				title: 'Elevation Burger',
				distance:'0.5 miles',
				imgsrc:'img/ThumbnailImage.png'
			},{
				id: 1,
				title: 'A non-VIP Biz Name',
				distance:'1.2 miles',
				imgsrc:''
	  }];
	  
	  var atozlist = [{
				id: 0,
				title: 'A non-VIP Biz Name',
				distance:'1.2 miles',
				imgsrc:''
			},{
				id: 1,
				title: 'Elevation Burger',
				distance:'0.5 miles',
				imgsrc:'img/ThumbnailImage.png'
	  }];

  return {
    distance: function() {
      return distancelist;
    },
	 atoz: function() {
      return atozlist;
    }
  };
})
.factory('Restaurant', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var tags = [{
				id: 0,
				title: 'Dining'
			},{
				id: 1,
				title: 'Clean Meats'
			},
			{
				id: 2,
				title: 'Organic'
			},
			{
				id: 3,
				title: 'Vegan'
			},
			{
				id: 4,
				title: 'Vegetarian'
			}];
			
		var reviews = [{
				id: 0,
				title: 'Amazing gluten-free buns!!!',
				ago:'1 day ago'
			},{
				id: 1,
				title: 'Best Restaurant Ever!',
				ago:'3 day ago'
			},{
				id: 2,
				title: 'Amazing gluten-free buns!!!',
				ago:'5 day ago'
			}];
  return {
    tagsdata: function() {
      return tags;
    },
	reviewesdata: function() {
      return reviews;
    },
  };
});
