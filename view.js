const getUserPokemonId= function(){
  return document.getElementById('user_pokemon').value.toLowerCase();
}

const changeState= function(id,state){
  document.getElementById(id).style.visibility=state;
}

const fetchDetails= function(id,callback){
  let xml=new XMLHttpRequest();
  xml.addEventListener("load", callback);
  xml.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}/`);
  xml.send();
}

let displayPokemon= function(pokemonDetails){
  details=`Name:${pokemonDetails.name}\nWeight:${pokemonDetails.weight}\nType:${pokemonDetails.type}`
  image=pokemonDetails.image;
  document.getElementById("pokemonDetails").innerText=details;
  document.getElementById("img").src=image;
}


const addKeyListener = function() {
  let battleButton = document.getElementById('battle');
  let submitButton = document.getElementById('submit_button');
  // battleButton.onclick = showBattleResult;
  submitButton.onclick = showPokemonDetails;
}

const loadGame = function(){
  // startGame();
  addKeyListener();
}

window.onload = loadGame;
