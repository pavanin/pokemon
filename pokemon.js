let userPokemon={};
let myPokemon={};

let pokemonTypes = {
  fire : {
    strong: ['steel','bug','ice','grass'],
    weak : ['rock','water','ground']
  },
  water : {
    strong: ['fire','ground','rock'],
    weak: ['electric','grass']
  },
  grass : {
    strong: ['water','ground','rock'],
    weak: ['fire','ice','poison','flying','bug']
  },
  electric : {
    strong: ['water','flying'],
    weak: ['ground','rock']
  },
  normal : {
    strong: [],
    weak: ['fighting']
  },
  ground : {
    strong: ['fire','electric','poison','rock','steel'],
    weak: ['water','grass','ice']
  },
  rock : {
    strong: ['fire','ice','flying','bug'],
    weak: ['water','grass','fighting','ground','steel']
  },
  fighting : {
    strong: ['normal','ice','rock','dark','steel'],
    weak: ['flying','psychic','fairy']
  },
  steel : {
    strong: ['rock','ice','fairy'],
    weak: ['fire','ground','fighting']
  },
  ice : {
    strong: ['grass','ground','flying','dragon'],
    weak: ['fire','fighting','rock','steel']
  },
  poison : {
    strong: ['grass','fairy'],
    weak: ['ground','psychic']
  },
  psychic : {
    strong: ['fighting','poison'],
    weak: ['bug','ghost','dark']
  },
  bug : {
    strong: ['grass','psychic','dark'],
    weak: ['fire','flying','rock']
  },
  flying : {
    strong: ['grass','fighting','bug'],
    weak: ['electric','ice','rock']
  },
  dragon : {
    strong: ['dragon'],
    weak: ['ice','dragon','fairy']
  },
  fairy : {
    strong: ['fighting','dragon','dark'],
    weak: ['poison','steel']
  },
  ghost : {
    strong: ['psychic','ghost'],
    weak: ['ghost','dark']
  },
  dark : {
    strong: ['psychic','ghost'],
    weak: ['fighting','bug','fairy']
  },
}

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

const getStatus= function(){
  if(isWeeker()){
    return("you lost!");
  }
  return("you won!");
}

const showVictory= function(){
  let status=document.getElementById("details");
  myPokemon=getDetails(this.responseText);
  status.innerText=getStatus();
  document.getElementById('img').src="";
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
