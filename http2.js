const http = require('http');
const puerto = 3000;

const servidor = http.createServer((req, res) => {
  //REQUEST
  console.log("req.url: " + req.url);
  console.log("req.method: " + req.method);
  console.log("req.headers: ", req.headers);

  //RESPONSE
  console.log("Status code: ", res.statusCode);
  res.statusCode = 404;
  console.log("Status code: ", res.statusCode);
  res.setHeader('content-type', 'application/json');
  console.log("res.getHeaders(): ", res.getHeaders());

  res.end("Hola mundo!");

});

servidor.listen(puerto, () => {
  console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});