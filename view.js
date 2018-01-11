const getUserPokemonId= function(){
  return document.getElementById('user_pokemon').value.toLowerCase();
}

const makeVisible= function(id){
  document.getElementById(id).style.visibility="visible";
}

const makeHidden= function(id){
  document.getElementById(id).style.visibility="hidden";
}

const fetchDetails= function(id,operation){
  let xml=new XMLHttpRequest();
  xml.addEventListener("load",operation );
  xml.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}/`);
  xml.send();
}

let displayResult= function(result){
  document.getElementById("pokemonDetails").innerText=result;
}

let displayError= function(error){
  document.getElementById("pokemonDetails").innerText=error;
}

let displayUserPokemon=function(image){
  document.getElementById("img").src=image;
}

let displayGamePokemon=function(image){
  document.getElementById("image").src=image;
}

let displayPokemon= function(pokemonDetails){
  details=`Name:${pokemonDetails.name}\nWeight:${pokemonDetails.weight}\nType:${pokemonDetails.type}`
  image=pokemonDetails.image;
  document.getElementById("pokemonDetails").innerText=details;
}


const addKeyListener = function() {
  let battleButton = document.getElementById('battle');
  let submitButton = document.getElementById('submit_button');
  battleButton.onclick = showBattleResult;
  submitButton.onclick = showPokemonDetails;
}

const loadGame = function(){
  startGame();
  addKeyListener();
}

window.onload = loadGame;
