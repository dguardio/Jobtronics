var app = angular.module("Jobtronics", ["firebase"]);
app.factory("UserStats"["$firebaseObject",
  function($firebaseObject) {
  	return function(Username){    
  	// ...
    	var ref = new Firebase("https://jobtronics.firebaseio.com");
    	var userRef = ref.child("Username")

    	return $firebaseObject(userRef);
	}
  }
]);

app.controller("UserCtrl", ["$scope", "UserStats"
	function($scope, UserStats) {
		UserStats("Prof")$.bindTo($scope, "userstats");
	}
]);