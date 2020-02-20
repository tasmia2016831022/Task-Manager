const dotenv = require('dotenv');
dotenv.config({path: `${__dirname}/../config/dev.env`});

const app = require('./app');

const port = process.env.PORT;


app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});


