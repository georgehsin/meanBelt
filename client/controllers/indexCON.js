myApp.controller('indexCON', function($scope, $location, usersFactory, listsFactory, $rootScope) {

	var index = function(){
        usersFactory.index(function(data){
            $scope.users = data
            console.log($scope.users)
        })
        listsFactory.show($rootScope.loggedUser._id, function(data){
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

    $scope.addItem = function (){
    	listsFactory.create($rootScope.loggedUser._id, $scope.newItem, function(data){
			console.log($scope.newItem)
			console.log($rootScope.loggedUser._id)
			if($scope.addUser._id !== null){
				listsFactory.create($scope.addUser._id, $scope.newItem, function(data){
					console.log($scope.newItem)
					console.log($scope.addUser._id)
				})
				// createsFactory.create($rootScope.loggedUser._id, $scope.newItem, function(data){
				// 	console.log($scope.newItem)
				// 	console.log($scope,addUser._id)
				// })
			}
        })
    index()
    }
    

    $scope.current = $rootScope.loggedUser
});