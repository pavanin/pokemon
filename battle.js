const Battle= function(UPType,MPType){
  this.userType=UPType;
  this.myType=MPType;
  this.pokemonTypes={
    fire : ['steel','bug','ice','grass'],
    water : ['fire','ground','rock'],
    grass : ['water','ground','rock'],
    electric : ['water','flying'],
    normal : [],
    ground : ['fire','electric','poison','rock','steel'],
    rock : ['fire','ice','flying','bug'],
    fighting : ['normal','ice','rock','dark','steel'],
    steel : ['rock','ice','fairy'],
    ice : ['grass','ground','flying','dragon'],
    poison : ['grass','fairy'],
    psychic : ['fighting','poison'],
    bug : ['grass','psychic','dark'],
    flying : ['grass','fighting','bug'],
    dragon : ['dragon'],
    fairy : ['fighting','dragon','dark'],
    ghost : ['psychic','ghost'],
    dark : ['psychic','ghost'],
  };
}

Battle.prototype.hasUserWon=function(){
  return this.pokemonTypes[this.userType].includes(this.myType);
}

Battle.prototype.getStatus=function(){
  if(this.hasUserWon())return "you won!";
  else return "you lost!"
}

//detete this after testing
// module.exports=Battle;





// const Game = function(){
//   this.userPokemon = userPokemon;
//   this.gamePokemon = gamePokemon;
//   this.pokemonTypes = {
//     fire : ['steel','bug','ice','grass'],
//     water : ['fire','ground','rock'],
//     grass : ['water','ground','rock'],
//     electric : ['water','flying'],
//     normal : [],
//     ground : ['fire','electric','poison','rock','steel'],
//     rock : ['fire','ice','flying','bug'],
//     fighting : ['normal','ice','rock','dark','steel'],
//     steel : ['rock','ice','fairy'],
//     ice : ['grass','ground','flying','dragon'],
//     poison : ['grass','fairy'],
//     psychic : ['fighting','poison'],
//     bug : ['grass','psychic','dark'],
//     flying : ['grass','fighting','bug'],
//     dragon : ['dragon'],
//     fairy : ['fighting','dragon','dark'],
//     ghost : ['psychic','ghost'],
//     dark : ['psychic','ghost'],
//   };
// }
//
// Game.prototype.getWeakerPokemons=function(){
//   let userPokemonType = this.userPokemon.type;
//   return this.pokemonTypes[userPokemonType];
// }
//
// Game.prototype.hasUserWon = function(){
//   let gamePokemonType = this.gamePokemon.type;
//   let userPokemonType = this.userPokemon.type;
//   let weakerPokemons = this.getWeakerPokemons();
//   return weakerPokemons.includes(gamePokemonType);
// }
//
// Game.prototype.addUserPokemon = function(userPokemon){
//   this.userPokemon = userPokemon;
// }
//
// Game.prototype.addGamePokemon = function(gamePokemon){
//   this.gamePokemon = gamePokemon;
// }
