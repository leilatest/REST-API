const express = require ("express");
require('dotenv').config()
const mongoose = require('mongoose')

const app = express();

app.use(express.json())
app.use(require('./routes'))

mongoose.connect(process.env.uri)
        .then(  console.log('DB Connected'))
        .catch((err) => console.log(err) );

app.listen(5000, (err) => {
  if (err) {
    console.log("error");
  }
  console.log(`Server is runnig 5000`);
});