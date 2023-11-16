//const saludo = require("./saludo.js");
const {saludar,saludarHolaMundo} = require("./saludo.js");

console.log(saludar("freeCodeCamp"));
console.log(saludarHolaMundo());
//console.log(saludo.sumar(2,2));

console.warn("Ocurrió un error");
console.error("error grave");
console.error(new Error("Ocurrió un nuevo error"));