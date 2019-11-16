const assert=require('chai').assert;
const utility =require('../utility/utility')



describe('leap Year test case', function(){
    
      it('not leap year', function(){
        var result =utility.leapYear(2015);
        console.log(result);
        
        assert.equal(result,false)
        
      });

      it('num leap year', function(){
        var result =utility.leapYear('sejal');
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