/*****************************************************************************
 *Execution         :   1. default node         cmd> node callBack.js 
 * Purpose: Understanding CallBack Using Example.
 * @file                 : callBack.js
 * @overview       : A callback is a function that is to be executed after another 
 *                   function has finished executing — hence the name ‘call back’.
 * @author  SHAILESH
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/


    function first(){
        console.log("first Function");

    }
  
    function second(){
    console.log("Second Function");
    }
  
  first();

  second();