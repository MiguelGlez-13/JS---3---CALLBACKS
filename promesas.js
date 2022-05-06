//Peticiones (a través de Promesas) - con timeout

/*console.log("Inicio del JS")

let promesa = new Promise((resolve, reject) => {
    console.log("Inicio del TimeOut")
    setTimeout(() => {
        console.log("Final TimeOut")
//resolve("OK");
// o
    reject(new Error("Ocurrió un error"));
}, 2000);
});

console.log("Ejecución de la Promesa")
promesa
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err.message))
    .finally(function () {
        console.log('Ejecuto siempre. Por ejemplo ocultariamos un loader!!!')
    })
console.log("Termina la Promesa")*/

/*
             3 Inicio del JS
promesas.js: 6 Inicio del TimeOut
promesas.js: 15 Ejecución de la Promesa
promesas.js: 24 Termina la Promesa
promesas.js: 8 Final TimeOut
promesas.js: 20 Ocurrió un error
promesas.js: 70 Ejecuto siempre. Por ejemplo ocultariamos un loader!!! */


//sin timeout

console.log("Inicio del JS")

let promesa2 = new Promise((resolve, reject) => {
    console.log("Inicio del TimeOut")
    resolve("OK");
/*        setTimeout(() => {
        console.log("Final TimeOut")
resolve("OK");
// o
    reject(new Error("Ocurrió un error"));
}, 2000);*/
});

console.log("Ejecución de la Promesa")
promesa2
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err.message))
    .finally(function () {
        console.log('Ejecuto siempre. Por ejemplo ocultariamos un loader!!!')
    })
console.log("Termina la Promesa")

/*
             38 Inicio del JS
promesas.js: 41 Inicio del TimeOut
promesas.js: 51 Ejecución de la Promesa
promesas.js: 60 Termina la Promesa
promesas.js: 54 OK
promesas.js: 58 Ejecuto siempre. Por ejemplo ocultariamos un loader!!! */