function saludar(nombre){
  return `Hola ${nombre}`;
}
function saludarHolaMundo() {
  return "¡Hola, Mundo!";
}

function sumar(x,y){
  return x + y;
}

console.log(module.exports);
//module.exports.saludar = saludar;
//module.exports.sumar = sumar;
//module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {
  saludar: saludar,
  sumar: sumar,
  saludarHolaMundo: saludarHolaMundo
};
console.log(module.exports);