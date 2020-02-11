/// CRUD opt.

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log("Unable to connect to db!!");
    }    
    //console.log("Connected Correctly!!");
    
    const db = client.db(databaseName)
    
    // db.collection('users').findOne({ name: 'kin'}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to read');
    //     }
    //     console.log(user);
    // })
    
    // db.collection('users').find({age:23}).toArray((error,users) => {
    //     console.log(users)
    // });
    db.collection('tasks').find({complete: false}).count((error,count) => {
        console.log(count)
    })
    
    db.collection('tasks').findOne({_id: new ObjectID("5e426a7953c3fe54d7f7d305")}, (error, task) => {
        if(error){
            return console.log('Unable to read');
        }
        console.log(task);
    })
    
})