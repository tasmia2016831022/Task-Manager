const express = require("express");
require("./db/mongoose");
const UserRouter = require("./router/userRouter");
const TaskRouter = require("./router/taskRouter");


const app = express();
const port = process.env.PORT || 3001;

// app.use((req, res, next) => {
//   if(req.method === 'GET'){
//     res.send('GET is disabled');
//   }else{
//     next();
//   }
// })

// app.use((req,res,next) => {
//   res.status(503).send('site under maintainance');
// })

app.use(express.json());
app.use(UserRouter);
app.use(TaskRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

const jwt = require('jsonwebtoken');

// const jwtFunc = async () => {
//     const token = jwt.sign({ _id:'abc123' }, 'thisisnode', { expiresIn: '100 seconds'});
//     console.log(token);
    
//     const data = jwt.verify(token, 'thisisnode');
//     console.log(data);
// }

// jwtFunc();

