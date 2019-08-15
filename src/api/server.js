import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import userRouter from './routes/users/userRouter';

mongoose.connect('mongodb://localhost/UsersApi', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const db = mongoose.connection;
db.on('connected', () => {
  console.log('Connected to MongoDB!')
})

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.send('Hello, from the API.');
})

app.listen(3000, () => console.log('API server listening on port 3000'));