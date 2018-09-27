var mongoose = require('mongoose');

var User = mongoose.model('User',{
  name:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = {User};

// var user1 = new User({
//   name: 'Sadhana',
//   email: '   '
//
// });
//
// user1.save().then((docs) => {
//  console.log("Datas added successfully");
// },(e) => {
//  console.log("Datas not added",e);
// });
