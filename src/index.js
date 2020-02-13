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

//encrypt
const bcrypt = require('bcryptjs');

const pFunc = async () => {
    const password = '12345!!!';
    const hashedPass = await bcrypt.hash(password,8);
    
    console.log(password);
    console.log(hashedPass);
    
    const isMatch = await bcrypt.compare('jnfbwj',hashedPass);
    console.log(isMatch);
}

pFunc();

