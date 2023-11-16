const fs = require("fs");

console.log("Antes de leer el archivo...");

fs.readFile('index.html', 'utf-8', (error, contenido) => {
  if (error) {
    //console.error(error);
    throw error;
  } else {
    console.log(contenido);
  }
  console.log("Un mensaje...");
});

console.log("Despues de leer el archivo...");

 fs.rename("index.html", "main.html", (error) => {
  if (error) {
    throw error;
  }
  console.log("Nombre de archivo cambiado exitosamente.");
}); 

console.log("Despues de cambiar el nombre del archivo...");

//Agregar contenido al final de un archivo
 fs.appendFile('main.html', "<p>Nuevo contenido</p>", (error) => {
  if (error) {
    throw error;
  }
  console.log("Archivo actualizado.");
}); 

console.log("Despues de agregar contenido al archivo...");

//Remplazar todo el contenido del archivo
fs.writeFile("main.html", "Nuevo contenido", (error) => {
  if (error) {
    throw error;
  }
  console.log("Contenido reemplazado.");
});

console.log("Despues de remplazar el contenido del archivo");

//Eliminar archivos
fs.unlink("main.html", (error) => {
  if (error) {
    throw error;
  }
  console.log("Archivo eliminado.");
});

console.log("Despues de eliminar el archivo");