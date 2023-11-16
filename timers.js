function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}
function sumar(a, b) {
  console.log(a + b);
}

//setTimeout
setTimeout(mostrarTema, 2000, 'Nodejs');
setTimeout(sumar, 2000, 5, 6);

//setImmediate

console.log("Antes de setImmediate()");
setImmediate(mostrarTema, 'Nodejs');
console.log("Despues de setImmediate()");

//setInterval
setInterval(mostrarTema, 2000, "amigoTopo");
setInterval(sumar, 2000, 4, 5);