var pokeDiv = document.querySelector(".pokemon");
var descripcion = document.querySelector(".descripcion");

function consultarPokemon(){
    let nombre = document.querySelector(".nombre").value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((datos) => {
        pokemonData(datos);
    })
    .catch((e) => {
        pokeDiv.innerHTML = `<img src="./img/pikachu_triste.webp" class="pokemon-img" alt="Imagen del pokemon"></img>`;
        document.querySelector(".descripcion").innerHTML = "<p>Pokémon no encontrado :(</p>";
    })
}

let buscar = document.querySelector(".buscarPokemon");
buscar.addEventListener("click" , ()=>{
    consultarPokemon();
    
});

function pokemonData(pokemon){
    pokeDiv.innerHTML = `<img src="${pokemon.sprites.front_default}" class="pokemon-img" alt="Imagen del pokemon"></img>`;
    descripcion.innerHTML = `<p class="nombrePokemon">${pokemon.name}</p>`
    descripcion.innerHTML += `<p class="habilidades">Habilidades</p>`
    if (pokemon.abilities.length > 2){
        descripcion.innerHTML += `<p class="habilidadesPokemon">${pokemon.abilities[0].ability.name} <br> ${pokemon.abilities[1].ability.name} <br> ${pokemon.abilities[2].ability.name}</p>`;
    } else {
        descripcion.innerHTML += `<p class="habilidadesPokemon">${pokemon.abilities[0].ability.name} <br> ${pokemon.abilities[1].ability.name}</p>`;
    }
    console.log(pokemon)
}