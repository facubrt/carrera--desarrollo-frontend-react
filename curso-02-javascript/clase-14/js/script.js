// PROMESAS y ASYNC

/* MODELO SINCRONICO: LINEAL. La segunda peticion unicamente va a ejecutarse cuando la primera termine, y el resultado se mostrará al finalizar ambas.
MODELO ASINCRONICO: PERMITE EJECUTAR VARIAS TAREAS PARALELAMENTE. Pueden realizarse peticiones en paralelos y estoy escuchando cuando una u otra responda y mostrando a medida que finalicen (esto permite que se resuelvan de manera no lineal)


setTimeOut(fn, time) permite ejecutar un codigo en un determinado tiempo
*/
// const TIEMPO_DE_ESPERA = 3000;

// setTimeout(() => {
//     console.log('Hola, asincrónico');
// }, TIEMPO_DE_ESPERA)

// const boton = document.querySelector('#boton');
// const popUp = document.querySelector('#popup-mensaje');

// boton.addEventListener('click', () => {
//     popUp.classList.add('popup-mensaje');
//     setTimeout(()=> {
//         popUp.classList.remove('popup-mensaje');
//     }, 5000)
// })

/* 
EVENT LOOP.

*/

// SET INTERVAL
let tiempo = 0;

let tiempoDom = document.getElementById('tiempo');
let minutosDom = document.getElementById('minutos');
let segundosDom = document.getElementById('segundos');

const pad = (val) => {
    let valString = val.toString();
    if (valString.length < 2) {
        return '0' + valString;
    } else {
        return valString
    }
}

setInterval(() => {
    tiempo++,
        minutosDom.innerHTML = pad(parseInt(tiempo / 60));
    segundosDom.innerHTML = pad(tiempo % 60);
    console.log(tiempo);
    tiempoDom.innerHTML = tiempo;
}, 1000);

// PROMESAS

const BD = [
    {
        id: 1,
        nombre: 'Producto 1',
        precio: 1500,
    },
    {
        id: 2,
        nombre: 'Producto 2',
        precio: 1500,
    },
    {
        id: 3,
        nombre: 'Producto 3',
        precio: 1500,
    },
    {
        id: 4,
        nombre: 'Producto 4',
        precio: 1500,
    }
];

const pedirProductos = () => {
    respuestaDom.innerHTML = 'Cargando productos...'
    return new Promise((resolve, reject) => {
        const peticionBE = true;
        setTimeout(() => {
            if (peticionBE === true) {
                resolve(BD);
            } else {
                reject('error');
            }
        }, 3000)
    })
}

pedirProductos().then(respuesta => {
    respuestaDom = '';
    console.log(productos);
    for (const producto of productos) {
        const { nombre, id, precio} = producto;
        const elemento = document.createElement('div');
        elemento.innerHTML = `<p>${id}</p>
        <p>${nombre}</p>
        <p>${precio}</p>`
    }
}).catch()
.finally()