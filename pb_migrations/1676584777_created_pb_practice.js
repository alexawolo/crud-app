migrate((db) => {
  const collection = new Collection({
    "id": "5os4ov5k861g6c7",
    "created": "2023-02-16 21:59:37.195Z",
    "updated": "2023-02-16 21:59:37.195Z",
    "name": "pb_practice",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zem3vjnx",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vy7vnjnl",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5os4ov5k861g6c7");

  return dao.deleteCollection(collection);
})
