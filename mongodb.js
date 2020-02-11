/// CRUD opt.

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log("Unable to connect to db!!");
    }    
    //console.log("Connected Correctly!!");
    
    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Jhon',
    //     age: 23
    // },(error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // })
    
    // db.collection('users').insertMany([{
    //     name: 'Jane',
    //     age: 24
    // },
    // {
    //     name: 'Mead',
    //     age:45
    // }
    // ], (error,result) => {
    //     if(error){
    //         return console.log(" Unable to insert users ");
    //     }
    //     console.log(result.ops);
    // })
    
    db.collection('tasks').insertMany([
        {
            description: 'Get a pen',
            complete: true
        },
        {
            description: 'Get a paper',
            complete: true
        },
        {
            description: 'Write a paragraph',
            complete: false
        }
    ], (error,result) => {
        if(error){
            return console.log('Unable to insert task data');
        }
        console.log(result.ops);
    })
})