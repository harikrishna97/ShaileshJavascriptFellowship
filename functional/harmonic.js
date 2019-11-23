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

console.log("Enter Number :: ");
    
var n=Utility.input();
Utility.harmonic(n);

