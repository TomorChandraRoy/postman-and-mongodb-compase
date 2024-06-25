const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());

mongoose.connect (process.env.MONGO_DB_URL,{dbName:"cheackCollection"})
.then(()=>console.log('server is connected to eb'))
.catch((err)=>console.log('there is server connection error', err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})