const getUserPokemon= function(){
  return document.getElementById('user_pokemon').value.toLowerCase();
}

const changeState= function(id,state){
  document.getElementById(id).style.visibility=state;
}

const xmlHandler= function(callback,id){
  let xml=new XMLHttpRequest();
  xml.addEventListener("load", callback);
  xml.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}/`);
  xml.send();
}

const addKeyListener = function() {
  let battleButton = document.getElementById('battle');
  let submitButton = document.getElementById('submit_button');
  battleButton.onclick = showBattleResult;
  submitButton.onclick = showPokemonDetails;
}
window.onload = addKeyListener;
