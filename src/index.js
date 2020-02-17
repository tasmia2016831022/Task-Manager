const express = require("express");
require("./db/mongoose");
const UserRouter = require("./router/userRouter");
const TaskRouter = require("./router/taskRouter");


const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());
app.use(UserRouter);
app.use(TaskRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});


const Task = require('./models/task');

const main = async () => {
  
}

main();