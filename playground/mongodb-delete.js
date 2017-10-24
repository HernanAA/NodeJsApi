// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Almundo', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Hotels').findOneAndDelete({
    _id: new ObjectID("57ac8d47878a299e5dc21bc8")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  
});
