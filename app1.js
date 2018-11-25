const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://127.0.0.1:27017/MusicDB', (err, db) => { 
    if (err) throw err 
    db.collection('albums').find({}).toArray((e, albums) => { 
        db.close() 
        if (e) throw e
        console.log(albums)
    })
})

//db.collection('albums').find({})