import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import userRouter from './routes/users/userRouter';

const app = express();

mongoose.connect('mongodb://localhost/UsersApi', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB!')
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.send('Hello, from the API.');
})

app.listen(3000, () => console.log('API server listening on port 3000'));