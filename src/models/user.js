const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
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
          minlength: 7,
          validate(value){
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
    }
);

userSchema.pre('save', async function(next){
    const user = this;
    
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;