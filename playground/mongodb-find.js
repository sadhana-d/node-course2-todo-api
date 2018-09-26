 const MongoClient = require('mongodb').MongoClient;
//const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect("mongodb://localhost:27017/TodoApp",{useNewUrlParser:true},(err, client) => {
    if(err){
      return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');

    db.collection('Users').find({name:'Aarav'}).toArray().then((docs) => {
       console.log(JSON.stringify(docs, undefined, 2));
     }, (err) => {
       console.log("Unable to fetch docs");
     });
     // db.collection('Todos').find({
     //   _id: new ObjectID('')
     // }).toArray().then((docs) => {
     //   console.log('Todos');
     //   console.log(JSON.stringify(docs, undefined, 2));
     // }, (err) => {
     //   console.log('unable to fetch todos', err);
     // });
     //
     db.collection('Todos').find().count().then((count) => {
       console.log(`Todos Count: ${count}`);
     }, (err) => {
       console.log('Unable to fetch todos',err);
     });
    client.close();
 });
