require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndRemove('5e43c4030cdd4a96447d1b56').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id,{completed});
    const count = await Task.countDocuments({completed});
    console.log(task);
    return count;
}

deleteTaskAndCount('5e44edb9e20712c6a335027f', true).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})