const os = require('os');

console.log(os.type());
console.log(os.homedir());
//EL tiempo en el que se esta ejecutando el sistema operativo en segundos
console.log(os.uptime());

console.log(os.userInfo());
console.log(os.userInfo().username);