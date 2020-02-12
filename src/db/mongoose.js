const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

// const me = new User({
//     name: 'Minnni',
//     age: 23
// })

// me.save().then(() =>{
//     console.log(me);
// }).catch((error) => {
//     console.log("Error: ",error);
// })

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const task = new Tasks({
    description: 'Making Breakfast',
    completed: true
});

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log('Error: ', error);
});