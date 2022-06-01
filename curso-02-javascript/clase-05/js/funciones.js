function imprimirAlert (mensaje) {
    alert(mensaje);
}

function sumar (primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
} 

function sumarConUsuario() {
    let num1 = Number(prompt("Ingresa el primer número"));
    let num2 = Number(prompt("Ingresa el segundo número"));
    sumar(num1, num2);
    imprimirAlert(`El resultado de la suma es ${resultado}`);
}

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero + segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return 0;
    }
}

function operacionConUsuario() {
    let operador = prompt("¿Que tipo de operación quieres hacer?");
    let num1 = Number(prompt("Ingresa el primer número"));
    let num2 = Number(prompt("Ingresa el segundo número"));
    
    resultado = calculadora(num1, num2, operador);
    imprimirAlert(`El resultado de la suma es ${resultado}`);
}

// ES5
function es5() {

}

// ES6
// FUNCIONES ANONIMAS
const nombreFuncion = function () {
    console.log("hola");
}

// FUNCIONES FLECHA
const nombreFuncionFlecha = () => { console.log("hola")}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta( suma( precioProducto, iva (precioProducto)), descuento);