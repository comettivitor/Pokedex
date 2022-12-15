const pokemonContainer = document.querySelector('.container');
const quantPokemon = 151;

const fetchPokemons = async () => {
    for (let i = 1; i <= quantPokemon; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createCard(pokemon);
}

fetchPokemons();

function createCard(pokemon) {
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add('pokemon');

    const id = pokemon.id
    const nome = pokemon.name.toUpperCase();

    const pokeInnerHTML = `
    <div class="pokemon-container">
        <div class="imagem-pokemon">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"/>
        </div>
        <div class="info">
        <h2 class="id" >#${id}</h2>
        <h1 class="name" >${nome}</h1>
        </div>
    </div>
    `;


    pokemonElement.innerHTML = pokeInnerHTML;
    pokemonContainer.appendChild(pokemonElement);
}