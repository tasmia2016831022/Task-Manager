require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndRemove('5e43c4030cdd4a96447d1b56').then((task) => {
    console.log(task);
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})