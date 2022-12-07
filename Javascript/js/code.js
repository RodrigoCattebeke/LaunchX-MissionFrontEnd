function consultarPokemon(){
    let nombre = document.querySelector(".nombre").value;
    let url = `https://pokeapi.co/api/v2/pokemon/${nombre}` ;
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((datos) => {
        pokemon = datos.species.name;
        console.log(datos);
    })
}

let buscar = document.querySelector(".buscarPokemon");
buscar.addEventListener("click" , ()=>{
    consultarPokemon();
});