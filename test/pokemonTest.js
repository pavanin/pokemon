const assert=require("chai").assert;
const Pokemon = require("../pokemon.js");

describe("pokemon",()=>{
  let pokemonDetails={}
  before(()=>{
    pokemonDetails={
      sprites:{
        front_default:"pokemon.png"
      },
      name:"pokemon",
      order:2,
      types:{
        0:{
          type:{
            name:"pokemonType"
          }
        }
      }
    }
  })
  describe("getName",()=>{
    it("it will give the pokemon name",()=>{
      assert.deepEqual(new Pokemon(pokemonDetails).getName(),"pokemon");
    })
  }),
  describe("getType",()=>{
    it("it will give the pokemon type",()=>{
      assert.deepEqual(new Pokemon(pokemonDetails).getType(),"pokemonType");
    })
  }),
  describe("getOrder",()=>{
    it("it will give the pokemon order",()=>{
      assert.deepEqual(new Pokemon(pokemonDetails).getOrder(),2);
    })
  }),
  describe("getimage",()=>{
    it("it will give the image of the pokemon",()=>{
      assert.deepEqual(new Pokemon(pokemonDetails).getImage(),"pokemon.png");
    })
  })
})
