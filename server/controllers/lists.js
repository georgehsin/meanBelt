console.log('lists controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose')
var List = mongoose.model('Lists');
var User = mongoose.model('Users');

function ListsController(){
  this.index = function(req,res){
    //your code here
    List.find({}, function(err, results){

      res.json(results);
    })
  };
  this.create = function(req,res){
    //your code here
    User.findOne({_id: req.params.id}, function(err, user){
        // data from form on the front end
        console.log(user)
        console.log('hello')
        console.log(req.body)
        var list = new List(req.body);
        //  set the reference like this:
        // console.log(list)
        list._user = user._id;
        // now save both to the DB
        user.lists.push(list);
        // console.log(user)
        // console.log(user.topics[0])
        list.save(function(err){
                user.save(function(err){
                     if(err) {
                          console.log('Error');
                     } else {
                          console.log("Topic created");
                          res.redirect('/');
                     }
                 });
         });
    });
  };
  // this.delete = function(req,res){
  //   //your code here
  //   Post.remove({_id: req.params.id}, function(err){
  //     if(err){
  //       console.log(err);
  //     }else{
  //       res.json({message: "Topic deleted!"});
  //     }
  //   })
  // };
  this.show = function(req,res){
    //your code here
    console.log('TRYING TO SHOW DATA')
    User.findOne({_id: req.params.id})
      .populate('lists')
      .exec(function(err, results) {
      res.json(results);
    })
  };
}
module.exports = new ListsController(); // what does this export?