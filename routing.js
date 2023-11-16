const http = require('http');
const cursos = require("./cursos.js");
const puerto = 3000;

function manejarSolicitudGET(req, res) {
  const path = req.url;
  
  if (path === '/') {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.statusCode = 200;
    return res.end("Bienvenidos a mi primer servidor y API creados con Node.js");
  } else if (path === '/cursos') {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === '/cursos/programacion') {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.programacion));
  }

  res.statusCode = 404;
  res.end("El recurso solicitado no existe...");
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;

  if (path === '/cursos/programacion') {
    let body = '';

    req.on('data', (contenido) => {
      body += contenido.toString();
    });

    req.on('end', () => {
      console.log("body: ", body);
      console.log("typeof: ", typeof body);

      //Convertir a un objeto de javascript
      body = JSON.parse(body);
      console.log("typeof body: ", typeof body);
      console.log("body.titulo: ", body.titulo);

      res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    });

    res.statusCode = 200;
    //return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
  }
}

const servidor = http.createServer((req, res) => {
  const {method} = req;

  switch(method) {
    case 'GET':
      return manejarSolicitudGET(req, res);
    case 'POST':
      return manejarSolicitudPOST(req, res);
    default: 
      res.statusCode = 501;
      res.end(`El metodo no puede ser manejado por el servidor: ${method}`);
      break;
  }
});

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});

