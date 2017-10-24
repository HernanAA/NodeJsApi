var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hotelDetailSchema = new Schema({ 
  address: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  images: {
    type: [String]
  },
  coordinates:{
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true}
  },
  description:{
    type: String,
  }
});

var Hotel = mongoose.model('Hotel', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  stars: {
    type: Number,
    default: 1
  },
  price:{
    type: Number,
    default:0
  },
  detail: hotelDetailSchema

});

module.exports = {Hotel};
