const pokemonContainer = document.querySelector('.container');
const container = document.querySelector('.container');

const fetchPokemons = async () => {
    for (let i = 1; i <= 151; i++) {
        await getPokemon(i);
    }
}

const fetchPokemons2 = async () => {
    for (let i = 152; i <= 251; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createCard(pokemon);
}

const atualizaPagina = () =>{
    if(container.parentNode){
        container.parentNode.removeChild(container)
    }
}

function createCard(pokemon) {
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add('pokemon');

    const id = pokemon.id;
    const nome = pokemon.name.toUpperCase();
    const tipo = pokemon.types
        .map((type) => type.type.name)
        .join(' ');

    const pokeInnerHTML = `
    <div class="pokemon-container">
        <div class="imagem-pokemon">
            <img src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg"/>
        </div>
        <div class="info">
        <h2 class="id" >#${id}</h2>
        <h1 class="name" >${nome}</h1>
        <h3 class="type">${tipo}</h3>
        </div>
    </div>
    `;


    pokemonElement.innerHTML = pokeInnerHTML;
    pokemonContainer.appendChild(pokemonElement);
}
