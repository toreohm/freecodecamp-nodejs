const http = require('http');
const puerto = 3000;

const servidor = http.createServer((req, res) => {
  console.log("Solicitud nueva.");
  res.end('Hola mundo!');
});

servidor.listen(puerto, () => {
  console.log(`El servidor esta escuchando en http://localhost:${puerto}...`);
});
