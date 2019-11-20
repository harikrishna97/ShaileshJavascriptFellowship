/*****************************************************************************
 *Execution         :   1. default node         cmd> node vendingMachine.js 
 * Purpose: Find The Minimum Number of Notes Required For a given amount.
 * @file                 : vendingMachine.js 
 * @overview       : Find The Minimum Number of Notes
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility/utility');




console.log("Enter Amount :: ");
var amount=Utility.input()

console.log("Minimum Number of Notes required is :: "+Utility.calculateMinNotes(amount));


