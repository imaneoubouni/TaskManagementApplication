const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(cors({ origin: 'http://localhost:4200' }));

app.use(express.json());

app.use('/tasks', require('./routes/tasks'));


mongoose
  .connect('mongodb://127.0.0.1:27017/todo-mean')
  .then(() => {
    console.log('MongoDB connecté');
    app.listen(3000, () => console.log('API disponible sur http://localhost:3000'));
  })
  .catch(err => console.error('Erreur de connexion MongoDB :', err));