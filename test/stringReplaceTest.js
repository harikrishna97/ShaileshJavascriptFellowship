const assert=require('chai').assert;
const Utility =require('../utility/utility')



describe('\t\t\tUserName test cases :: ', function(){
    //pass
    it('should return true if length is less than 3 character ::', function(){
      let result =Utility.stringReplacer('H');
      console.log("Result is :: "+result);
      
      assert.equal(result,'short length')
      
    }); 

    it('should return invalid if UserName is other than Char', function(){
      let result =Utility.stringReplacer('123434');
      console.log("Result is :: "+result);
      
      assert.equal(result,'invalid name')
      
    });
      //pass
      it('positive Test case\n should return true if input is correct', function(){
        let result =Utility.stringReplacer('Hari');
        console.log("Result is :: "+result);
        
        assert.equal(result,true)
        
      });
    });