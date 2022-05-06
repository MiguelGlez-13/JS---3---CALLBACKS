//CallBacks

//Function de espera o escucha - Forma 1
document.getElementById("button01").addEventListener("click", function () {
    console.log("has pulsado el botón 1");
});
//Arrow function de espera o escucha- Forma 2
document.getElementById("button02").addEventListener("click", () => {
console.log("has pulsado el botón 2");
});

/*Función de llamada o solicitud de datos - primer código - FEO

function saludar(nombre) {
alert("Hola " + nombre);
}
function ingresarUsuario(callback) {
    let nombre = prompt("Ingresa tu nombre");
    if (nombre == null) {
    } else {
        callback(nombre);
    }
}
ingresarUsuario(saludar);
*/
//Función de llamada o solicitud de datos - segundo código con negación en el IF

function saludar(nombre) {
    if (nombre == "") {
        alert("ingresa un nombre")
    } else {
        alert("Hola " + nombre);
    }
}
    function ingresarUsuario(callback) {
        let nombre = prompt("Ingresa tu nombre");
     if (nombre != null) {
        callback(nombre);

    }
}
    ingresarUsuario(saludar);