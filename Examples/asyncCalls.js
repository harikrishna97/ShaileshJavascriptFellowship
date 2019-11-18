/*****************************************************************************
 *Execution         :   1. default node         cmd> node callBack.js 
 * Purpose: Understanding CallBack Using Example.
 * @file                 : callBack.js
 * @overview       :Asynchronous requests will wait for a timer to finish or a request to 
 *                  respond while the rest of the code continues to execute. Then when the 
 *                  time is right a callback will spring these asynchronous requests into action.
 * @author  SHAILESH
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
async function myFunction() {
    // console.log("second");
    return 'second'
    
  }
  

console.log('First');

myFunction().then(result => console.log(result));


console.log('Third');