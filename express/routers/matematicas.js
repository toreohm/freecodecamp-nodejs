const express = require('express');
const {matematicas} = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(matematicas));
  //res.send(infoCursos.matematicas[0].titulo);
  });

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = matematicas.filter((curso) => {return curso.tema === tema});
  
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  if (req.query.ordenar === 'vistas') {
    return res.send(JSON.stringify(resultados.sort((a,b) => {return b.vistas - a.vistas})));
  }
  
  res.send(JSON.stringify(resultados));
  });

routerMatematicas.get('/:tema/:nivel', (req, res) => {
  const {tema, nivel} = req.params;
  const resultado = matematicas.filter((curso) => {return curso.tema == tema && curso.nivel == nivel});

  if (resultado.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema} de nivel ${nivel}.`);
  }

  res.json(resultado);
}); 

module.exports.routerMatematicas = routerMatematicas;