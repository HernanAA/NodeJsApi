// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Almundo', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Hotels').find({
  //   _id: new ObjectID('57bb36afb3b6a3801d8c479d')
  // }).toArray().then((docs) => {
  //   console.log('Hotels');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Hotels', err);
  // });

  // db.collection('Hotels').find().count().then((count) => {
  //   console.log(`Hotels count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Hotels', err);
  // });

});
