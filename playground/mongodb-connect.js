const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
  console.log("Connected correctly to server");
  const db = client.db(dbName);

   // Insert a single document
   db.collection('Todos').insertOne({text : 'Do something here', completed : false}, function(err, r) {
  
    if (err){
        return console.log('Could not insert records into database',err); 
    }
    
    console.log (JSON.stringify(r.ops, undefined ,2));
    //  assert.equal(null, err);
    // assert.equal(1, r.insertedCount);

    
  });
});


