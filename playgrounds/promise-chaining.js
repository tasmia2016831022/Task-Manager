require('../src/db/mongoose');
const User = require('../src/models/user');

// 5e43a36d2d8e1f7dcd379845

// User.findByIdAndUpdate('5e43a36d2d8e1f7dcd379845', {age: 69}).then((user) => {
//     console.log(user);
//     return User.countDocuments({age: 1});
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({ age });
    console.log(user);
    return count;
}

updateAgeAndCount('5e44ed58e20712c6a335027d', 39).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})