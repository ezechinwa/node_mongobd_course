const MongoClient = require('mongodb').MongoClient;
const ObjectID    = require('mongodb').ObjectID;

const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
  console.log("Connected correctly to server");
  const db = client.db(dbName);
   db.collection('Todos').find({
       _id : new ObjectID("5a42d9308fe979c0fc4efc1b")
       }).toArray().then((doc)=>{
      console.log('Todos');
      console.log(JSON.stringify(doc,undefined,2));
   },(err)=>{
       console.log('Unable to fetch data', err);
   });
   
});


