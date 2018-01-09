//delete after testing
const pokemonTypes= require("./pokemonTypes.js")

const Pokemon= function(image,name,weight,type){
  this.image=image;
  this.name=name;
  this.weight=weight;
  this.type=type;
}

Pokemon.prototype.getType=function(){
  return this.type;
}

Pokemon.prototype.getName=function(){
  return this.name;
}

Pokemon.prototype.getWeight=function(){
  return this.weight;
}

Pokemon.prototype.getImage= function(){
  return this.image;
}
Pokemon.prototype.canDefeat= function(otherPokemon){
  return pokemonTypes[this.type].canDefeat(otherPokemon.type);
}

//delete after testing
module.exports=Pokemon;
