var app = angular.module( 'app' , ['ui.router']);

app.config( function ($stateProvider) {
	$stateProvider.state('moms', {
		controller: 'momsController',
		templateUrl: 'moms.html',
		url: '/moms'
	}).state('name', {
		controller: 'nameController',
		templateUrl: 'name.html',
		url: '/name'
	});
});

app.controller( 'momsController' , function ($scope) {
	$scope.f = function() {
		$scope.momsValue = $scope.moms * 0.2;
	//	console.log(momsValue);
	}
});

app.controller( 'nameController' , function ($scope) {
	$scope.a = function() {
		$scope.yourName = $scope.name;
		console.log($scope.a);
		console.log();
	}
});