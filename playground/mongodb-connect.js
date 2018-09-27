 const MongoClient = require('mongodb').MongoClient;

 MongoClient.connect("mongodb://localhost:27017/TodoApp",{useNewUrlParser:true},(err, client) => {
    if(err){
      return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
      text:'Walk Dog',
      completed: true
    }, (err, result) => {
       if(err){
         return console.log('Unable to insert into Todo', err);
       }
       console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('Users').insertOne({
    //   name:"Aarav",
    //   age:3,
    //   location:"Plano-Texas"
    // }, (err, result) => {
    //    if(err){
    //      return console.log("Unable to insert into Users collection", err);
    //    }
    //   // console.log(JSON.stringify(result.ops, undefined, 2));
    //   console.log(result.ops);
    // });

    client.close();
 });
