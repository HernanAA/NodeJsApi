const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Hotel} = require('./../server/models/hotel');
const {User} = require('./../server/models/user');

// Hotel.remove({}).then((result) => {
//   console.log(result);
// });

// Hotel.findOneAndRemove
// Hotel.findByIdAndRemove

// Hotel.findOneAndRemove({_id: '57c4610dbb35fcbf6fda1154'}).then((hotel) => {
//
// });

Hotel.findByIdAndRemove('57c4610dbb35fcbf6fda1154').then((hotel) => {
  console.log(hotel);
});
