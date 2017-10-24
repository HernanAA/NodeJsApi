const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Hotel} = require('./../server/models/hotel');
const {User} = require('./../server/models/user');


// Hotel.findByIdAndRemove('57c4610dbb35fcbf6fda1154').then((hotel) => {
//   console.log(hotel);
// });
