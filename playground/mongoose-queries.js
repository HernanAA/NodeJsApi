const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Hotel} = require('./../server/models/hotel');
const {User} = require('./../server/models/user');

// var id = '57bf38394b39c93d2a557e9811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Hotel.find({
//   _id: id
// }).then((hotels) => {
//   console.log('Hotels', hotels);
// });
//
// Hotel.findOne({
//   _id: id
// }).then((hotel) => {
//   console.log('Hotel', hotel);
// });

// Hotel.findById(id).then((hotel) => {
//   if (!hotel) {
//     return console.log('Id not found');
//   }
//   console.log('Hotel By Id', hotel);
// }).catch((e) => console.log(e));


