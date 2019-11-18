/*****************************************************************************
 *Execution         :   1. default node         cmd> node gambler.js 
 * Purpose: Gambling game.
 * @file                 : gambler.js 
 * @overview       : Gambling Game
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility = require('../utility/utility');
var stake, goal, trials;
console.log("Enter Stake Price :: ");
stake = Utility.input();

console.log("Enter Stake Goal :: ");
goal = Utility.input();

console.log("Enter Number Of Time :: ");
trials = Utility.input();

Utility.gambler(stake,goal,trials)




