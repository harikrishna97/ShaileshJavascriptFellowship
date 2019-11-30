/*****************************************************************************
 *Execution         :   1. default node         cmd> deckOfDeckTest.js 
 * Purpose: Testing Different Test case for input array.
 * @file                 : deckOfDeckTest.js 
 * @overview       :  checking Input is array or space,null or undefined
 * @author  SHAILESH BORASE
 * @version  node v8.10.0    npm 3.5.2
 * @since   
 *****************************************************************************/
const assert=require('chai').assert;
const Utility =require('../../utility/oopsUtility/deckOfCardsUtility')
const Obj=new Utility.DeckOfCards

describe('\t\t\tDeckOfDeck Test Cases\n', function(){
  var array=[]
    it('should return undefined array if empty array', function(){
        
      var result =Obj.printResult(array);
      console.log("Result Is :: "+result);
      
      assert.equal(result,undefined)
      
    });


    it('should return undefined array if empty array', function(){
        
      var result =Obj.printResult(array);
      console.log("Result Is :: "+result);
      
      assert.equal(result,undefined)
      
    });

    it('should return undefined array if no argument', function(){
        
      var result =Obj.printResult();
      console.log("Result Is :: "+result);
      
      assert.equal(result,undefined)
      
    });


    it('should return True array if right argument', function(){
        var array=['Heart 8' , 'Diamond Q' , 'Club 9' , 'Spade 9' , 'Diamond 5']
      var result =Obj.printResult(array);
      console.log("Result Is :: "+result);
      
      assert.equal(result,true)
      
    });

});