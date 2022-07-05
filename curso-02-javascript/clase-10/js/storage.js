localStorage.setItem('bienvenida', '¡Hola Coder!');
localStorage.setItem('esMayorEdad', true);
localStorage.setItem('edad', 32);


// Variables
const bienvenida = localStorage.getItem('bienvenida'); // ¡Hola Coder!
let nombreUsuario = localStorage.getItem('nombreUsuario');
let apellidoUsuario = localStorage.getItem('apellidoUsuario');
let edadUsuario = localStorage.getItem('edadUsuario');
let inputNombre = sessionStorage.getItem('inputNombre');
let inputApellido = sessionStorage.getItem('inputApellido');

//Variables DOM
const saludoEstudiantes = document.querySelector('#saludoUsuario');
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const edad = document.querySelector('#edad');
const contFormulario = document.querySelector('#contFormulario');
const contenido = document.querySelector('#contenido');
const logout = document.querySelector('#logout');

//funciones
const ocultarFormulario = () => {
  contFormulario.style.display = 'none';
  contenido.innerHTML = `Hola ${nombreUsuario} ${apellidoUsuario}. Tienes ${edadUsuario} años.`;
}


saludoEstudiantes.innerHTML = bienvenida;

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  nombreUsuario = nombre.value;
  apellidoUsuario = apellido.value;
  edadUsuario = edad.value;

  localStorage.setItem('nombreUsuario', nombre.value);
  localStorage.setItem('apellidoUsuario', apellido.value);
  localStorage.setItem('edadUsuario', edad.value);
  ocultarFormulario();
})

if (!!nombreUsuario && !!apellidoUsuario && !!edadUsuario) {
  ocultarFormulario();
}

console.log(inputNombre, inputApellido);

nombre.value = inputNombre;
apellido.value = inputApellido;

nombre.addEventListener('input', (e) => {
  sessionStorage.setItem('inputNombre', e.target.value);
})

apellido.addEventListener('input', (e) => {
  sessionStorage.setItem('inputApellido', e.target.value);
})

logout.onclick = () => {
  // localStorage.clear();
  localStorage.removeItem('nombreUsuario');
  localStorage.removeItem('apellidoUsuario');
  localStorage.removeItem('edadUsuario');
}


//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log("Clave: "+ clave);
  console.log("Valor: "+ localStorage.getItem(clave));
}
