const loader = document .getElementById ('lds-spinner')

console.log("Inicio del JS")

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
console.log("Termina la Promesa")


//loader.style.display = 'none'; - solo se mustra mencionando esta línea - revisar