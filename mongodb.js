/// CRUD opt.

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log("Unable to connect to db!!");
    }        
    const db = client.db(databaseName)
    
//   db.collection('users').updateOne({
//         _id: new ObjectID("5e4265883a52b65133e5ee76")
//     },{
//         $inc: {
//             age: 5
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

    db.collection('tasks').updateMany({
        complete: false
    },{
        $set: {
            complete: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    
})