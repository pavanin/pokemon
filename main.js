let game = new Game();

let sendError=function(){
  displayError("enter a valid Pokemon or id");
}
let addUserPokemon= function(){
  if(this.status==404){
    sendError();
  }else{
    let responseText=JSON.parse(this.responseText);
    let pokemon=makePokemon(responseText);
    game.addUserPokemon(pokemon);
    displayPokemon(pokemon.getDetails());
    displayUserPokemon(pokemon.getImage());
    makeVisible("battle");
  }
}

let addGamePokemon= function(){
  let responseText=JSON.parse(this.responseText);
  let pokemon=makePokemon(responseText);
  game.addGamePokemon(pokemon);
}

let getGamePokemon=function(){
 return getRandomNumber(802);
}

const makePokemon= function(details){
  let name=details.name;
  let image=details.sprites.front_default;
  let weight=details.weight;
  let type=details.types[0].type.name;
  return new Pokemon(name,weight,type,image);
}

const showBattleResult=function(){
  let gamePokemon= game.getGamePokemon();
  let text=game.hasUserWon()?"you won!":"you lost!"
  displayResult(text);
  displayGamePokemon(gamePokemon);
  makeVisible("restart");
  makeHidden("battle");
}

const showPokemonDetails = function(){
  makeVisible("details");
  let id = getUserPokemonId();
  fetchDetails(id,addUserPokemon);
}


const startGame= function(){
  let gamePokemon= getGamePokemon();
  fetchDetails(gamePokemon,addGamePokemon);
}
