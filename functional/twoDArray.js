/*****************************************************************************
 *Execution         :   1. default node         cmd> node leapYear.js 
 * Purpose: Print the 2 D array for Integer.
 * @file                 : twoDArray.js
 * @overview       : Print 2 D array
 * @author  SHAILESH
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility = require('../utility/utility');

console.log("Enter Number Of Rows :: ");
var rows = Utility.input()
console.log("Enter Number Of Columns :: ");
var columns = Utility.input()
Utility.print2DArray(rows,columns);



 