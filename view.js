const getUserPokemonId= function(){
  return document.getElementById('user_pokemon').value.toLowerCase();
}

const changeState= function(id,state){
  document.getElementById(id).style.visibility=state;
}


const xmlHandler= function(id){
  let xml=new XMLHttpRequest();
  xml.addEventListener("load", callback);
  xml.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}/`);
  xml.send();
}

const showBattleResult = function(){
  let battleResult= getBattleResult();
}

const showPokemonDetails = function(){
  let pokemon = getUserPokemon();
  let pokemonDetails= getPokemonDetails(pokemon)
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
