/* DOM
DOCUMENT OBJECT MODEL

ESTRUCTURA DE OBJETOS GENERADA POR EL NAVEGADOR, LA CUAL REPRESENTA LA PÁGINA HTML ACTUAL

EN EL DOM, CADA ETIQUETA HTML ES UN OBJETO AL QUE PODEMOS LLAMAR NODO

SE ESTABLECE UNA JERARQUÍA

DOCUMENT ES EL NODO GLOBAL DESDE EL CUAL VAMOS A ACCEDER A TODOS LOS NODOS

POR EJEMPLO, DOCUMENT.BODY ES EL NODO QUE REPRESENTA LA ETIQUETA BODY

cada etiqueta se transforma en un nodo element. De cada etiqueta raíz solamente podrá accederse a las etiquetas de primer nivel como head, body...
Cada etiqueta html se transforma en un nodo que deriva del correspondiente a su etiqueta padre.

la transformación de las etiquetas html habituales genera dos nodos. Nodo elemento, corresponde a la propia etiqueta html. Nodo texto, contiene el texto encerrado por la etiqueta html.
*/

console.log(document.body)

/* 
ACCEDIENDO AL DOM

getElementByID()
getElementByTag()
getElementByClassName()
 */

const titulo = document.getElementById('titulo');
console.log(titulo);
console.log(titulo.innerHTML);

// crear eliminar nodos
const productosSugeridos = ['Celular', 'Airpods', 'Televisor', 'Dron'];
const sugeridos = document.getElementById('sugeridos');

for (sugerido of productosSugeridos) {
    const li = document.createElement('li');
    li.innerHTML = sugerido;
    console.log(li);
    sugeridos.append(li);
}

// PREPEND
const precios = document.querySelectorAll('.precio');

for (const precio of precios) {
    const element = document.createElement('span');
    element.innerHTML = '$';
    precio.prepend(element);
}

// REMOVE
const textoRemover = document.querySelector('h3.texto');
textoRemover.remove();

// 
const contenedorCanasta = document.getElementById('canasta');
for (const producto of canasta) {
    const contenedor = document.createElement('div')
    // MANIPULACION DE CLASES
    contenedor.className = 'producto-canasta';
    //contenedor.classList.add('producto-canasta');
    //contenedor.innerHTML = ´
    //<img src="${producto.imagen}">
    //    <p> Producto: ${producto.nombre}</p> 
    //    ...
    //´
    contenedorCanasta.append(contenedor);
}

// INPUTS
// PODREMOS OBTENER LOS VALORES INGRESADOS DEL USUARIO SI 
// TENEMOS UN ELEMENTO CON UN ID AL CUAL PODAMOS ACCEDER. 
// Entonces leemos este valor con .value