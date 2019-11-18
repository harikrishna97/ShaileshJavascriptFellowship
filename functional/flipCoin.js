/*****************************************************************************
 *Execution         :   1. default node         cmd> node flipCoin.js 
 * Purpose: Print the percentage of head and tails after flipping coins with N times.
 * @file                 : flipCoin.js 
 * @overview       : Find percentage of Head And Tails
 * @author  SHAILESH BORASE
 * @version  node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility = require('../utility/utility');

console.log("Enter The Number of Times To Flip Coin");
var number = Utility.input();

Utility.findPercentage(number);


