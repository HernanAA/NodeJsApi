require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Hotel} = require('./models/hotel');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/hotels', (req, res) => {
  const {name, stars, location, price, images} = req.body;
  var hotel = new Hotel({
    name, stars, location, price, images
  });

  hotel.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/hotels', (req, res) => {
  Hotel.find().then((hotels) => {
    res.send({hotels});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/hotels/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Hotel.findById(id).then((hotel) => {
    if (!hotel) {
      return res.status(404).send();
    }

    res.send({hotel});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/hotels/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Hotel.findByIdAndRemove(id).then((hotel) => {
    if (!hotel) {
      return res.status(404).send();
    }

    res.send({hotel});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.patch('/hotels/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Hotel.findByIdAndUpdate(id, {$set: body}, {new: true}).then((hotel) => {
    if (!hotel) {
      return res.status(404).send();
    }

    res.send({hotel});
  }).catch((e) => {
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
