const http = require('http');
const puerto = 3000;

const servidor = http.createServer((req, res) => {
  res.write("<h1 style='color:blue;text-align:center;'>NODE JS - FreeCodeCamp</h1><p style='text-align:center;font-size: 150%;'>Estoy aprendiendo Node.js</p>");
  res.end();
});

servidor.listen(puerto, () => {
  console.log("El puerto esta escuchando en el puerto " + puerto + "...");
});