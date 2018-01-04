const Pokemon= function(pokemon){
  this.image=pokemon.sprites.front_default;
  this.name=pokemon.name;
  this.order=pokemon.order;
  this.type=pokemon.types[0].type.name;
}

Pokemon.prototype.getType=function(){
  return this.type;
}

Pokemon.prototype.getName=function(){
  return this.name;
}

Pokemon.prototype.getOrder=function(){
  return this.order;
}

Pokemon.prototype.getImage= function(){
  return this.image;
}
//delete this after testing;
// module.exports=Pokemon;
