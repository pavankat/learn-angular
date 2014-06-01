angular.module('contacts', [])
	.config(function($routeProvider){
		//Configure the routes
		$routeProvider
		//Edit contact
		.when('/contact/:index', {
			templateUrl: 'edit.html',
			controller: 'Edit'
		})
		.when('/', {
			//List all contacts
			templateUrl: 'list.html'
		})
	})
	.controller('Contacts', function(){
		//Contacts is the parent controller
		//so $scope.contacts is available to children
		$scope.contacts = [
		{ name: "Tom", number: "7324564356"}, 
		{ name: "Bob", number: "9085436754"}, 
		{ name: "Amy", number: "4236758943"}, 
		{ name: "Joethalomus", number: "7324567865"}
		];
	})
	.controller('Edit', function(){
		//load in a contact from the route /contact/:index
		$scope.contact = $scope.contacts[$routeParams.index];
		$scope.index = $routeParams.index;

	});