console.log('creates controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose')
var Create = mongoose.model('Creates');
var User = mongoose.model('Users');

function CreatesController(){
  // this.index = function(req,res){
  //   //your code here
  //   User.find({}, function(err, results){

  //     res.json(results);
  //   })
  // };
  this.create = function(req,res){
    //your code here
    User.findOne({_id: req.params.id}, function(err, user){
        // data from form on the front end
        console.log(user)
        console.log(user._id)
        var create = new Create(req.body);
        //  set the reference like this:
        console.log(list)
        create._user = user._id;
        // now save both to the DB
        user.creates.push(create);
        // console.log(user)
        // console.log(user.topics[0])
        create.save(function(err){
                user.save(function(err){
                     if(err) {
                          console.log('Error');
                     } else {
                          console.log("Created Item Logged");
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
      .populate('creates')
      .exec(function(err, results) {
      res.json(results);
    })
  };
}
module.exports = new CreatesController(); // what does this export?