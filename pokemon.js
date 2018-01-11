const Pokemon= function(name,weight,type,image){
  this.image=image;
  this.name=name;
  this.weight=weight;
  this.type=type;
  this.details={};
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

Pokemon.prototype.getDetails=function(){
  this.details.name=this.getName();
  this.details.weight=this.getWeight();
  this.details.type=this.getType();
  return this.details;
}
Pokemon.prototype.canDefeat= function(otherPokemon){
  let isType=pokemonTypes[this.getType()].canDefeat(otherPokemon.type);
  let isWeight=this.getWeight()>otherPokemon.getWeight();
  return isType&&isWeight;
}
