const express = require('express');
const {infoCursos} = require('./datos/cursos.js');
const app = express();
const PUERTO = process.env.PORT || 3000;

// Routers
const {routerProgramacion} = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);
const {routerMatematicas} = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

// Routing
app.get('/', (req, res) => {
  res.send("<h1 style='color:purple;text-align:center;'>Node.js y Express</h1>");
});

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

app.listen(PUERTO, () => {
  console.info(`Escuchando en el puerto ${PUERTO}...`);
});