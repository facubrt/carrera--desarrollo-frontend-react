// if (true) {
//     // bloque de codigo a ejecutar
//     console.log("vas a ver este mensaje");
// }

// if (false) {
//     // bloque de codigo a ejecutar
//     console.log("no vas a ver este mensaje");
// }

// let resultado = 5 + 4; 
// let unNumero = 5;

// if (unNumero == 5) {
//     console.log("vas a ver este mensaje porque el numero es 5");
// }

// if (unNumero == 9) {
//     console.log("no vas a ver este mensaje porque el numero no es 9")
// }

/* PROPUESTA DE JUEGO EJERCICIO */

let anoNacimiento = Number(prompt("Ingresa tu año de nacimiento"));
const anoActual = 2022;
let edad = anoActual - anoNacimiento;
( anoActual - anoNacimiento);

if (edad <= 18) {
    alert("Tienes toda una vida por delante");
} else if (edad > 18 && edad <= 35) {
    alert("que grande que estás");
} else if (edad > 35 && edad <= 65) {
    alert("estás muy grande para andar con jueguitos");
} else {
    alert("que bueno que puedas dedicar tiempo a jugar");
}

