migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5os4ov5k861g6c7")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5os4ov5k861g6c7")

  collection.name = "pb_practice"

  return dao.saveCollection(collection)
})
