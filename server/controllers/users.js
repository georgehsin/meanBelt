console.log('users controller');

var mongoose = require('mongoose')
var Users = mongoose.model('Users');

function UsersController(){
  this.index = function(req,res){
    //your code here
    Users.find({}, function(err, results){

      res.json(results);
    })
  };
  this.create = function(req,res){
    //your code here
    Users.create(req.body, function(err, result){
      if(err){
        console.log(err)
      }else{
        console.log('friend was created')
        res.json(result)
      }
    })
  };
  this.show = function(req,res){
    //your code here
    Users.findOne({_id: req.params.id}, function(err, results){

      res.json(results);
    })
  };
}
  
module.exports = new UsersController(); // what does this export?