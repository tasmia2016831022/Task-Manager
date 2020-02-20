const express = require("express");
const UserRouter = require("./router/userRouter");
const TaskRouter = require("./router/taskRouter");
require("./db/mongoose");

const app = express();


app.use(express.json());
app.use(UserRouter);
app.use(TaskRouter);

module.exports = app;

