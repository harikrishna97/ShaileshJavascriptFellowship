/*****************************************************************************
 *Execution         :   1. default node         cmd> node primeFactor.js 
 * Purpose: Print the Prime factors of a given number.
 * @file                 : primeFactor.js
 * @overview       : prime factors of a given number
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility= require('../utility/utility');


    console.log("Enter Positive Number :: ");
    var number = Utility.input();

    Utility.primeFactors(number);

