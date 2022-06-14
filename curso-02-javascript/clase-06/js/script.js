// const usuario = {

// }

function Producto (producto) {
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.agregadoEnCanasta = 0;
    this.agregarACanasta = function () {
        this.agregadoEnCanasta++;
        alert(`Agregaste el ${this.nombre} a canasta`);
    }
}

const producto = new Producto({nombre: "Leche", precio: 1000});

console.log(producto);
