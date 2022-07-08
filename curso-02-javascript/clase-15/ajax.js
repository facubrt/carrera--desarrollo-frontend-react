/* 
AJAX Y FETCH

TECNICAS DE DESARROLLO QUE PERMITEN A LAS APP WEB FUNCIONAR DE FORMA ASINCRONA PARA SOLICITAR Y ENVIAR DATOS

el mecanismo por el cual se piden y proveen datos a través de internet es HTTP

- URL. 
- MÉTODO. Get (obtener info) Post (enviar info) Put (crear o modificar info) y Delete (eliminar info)

API (APPLICATION PROGRAMMING INTERFACES) tecnicas utilizadas para generar url para comunicar front con backend

SWAPI - STAR WARS

*/

// URLS
const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/?limit=151";
const JSON_POST = "https://jsonplaceholder.typicode.com/posts";

// DOM
const container = document.querySelector("#container");
const btn = document.querySelector("#button");
const form = document.querySelector("#form");

// FUNCIONES
const capitalize = (str) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

const obtenerPokemonAsync = async () => {
  try {

    container = `cargando...`;
    const respuesta = await fetch(URL_POKEMON);
    const pokemonResults = await respuesta.json();


    container.innerHTML = '';
    console.log(pokemonResults);
    const { results } = pokemonResults;
    for (const pokemon of results) {
      const { url, name } = pokemon;
      const id = url.split('/')[url.split('/').length - 2];
      const element = document.createElement('div');
      element.className = 'card';
      element.innerHTML = `
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png">
      <h2 class="poke-name">#${id} - ${name}</h2>
      `
      container.append(element);
    }
  } catch {
    console.log('error');
  } finally {

  }
}

  const enviarInformacion = (info) => {
    fetch(JSON_POST, {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-type': 'application/json: charset=UFT-8',
      }
    }).then(res => res.json()).then(respuesta => {
      console.log(respuesta)
    })
  }


  //LISTENERS
btn.addEventListener("click", () => {
    obtenerPokemon();

  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mail = document.getElementById('email');
    console.log(mail.value);
    enviarInformacion({ valor: mail.value });
  });

  fetch('./productos.json').then(res => res.json()).then(respuesta => console.log(respuesta));

// ASYNC AWAIT / TRY CATCH
