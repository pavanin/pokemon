const Game = function(){
  this.userPokemon = undefined;
  this.gamePokemon = undefined;
}

Game.prototype.hasUserWon = function(){
  return this.userPokemon.canDefeat(this.gamePokemon);
}

Game.prototype.addUserPokemon = function(userPokemon){
  this.userPokemon = userPokemon;
}

Game.prototype.addGamePokemon = function(gamePokemon){
  this.gamePokemon = gamePokemon;
}

Game.prototype.getGamePokemon= function(){
  return this.gamePokemon.getImage();
}
