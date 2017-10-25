NodeJs Api
===================

Api realizada en **nodeJs**. El objetivo es evidenciar los conocimientos en el uso de dicha tecnología. Para realizar esta api se utilizarón también las siguientes tecnologías: **mongoDb y mongosee**

----------
Ejecutar servicio localmente
-------------
Dentro de pantalla donde se desea realizar la instalación, ejecutar los siguientes comandos por consola:

**git clone https://github.com/HernanAA/NodeJsApi.git**

**cd NodeJsApi**

**mongod.exe --dbpath RUTA-A-LA-BD**

**node server/server.js**


----------
Usos de la api
===================

POST: 
--------------
> - Url: localhost:3000/
> - body: 
```
{
    "__v": 0,
    "name": "Gran Derby Suite Hotel",
    "detail": {
        "address": "Carrer de Paris 101, Barcelona",
        "description": "Una descripción acrode.",
        "_id": "59eea43b338a880012a99372",
        "coordinates": {
            "latitude": 41.38938261399516,
            "longitude": 2.1474199000000453
        },
        "images": [
            "https://images.almundo.com/201/1000000/920000/913800/913726/913726_97_b.jpg",
            "https://images.almundo.com/201/2000000/1180000/1170100/1170099/1170099_56_b.jpg",
            "https://images.almundo.com/201/2000000/1180000/1170100/1170099/1170099_54_b.jpg"
        ]
    },
    "_id": "59eea43b338a880012a99371",
    "price": 1625,
    "stars": 3
}
```

GET
-----------
> - URL: localhost:3000/hotels
> - La respuesta será una array de hoteles:
```
{
    "hotels": [
        {
            "_id": "59eea2e8338a880012a99340",
            "name": "Rialto",
            "price": 1461,
            "stars": 3,
            "image": "https://images.almundo.com/201/1000000/50000/48900/48852/48852_56_b.jpg"
        },
        {
            "_id": "59eea343338a880012a99343",
            "name": "NH Collection Barcelona Gran Hotel Calderón",
            "price": 3060,
            "stars": 5,
            "image": "https://images.almundo.com/201/1000000/530000/523300/523278/523278_267_b.jpg"
        }
    ]
}
```

Get by id
-------------
> - localhost:3000/hotels/59e250e988dcd35f5c64cfa3
> - La respuesta será el hotel con el id enviado:
```
{
    "hotel": {
        "_id": "59eea2e8338a880012a99340",
        "name": "Rialto",
        "detail": {
            "address": "Carrer de Ferran, 40-42, Barcelona",
            "description": "Una descripción acrode.",
            "_id": "59eea2e8338a880012a99341",
            "coordinates": {
                "latitude": 41.38195781399147,
                "longitude": 2.1763343999999734
            },
            "images": [
                "https://images.almundo.com/201/1000000/50000/48900/48852/48852_56_b.jpg",
                "https://images.almundo.com/201/1000000/50000/48900/48852/48852_47_b.jpg",
                "https://images.almundo.com/201/1000000/50000/48900/48852/48852_50_b.jpg",
                "https://images.almundo.com/201/1000000/50000/48900/48852/48852_52_b.jpg"
            ]
        },
        "__v": 0,
        "price": 1461,
        "stars": 3
    }
}
```