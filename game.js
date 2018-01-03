let userPokemon={};
let myPokemon={};


const getPokemon= function(){
  return document.getElementById('user_pokemon').value.toLowerCase();
}

const getRandomPokemon = function(){
  return Math.floor(Math.random()*802);
}

const getDetails=function(responseText){
  let details=JSON.parse(responseText);
  console.log(details);
  let pokemon={};
  pokemon["image"]=details.sprites.front_default;
  pokemon["name"]=details.name;
  pokemon["weight"]=details.weight;
  pokemon["type"]=details.types[0].type.name;
  return pokemon;
}

const toHtmlFormat = function(pokemonDetails) {
  let htmlFormat = [];
  htmlFormat.push(`Name: ${pokemonDetails.name}`);
  htmlFormat.push(`Weight: ${pokemonDetails.weight}`);
  htmlFormat.push(`Type: ${pokemonDetails.type}`);
  return htmlFormat.join("\n");
}

const showDetails= function(){
  let details=document.getElementById("details");
  if(this.status==404){
    details.innerText="use a valid pokemon name or id";
    return;
  }
  userPokemon=getDetails(this.responseText);
  details.innerText=toHtmlFormat(userPokemon);
  document.getElementById('img').src=userPokemon.image;
  document.getElementById('battle').style.visibility="visible";
  document.getElementById('restart').style.visibility="hidden";
}

const showPokemon = function(){
  let pokemon= getPokemon();
  let xml=new XMLHttpRequest();
  xml.addEventListener("load", showDetails);
  xml.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
  xml.send();

}

const isWeeker= function(){
  return pokemonTypes[userPokemon.type]["strong"].includes(myPokemon.type);
}


const showVictory= function(){
  let status=document.getElementById("details");
  myPokemon=getDetails(this.responseText);
  let battle = new Battle(userPokemon.type,myPokemon.Type);
  document.getElementById('img').src="";
  status.innerText=battle.getStatus();
  document.getElementById('battle').style.visibility="hidden";
  document.getElementById('restart').style.visibility="visible";
}

const startBattle = function(){
  let pokemon= getRandomPokemon();
  let xml=new XMLHttpRequest();
  xml.addEventListener("load", showVictory);
  xml.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
  xml.send();
}

const addKeyListener = function() {
  let battleButton = document.getElementById('battle');
  let submitButton = document.getElementById('submit_button');
  battleButton.onclick = startBattle;
  submitButton.onclick = showPokemon;
}

window.onload = addKeyListener;
