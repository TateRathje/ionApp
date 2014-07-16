var App = angular.module("App", ["ionic"]);

App.service("FreshlyPressed", ["$http", "$log", FreshlyPressed]);

App.controller("AppCtrl", ["$scope", "FreshlyPressed", "$log", AppCtrl]);

function AppCtrl($scope, FreshlyPressed, $log) {
	$scope.refresh = function() {
		FreshlyPressed.getBlogs();
	}
}

function FreshlyPressed($http, $log) {
	this.getBlogs = function() {
		$http.jsonp("http://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK")
			.success(function(result) {
				$log.info(JSON.stringify(result.posts));
			});
	};
}


