const fs = require("fs");

console.log("Antes de leer el archivo...");

const archivo = fs.readFileSync('index.html', 'utf-8');

console.log(archivo);

console.log("Despues de leer el archivo...");

fs.renameSync("index.html", "main.html"); 

console.log("Despues de cambiar el nombre del archivo...");

//Agregar contenido al final de un archivo
 fs.appendFileSync('main.html', "<p>Nuevo contenido</p>"); 

console.log("Despues de agregar contenido al archivo...");

//Remplazar todo el contenido del archivo
fs.writeFileSync("main.html", "Nuevo contenido");

console.log("Despues de remplazar el contenido del archivo");

//Eliminar archivos
fs.unlinkSync("main.html");

console.log("Despues de eliminar el archivo");