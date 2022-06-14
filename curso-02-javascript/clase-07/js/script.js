const variable = 'texto';


const funciones = () => {}
const mayorQue = (unNumero) => { // unNumero = 10 //abstracción
    return (otroNumero) => unNumero > otroNumero // otroNumero = 12
}

let mayorQueDiez = mayorQue(10);
let mayorQueTreinta = mayorQue(30);

console.log(mayorQueDiez(12));
console.log(mayorQueTreinta(25));

let crearCalificador = (adjetivo) = {
}

// recibir función
let total = 0;
const arrayNumeros = [1,2,3,4,5];

const porCadaUno = (array, funcion) => {
    for (const elemento of array) {
        
    }
}