const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(' Email is not valid');
            }
        }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value){
          if(value.length <= 6){
              throw new Error(' Password length must be greater than SIX');
          }
          if(validator.equals(value,'password') || validator.equals(value, 'Password')){
              throw new Error(' password not valid ');
          }
      }  
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error(' Age must be a positive number ');
            }
        }
    }
});

const me = new User({
    name: ' Lamia u',
    password: '20384ujnngggnnn8   ',
    email: 'lamia@GMAIL.com',
    age: 45
})

me.save().then(() =>{
    console.log(me);
}).catch((error) => {
    console.log("Error: ",error);
})

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String,
    },
    completed: {
        type: Boolean
    }
});

// const task = new Tasks({
//     description: 'Making Breakfast',
//     completed: true
// });

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log('Error: ', error);
// });