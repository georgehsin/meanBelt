myApp.controller('userCON', function($scope, $location, usersFactory, listsFactory, $rootScope, $routeParams) {

	var index = function(){
        usersFactory.show($routeParams.id, function(data){
            $scope.user = data
            console.log($scope.user)
        })
        listsFactory.show($routeParams.id, function(data){
        	console.log(data)
        	$scope.lists = data
        	console.log($scope.lists)
        })
        // createsFactory.show($rootScope.loggedUser._id, function(data){
        // 	console.log(data)
        // 	$scope.creates = data
        // 	console.log($scope.lists)
        // })

    }	
    index()

    $scope.logout = function(){
    	$rootScope.loggedUser = null
    	$location.url('/')
    }
    

    $scope.current = $rootScope.loggedUser
});