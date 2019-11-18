/*****************************************************************************
 *Execution         :   1. default node         cmd> node harmonic.js 
 * Purpose: Print the Harmonic Number Of a given number.
 * @file                 : harmonic.js
 * @overview       : Harmonic Number of given Number
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility/utility');

// do{
 console.log("Enter Number :: ");
    
var n=Utility.input();
// }while(checkN(n));

Utility.harmonic(n);

// check  for N!=0
// function checkN(n){
    
//     if(n===0){
//         console.log("Number should be positive..");
//         return true;
//     }else{
//         return false;
//     }

// }