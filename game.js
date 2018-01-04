//changes the state of element
const changeState= function(id,state){
  document.getElementById(id).style.visibility=state;
}
//gives the userpokemon id
const getUserPokemon= function(){
  return document.getElementById('user_pokemon').value.toLowerCase();
}
//gives my pokemon id
const getRandomPokemon = function(){
  return Math.floor(Math.random()*802);
}
//converts to html format
//this is not converting to html, this is adding values
const toHtmlFormat = function(pokemonDetails) {
  let htmlFormat = [];
  htmlFormat.push(`Name: ${pokemonDetails.getName()}`);
  htmlFormat.push(`Order: ${pokemonDetails.getOrder()}`);
  htmlFormat.push(`Type: ${pokemonDetails.getType()}`);
  return htmlFormat.join("\n");
}

const showDetails= function(){
  let details=document.getElementById("details");
  if(this.status==404){
    details.innerText="use a valid pokemon name or id";
    return;
  }
  userPokemon= new Pokemon(JSON.parse(this.responseText));
  details.innerText=toHtmlFormat(userPokemon);
  document.getElementById('img').src=userPokemon.image;
  changeState('battle',"visible");
  changeState('restart',"hidden");
}

const showVictory= function(){
  let status=document.getElementById("details");
  let details=JSON.parse(this.responseText);
  let myPokemon= new Pokemon(details);
  let battle = new Battle(userPokemon.type,myPokemon.getType());
  document.getElementById('img').src="";
  status.innerText=battle.getStatus();
  changeState('restart',"visible");
  changeState('battle',"hidden");
}

const xmlHandler= function(callback,id){
  let xml=new XMLHttpRequest();
  xml.addEventListener("load", callback);
  xml.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}/`);
  xml.send();
}

const showPokemonDetails = function(){
  let pokemon= getUserPokemon();
  xmlHandler(showDetails,pokemon);
}

const startBattle = function(){
  let pokemon= getRandomPokemon();
  xmlHandler(showVictory,pokemon);
}

const addKeyListener = function() {
  let battleButton = document.getElementById('battle');
  let submitButton = document.getElementById('submit_button');
  battleButton.onclick = startBattle;
  submitButton.onclick = showPokemonDetails;
}

window.onload = addKeyListener;
