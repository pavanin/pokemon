let game = new Game();

let addUserPokemon= function(){
  if(this.status==404){
    sendError();
  }
  responseText=JSON.parse(this.responseText);
  pokemon=makePokemon(responseText);
  game.addUserPokemon(pokemon);
  displayPokemon(pokemon.getDetails());
}

const makePokemon= function(details){
  let name=details.name;
  let image=details.sprites.front_default;
  let weight=details.weight;
  let type=details.types[0].type.name;
  return new Pokemon(name,weight,type,image);
}



const showPokemonDetails = function(){
  let id = getUserPokemonId();
  fetchDetails(id,addUserPokemon);
}

//
// const startGame= function(){
//   gamePokemon= getGamePokemon();
//   game.addGamePokemon(gamePokemon);
// }
