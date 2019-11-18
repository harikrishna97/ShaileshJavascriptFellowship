/*****************************************************************************
 *Execution         :   1. default node         cmd> node leapYear.js 
 * Purpose: Print the year is a Leap Year or not.
 * @file                 : LeapYear.js
 * @overview       : check year is leap year or not
 * @author  SHAILESH
 * @version v12.13.0
 * @since  date 
 *****************************************************************************/
const assert=require('chai').assert;
const utility =require('../utility/utility')



describe('leap Year test cases', function(){
    
      it('not leap year', function(){
        var result =utility.leapYear(2015);
        console.log(result);
        
        assert.equal(result,false)
        
      });

      it('num leap year', function(){
        var result =utility.leapYear('hari');
        console.log(result);
      assert.isString(result,'is invalids')
      });

      it('leap year', function(){
        var result =utility.leapYear(2016);
        console.log(result);
        
        assert.equal(result,true)
      });

      it('enter valid input', function(){
        var result =utility.leapYear('');
        console.log(result);
        
        assert.equal(result,'is invalids')
      });

     
  
      
});