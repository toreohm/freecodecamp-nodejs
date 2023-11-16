const express = require('express');
const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

// Middleware
routerProgramacion.use(express.json());

routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter((curso) => {return curso.lenguaje === lenguaje});

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`);
  }

  if (req.query.ordenar === "vistas") {
    return res.send(JSON.stringify(resultados.sort((a, b) => {return a.vistas - b.vistas})));
  } 
  res.send(JSON.stringify(resultados));

});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const {lenguaje, nivel} = req.params;
  const resultados = programacion.filter((curso) => {return curso.lenguaje === lenguaje && curso.nivel === nivel});

  if (resultados.length === 0) {
    return res.status(204).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}.`);
    //return res.status(404).end();
  }

  //res.send(JSON.stringify(resultados));
  res.json(resultados);
});

routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
});

routerProgramacion.put('/:id', (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex((curso) => {return curso.id == id});

  if (indice >=0) {
    programacion[indice] = cursoActualizado;
  }
  res.send(JSON.stringify(programacion));

});

routerProgramacion.patch('/:id', (req, res) => {
  const infoNueva = req.body;
  const id = req.params.id;
  const indice = programacion.findIndex((curso) => {return curso.id == id});

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoNueva);
  }
  res.send(JSON.stringify(programacion)); //res.json(programacion)
});

routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex((curso) => {return curso.id == id});

  if(indice >= 0) {
    programacion.splice(indice, 1);
  }
  res.send(JSON.stringify(programacion));
});

module.exports.routerProgramacion = routerProgramacion;