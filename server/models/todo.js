var mongoose = require('mongoose');
//save new
var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

module.exports = {Todo};

// var task1 = new Todo({
//  text: true,
//  completed:false,
//  completedAt:12
// });
//
// task1.save().then((doc) => {
//   console.log('Datas added to MongoDb');
// },(e) => {
//   console.log("Couldnot add datas to database");
// });
