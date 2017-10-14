var mongoose = require('mongoose');

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
  images: {
    type: [String]
  },
  price:{
    type: Number,
    default:0
  },
  location:{
    type: String,
    default:''
  }

});

module.exports = {Hotel};
