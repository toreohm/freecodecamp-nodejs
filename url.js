const miURL =new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log("hostname: ", miURL.hostname); // www.ejemplo.org
console.log("pathname: ", miURL.pathname); // /cursos/programacion
console.log("parametros query: ", miURL.searchParams);// URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log("miURL.searchParams.ordenar: ", miURL.searchParams.get('ordenar')); // vistas
console.log("miURL.searchParams.nivel: ", miURL.searchParams.get('nivel')); // 1
console.log("Protocolo: ", miURL.protocol); // https:
