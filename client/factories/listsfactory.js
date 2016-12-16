console.log('Lists Factory');
myApp.factory('listsFactory', ['$http', function($http) {
  // constructor for our factor
  

  function ListsFactory(){
    var _this = this;
    this.create = function(id, item, callback){
        console.log("INSIDE OF FACTORY")
        console.log(item)
        $http.post('/lists/' +id, item).then(function(returned_data){
            console.log(returned_data.data);
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    };
    // this.update = function(id ,newfriend, callback){ // what parameters do we need?
    //   $http.put('/lists/' +id, newfriend).then(function(returned_data){
    //         console.log(returned_data.data);
    //         if (typeof(callback) == 'function'){
    //             callback(returned_data.data);
    //         }
    //     })
    // };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/lists').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback); 
 //But only if you only want to run the callback from the controller.
    };
    // this.delete = function(id ,callback){// what parameters do we need?
    //     $http.delete('/lists/' +id).then(function(returned_data){
    //         console.log(returned_data.data);
    //         if (typeof(callback) == 'function'){
    //             callback(returned_data.data);
    //         }
    //     })
    // };
    this.show = function(id ,callback){// what parameters do we need?
        $http.get('/lists/' +id).then(function(returned_data){
            console.log(returned_data.data);
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        })
    };
  }
  console.log(new ListsFactory());
  return new ListsFactory();
}]);