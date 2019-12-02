/*****************************************************************************
 *Execution         :   1. default node         cmd> addressBookTest.js 
 * Purpose: Testing Different Test case for Address Book.
 * @file                 : addressBookTest.js 
 * @overview       :  checking Input  space,null or undefined
 * @author  SHAILESH BORASE
 * @version  node v8.10.0    npm 3.5.2
 * @since   
 *****************************************************************************/
const assert=require('chai').assert;
const Utility =require('../../utility/oopsUtility/addressBookUtility')
const Obj=new Utility.Address

describe('\t\t\taddressBook Test Cases\n', function(){
  
    it('should return invalid address  if empty ', function(){
        
      var result =Obj.createProfile('');
      console.log("Result Is :: "+result);
      
      assert.equal(result,'invalid address')
      
    });

    it('should return invalid address  if null ', function(){
        
        var result =Obj.createProfile(null);
        console.log("Result Is :: "+result);
        
        assert.equal(result,'invalid address')
        
      });

      it('should return invalid address  if undefined ', function(){
        
        var result =Obj.createProfile(undefined);
        console.log("Result Is :: "+result);
        
        assert.equal(result,'invalid address')
        
      });


});
