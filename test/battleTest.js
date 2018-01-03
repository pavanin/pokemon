const assert=require("chai").assert;
const Battle = require("../battle.js");
describe('battle',()=>{
  describe('hasUserWon',()=>{
    it('it should return true when user pokemon can defeat my pokemon',()=>{
      assert.isTrue(new Battle("fire","bug").hasUserWon());
    }),
    it('it should return false when user pokemon cannot defeat my pokemon',()=>{
      assert.isNotTrue(new Battle("ghost","bug").hasUserWon());
    })
  }),
  describe('getStatus',()=>{
    it("it should return YOU WON! when user pokemon defeats my pokemon",()=>{
      assert.deepEqual(new Battle("fire","bug").getStatus(),"you won!")
    }),
    it("it should return YOU LOST! when my pokemon defeats user pokemon",()=>{
      assert.deepEqual(new Battle("ghost","bug").getStatus(),"you lost!")
    })
  })
});
