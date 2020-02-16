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

const jwt = require('jsonwebtoken');

const jwtFunc = async () => {
    const token = jwt.sign({ _id:'abc123' }, 'thisisnode');
    console.log(token);
}

jwtFunc();
