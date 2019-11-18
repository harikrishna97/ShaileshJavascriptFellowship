/*****************************************************************************
 *Execution         :   1. default node         cmd> node flipCoinTest.js 
 * Purpose: Testing Different Test case for input number.
 * @file                 : flipCoinTest.js 
 * @overview       :  checking Input is Number or other characters  
 * @author  SHAILESH BORASE
 * @version  node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const assert=require('chai').assert;
const Utility =require('../utility/utility')

describe('\t\t\tFlip Coin Test Cases\n', function(){
    
    it('should return invalid input if not a number', function(){
      var result =Utility.findPercentage(/[^0-9]/);
      console.log("Result Is :: "+result);
      
      assert.equal(result,'invalid input')
      
    });

    it('should return true if valid number', function(){
      var result =Utility.findPercentage(5);
      console.log("Result Is :: "+result);
      
      assert.equal(result,true)
      
    });

    it('should return invalid input if number is null', function(){
      var result =Utility.findPercentage(null);
      console.log("Result Is :: "+result);
      
      assert.equal(result,'invalid input')
      
    });

    it('should return invalid if number is undefined', function(){
      var result =Utility.findPercentage(undefined);
      console.log("Result Is :: "+result);
      
      assert.equal(result,'invalid input')
      
    });
});