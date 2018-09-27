// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect("mongodb://localhost:27017/TodoApp",{useNewUrlParser:true},(err, client) => {
    if(err){
      return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');

  //   db.collection('Users').find({name:'Aarav'}).toArray().then((docs) => {
  //      console.log(JSON.stringify(docs, undefined, 2));
  //    }, (err) => {
  //      console.log("Unable to fetch docs");
  //    });
  // //  deleteOne
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Walk Dog'}).then((docs) => {
    //   return console.log(docs);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndUpdate(
      { name: 'Ramesh'},
      { $inc:{
          age: -1
        }},
      { returnOriginal: false
    }).then((results) => {
      console.log(JSON.stringify(results, undefined, 2));
    });
  //  client.close();
 });
