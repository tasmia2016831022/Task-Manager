require('../src/db/mongoose');
const User = require('../src/models/user');

// 5e43a36d2d8e1f7dcd379845

User.findByIdAndUpdate('5e43a36d2d8e1f7dcd379845', {age: 69}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 1});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})