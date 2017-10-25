const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/almundo', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Hotels').insertOne({
    name: 'Rialto',
    stars: 25,
    price: 1461,
    detail: {
      address: "Carrer de Ferran, 40-42, Barcelona",
      images: ["http://images.almundo.com/201/1000000/50000/48900/48852/48852_56_b.jpg",
        "http://images.almundo.com/201/1000000/50000/48900/48852/48852_47_b.jpg",
        "http://images.almundo.com/201/1000000/50000/48900/48852/48852_50_b.jpg",
        "http://images.almundo.com/201/1000000/50000/48900/48852/48852_52_b.jpg"],
      coordinates: {
        latitude: "41.38195781399147",
        longitude: "2.1763343999999734"
      },
      description: "Te sentirás como en tu propia casa en una de las 205 habitaciones con aire acondicionado y televisor de pantalla plana. Mantén el contacto con los tuyos gracias a la conexión a Internet wifi gratis. El baño privado con ducha y bañera combinadas está provisto de artículos de higiene personal gratuitos y secador de pelo. Las comodidades incluyen teléfono y escritorio, además de un servicio de limpieza disponible todos los días."
    }
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert hotel', err);
    }

    console.log(result.ops);
  });

  db.close();
});
