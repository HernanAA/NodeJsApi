const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Hotel} = require('./../models/hotel');

const hotels = [{
  _id: new ObjectID(),
  text: 'First test hotel'
}, {
  _id: new ObjectID(),
  text: 'Second test hotel',
  completed: true,
  completedAt: 333
}];

beforeEach((done) => {
  Hotel.remove({}).then(() => {
    return Hotel.insertMany(hotels);
  }).then(() => done());
});

describe('POST /hotels', () => {
  it('should create a new hotel', (done) => {
    var text = 'Test hotel text';

    request(app)
      .post('/hotels')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Hotel.find({text}).then((hotels) => {
          expect(hotels.length).toBe(1);
          expect(hotels[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create hotel with invalid body data', (done) => {
    request(app)
      .post('/hotels')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Hotel.find().then((hotels) => {
          expect(hotels.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /hotels', () => {
  it('should get all hotels', (done) => {
    request(app)
      .get('/hotels')
      .expect(200)
      .expect((res) => {
        expect(res.body.hotels.length).toBe(2);
      })
      .end(done);
  });
});

describe('GET /hotels/:id', () => {
  it('should return hotel doc', (done) => {
    request(app)
      .get(`/hotels/${hotels[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.hotel.text).toBe(hotels[0].text);
      })
      .end(done);
  });

  it('should return 404 if hotel not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .get(`/hotels/${hexId}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 for non-object ids', (done) => {
    request(app)
      .get('/hotels/123abc')
      .expect(404)
      .end(done);
  });
});

describe('DELETE /hotels/:id', () => {
  it('should remove a hotel', (done) => {
    var hexId = hotels[1]._id.toHexString();

    request(app)
      .delete(`/hotels/${hexId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.hotel._id).toBe(hexId);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Hotel.findById(hexId).then((hotel) => {
          expect(hotel).toNotExist();
          done();
        }).catch((e) => done(e));
      });
  });

  it('should return 404 if hotel not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .delete(`/hotels/${hexId}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 if object id is invalid', (done) => {
    request(app)
      .delete('/hotels/123abc')
      .expect(404)
      .end(done);
  });
});

describe('PATCH /hotels/:id', () => {
  it('should update the hotel', (done) => {
    var hexId = hotels[0]._id.toHexString();
    var text = 'This should be the new text';

    request(app)
      .patch(`/hotels/${hexId}`)
      .send({
        completed: true,
        text
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.hotel.text).toBe(text);
        expect(res.body.hotel.completed).toBe(true);
        expect(res.body.hotel.completedAt).toBeA('number');
      })
      .end(done);
  });

  it('should clear completedAt when hotel is not completed', (done) => {
    var hexId = hotels[1]._id.toHexString();
    var text = 'This should be the new text!!';

    request(app)
      .patch(`/hotels/${hexId}`)
      .send({
        completed: false,
        text
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.hotel.text).toBe(text);
        expect(res.body.hotel.completed).toBe(false);
        expect(res.body.hotel.completedAt).toNotExist();
      })
      .end(done);
  });
});
