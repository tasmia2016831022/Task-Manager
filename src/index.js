const express = require("express");
require("./db/mongoose");
const UserRouter = require("./router/userRouter");
const TaskRouter = require("./router/taskRouter");


const app = express();
const port = process.env.PORT || 3001;

const multer = require('multer');
const upload = multer({
  dest: 'images'
})
app.post('/upload', upload.single('upload'),(req,res) => {
  res.send();
})

app.use(express.json());
app.use(UserRouter);
app.use(TaskRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

