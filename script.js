const baseURL ="https://pokeapi.co/api/v2/pokemon/"
const containerDiv = document.getElementById(`container`)
const searchDiv = document.getElementById(`searchContainer`)
const PokemonDiv = null;

const getPokeResults = (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("search").value;
    console.log(`Search Input ${searchInput}`);
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            const errorMessage = document.createElement("h2")

            errorMessage.textContent = data.error
            errorMessage.style.color = "red"

            searchDiv.appendChild(errorMessage)
        } else {
            searchDiv.innerHTML = ""
            displayData(data);
        }
    })

    searchInput.value = ""
}

function displayData(pokemon) {
    console.log(pokemon.species.name)
    if(containerDiv.firstElementChild != null) {
        containerDiv.removeChild(PokemonDiv)
    } else {null}

    const PokemonDiv = document.createElement("div")
    const PokemonName = document.createElement("h4")
    PokemonName.textContent = pokemon.species.name;
    PokemonDiv.appendChild(PokemonName)

    const Sprites = document.createElement("img")
    Sprites.src = pokemon.sprites.front_default;
    PokemonDiv.appendChild(Sprites)
    // Sprites.setAttribute("id", "Sprites")

    const HpStats = document.createElement("h3")
    HpStats.textContent = `HP: ${pokemon.stats[0].base_stat}`
    PokemonDiv.appendChild(HpStats)
    
    const AtkStats = document.createElement("h3")
    AtkStats.textContent = `Atk: ${pokemon.stats[1].base_stat}`
    PokemonDiv.appendChild(AtkStats)
    
    const SpAtkStats = document.createElement("h3")
    SpAtkStats.textContent = `SpAtk: ${pokemon.stats[2].base_stat}`
    PokemonDiv.appendChild(SpAtkStats)
    
    const DefStats = document.createElement("h3")
    DefStats.textContent = `Def: ${pokemon.stats[3].base_stat}`
    PokemonDiv.appendChild(DefStats)
    
    const SpDefStats = document.createElement("h3")
    SpDefStats.textContent = `SpDef: ${pokemon.stats[4].base_stat}`
    PokemonDiv.appendChild(SpDefStats)
    
    const SpdStats = document.createElement("h3")
    SpdStats.textContent = `Spd: ${pokemon.stats[5].base_stat}`
    PokemonDiv.appendChild(SpdStats)
    
    const PokemonTypes = document.createElement("p")
        switch (pokemon.types.length) {
            case 2:
                PokemonTypes.textContent = pokemon.types[0].type.name + "/" + pokemon.types[1].type.name
                break;
            case 1:
                PokemonTypes.textContent = pokemon.types[0].type.name
                break;
            default:
                break;
        }
    
    
    PokemonDiv.appendChild(PokemonTypes)
    containerDiv.appendChild(PokemonDiv)
}
