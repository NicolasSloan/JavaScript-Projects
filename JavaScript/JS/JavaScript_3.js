function displayType(Pokemon) {
    var pokemonType = Pokemon.getAttribute("data-pokemon_type");
    alert(Pokemon.innerHTML + " is a " + pokemonType + " type!")
}