const promesaCumplida = false;
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve('¡Promesa cumplida!');
    } else {
      reject('Promesa rechazada...');
    }
  }, 3000);
});

const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};
const manejarPromesaRechazada = (laRazon) => {
  console.log(laRazon);
};

/*miPromesa.then((valor) => {
  console.log(valor);
});*/

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

//EJEMPLO PRACTICO DE PROMESA

const estatusPedido = function () {

  return Math.random() < 0.8;
};

for (let i = 0; i < 10; i++) {
  console.log(estatusPedido());
}
//Ejemplo de pedido de pizza con promesas

const miPedidoPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve('¡Pedido exitoso! Su pizza esta en camino.');
    } else {
      reject(new Error("Ocurrio un error"));
    }

  }, 3000);
});

const manejarPedido = function (mensajeDeConfirmacion) {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
};
//Hay dos maneras de manejar el .then(). La primera se comenta para dejar la segunda opcion activa.

//miPedidoPizza.then(manejarPedido, rechazarPedido);

miPedidoPizza
  .then((mensajeDeExito) => {
    console.log(mensajeDeExito);
  })
  //Se usa otro then para manejar el reject. El primer valor es null porque la funcion de exito ya se especifica en el primer then.
  /*
  .then(null, (mensajeDeError) => {
    console.log(mensajeDeError);
  })*/

  //Con catch se usa exclusivamente para el rechazo
  .catch((mensajeDeError) => {
    console.log(mensajeDeError);
  });

//otra manera consisa de hacerlo con .then y .catch
miPedidoPizza.then(manejarPedido).catch(rechazarPedido);