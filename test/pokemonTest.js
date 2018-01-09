const assert=require("chai").assert;
const Pokemon = require("../pokemon.js");

describe("pokemon",()=>{
  let pokemon;
  before(()=>{
    pokemon = new Pokemon("image","pokemon",90,"fire");
  })
  describe("getName",()=>{
    it("it will give the pokemon name",()=>{
      assert.deepEqual(pokemon.getName(),"pokemon");
    })
  }),
  describe("getType",()=>{
    it("it will give the pokemon type",()=>{
      assert.deepEqual(pokemon.getType(),"fire");
    })
  }),
  describe("getOrder",()=>{
    it("it will give the pokemon order",()=>{
      assert.deepEqual(pokemon.getWeight(),90);
    })
  }),
  describe("getimage",()=>{
    it("it will give the image of the pokemon",()=>{
      assert.deepEqual(pokemon.getImage(),"image");
    })
  }),
  describe("can defeat",()=>{
    it("should defeat the weaker pokemon",()=>{
      let oppPokemon= new Pokemon("image","otherpokemon",78,"grass")
      assert.isTrue(pokemon.canDefeat(oppPokemon))
    }),
    it("should not defeat the stronger pokemon",()=>{
      let oppPokemon= new Pokemon("image","otherpokemon",78,"water")
      assert.isNotTrue(pokemon.canDefeat(oppPokemon))
    })
  })
})
