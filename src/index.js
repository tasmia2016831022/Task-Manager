const express = require("express");
const UserRouter = require("./router/userRouter");
const TaskRouter = require("./router/taskRouter");
const dotenv = require('dotenv');

dotenv.config({path: `${__dirname}/../config/dev.env`});
require("./db/mongoose");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(UserRouter);
app.use(TaskRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

