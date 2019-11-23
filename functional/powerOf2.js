/*****************************************************************************
 *Execution         :   1. default node         cmd> node powerOf2.js 
 * Purpose: Print the table of power of two less than or equals to given number.
 * @file                 : powerOf2.js 
 * @overview       : table of  power of two
 * @author  SHAILESH
 * @version node v8.10.0    npm 3.5.2

 * @since  date 
 *****************************************************************************/
const Utility =  require("../utility/utility");
    console.log("Enter Number :: ");
    var n=Utility.input();

    Utility.findPowerOf2(n);
