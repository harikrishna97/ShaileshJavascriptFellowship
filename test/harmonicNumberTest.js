const assert=require('chai').assert;
const Utility =require('../utility/utility')



describe('Harmonic Number test case', function(){
    
      it('should return true if not a Number', function(){
        var result =Utility.harmonic(/[a-zA-Z]/);
        console.log("Result Is :: "+result);
        
        assert.isNotNumber(result)
        
      });

      it('should return true if number is 0', function(){
        var result =Utility.harmonic(0);
        console.log("Result Is :: "+result);
        
        assert.equal(result,'invalid Input')
        
      });

      it('should return true if not null', function(){
        var result =Utility.harmonic(' ');
        console.log("Result Is :: "+result);
        
        assert.equal(result,'invalid Input')
        
      });
});