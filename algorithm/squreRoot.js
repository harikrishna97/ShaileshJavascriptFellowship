/*****************************************************************************
 *Execution         :   1. default node         cmd> node squareRoot.js 
 * Purpose: Find Square Root of Given Number using Newtons Method.
 * @file                 : squareRoot.js 
 * @overview       : Square Root of Given Number
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility = require('../utility/utility');

console.log("Enter The Number to Find SqureRoot :: ");
var number = Utility.input();

Utility.findSqureRoot(number);
