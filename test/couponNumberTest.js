/*****************************************************************************
 *Execution         :   1. default node         cmd> couponNumberTest.js 
 * Purpose: Testing Different Test case for input number.
 * @file                 : couponNumberTest.js 
 * @overview       :  checking Input is Number or other characters,symbol,space,null or undefined
 * @author  SHAILESH BORASE
 * @version  node v8.10.0    npm 3.5.2
 * @since   
 *****************************************************************************/
  const assert=require('chai').assert;
  const Utility =require('../utility/utility')

  describe('\t\t\tCoupon Number Test Cases\n', function(){
    
    it('should return true if not a number', function(){
      var result =Utility.generateDistinctCoupon(/[^0-9]/);
      console.log("Result Is :: "+result);
      
      assert.equal(result,'invalid input')
      
    });

    it('should return true if valid number', function(){
      var result =Utility.generateDistinctCoupon(10);
      console.log("Result Is :: "+result);
      
      assert.equal(result,true)
      
    });

    it('should return invalid input if number is null', function(){
      var result =Utility.generateDistinctCoupon(null);
      console.log("Result Is :: "+result);
      
      assert.equal(result,'invalid input')
      
    });

    it('should return invalid if number is undefined', function(){
      var result =Utility.generateDistinctCoupon(undefined);
      console.log("Result Is :: "+result);
      
      assert.equal(result,'invalid input')
      
    });
});