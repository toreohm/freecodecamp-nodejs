const curso = require('./curso.json');

/*console.log(curso);
console.info(curso.titulo);
console.info(curso.temas[0]);*/

let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
};

//De Objeto a Cadena de caracteres 
// Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.info(infoCursoJSON);
console.info(typeof infoCursoJSON);

// Cadena de caracteres -> Objeto

let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
console.info(infoCursoObjeto.esPublico);