const assert=require('chai').assert;
const app=require('../app')
sayHelloResult = app.sayHello();

describe('App', function(){
    
      it('sayHello should return hello', function(){
        
        assert.equal(sayHelloResult, 'hello');
      });
  
      
});