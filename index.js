const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

// Crear la conexion a la base de datos
const db = require('./db');

// Importar el modelo
require('./models/Films');

db.sync()
    .then(() => console.log('conectado al servidor'))
    .catch(error => console.log(error));


// lanzar servidor
app.get('/', (req, res) => {
  res.send('Hola mundo!');
})

app.listen(3000, () => {
  console.log('Servidor arrancado!')
})
