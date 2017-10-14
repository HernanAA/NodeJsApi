// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/almundo', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Hotels').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert hotel', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'Philadelphia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.collection('Hotels').insertOne({
    name: 'Rialto',
    stars: 25,
    images: ['http://images.almundo.com/201/1000000/50000/48900/48852/48852_56_b.jpg',
            'http://images.almundo.com/201/1000000/50000/48900/48852/48852_47_b.jpg',
            'http://images.almundo.com/201/1000000/50000/48900/48852/48852_50_b.jpg',
            'http://images.almundo.com/201/1000000/50000/48900/48852/48852_52_b.jpg'
            ],
    price: 1461,
    location: 'https://www.google.com.ar/maps/place/Hotel+Rialto/@41.3819578,2.1763344,15z/data=!4m5!3m4!1s0x0:0xba24a5123f671aa5!8m2!3d41.3819578!4d2.1763344'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert hotel', err);
    }

    console.log(result.ops);
  });

  db.close();
});
