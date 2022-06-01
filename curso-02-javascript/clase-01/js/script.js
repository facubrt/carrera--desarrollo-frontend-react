/* CODIGO JAVASCRIPT */

// ESTE ES MI PRIMER COMENTARIO

/* BLOQUE
Acá puedo escribir un parrafo
- item
- item
*/

var variableUno = "Mi nombre es John";
var variableUno = "Mi nombre es Julia";

var nombre;
nombre = "Daniel";

// ES6
let variableDos = "Mi segunda variable";
let apellido;
let edad = 32;

apellido = "Turriago"; // tipo texto
apellido = "Perez";

const YEAR = 2022; // tipo número
const PI = 3.14;
const descuento = 0.05;

let anioNacimiento = YEAR - edad; // 2022 - 32 = 1990

let nombreCompleto = nombre + apellido; // Daniel Perez;

/* PROMP, ALERT, CONSOLE */

//let primerNombre = prompt("Ingrese el primer nombre");
//let segundoNombre = prompt("Ingrese el segundo nombre");
//alert("El resultado de la suma es " + (primerNombre + segundoNombre))

let promptNumeroUno = prompt("ingrese un número");
let promptNumeroDos = prompt("Ingrese el segundo número");
alert(Number(promptNumeroUno) + Number(promptNumeroDos));
alert(parseFloat(promptNumeroUno) + parseInt(promptNumeroDos));
alert(+promptNumeroUno + +promptNumeroDos);



