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
//do{
    console.log("Enter Number :: ");
    var n=Utility.input();
//}while(checkN(n));

Utility.findPowerOf2(n);
// check 
// function checkN(n){
//     console.log("hari");
    
//     if(n<0||n>31){
//         console.log("Number Should be in the range (0-31):: ");
//         return true;
//     }else{
//         return false;
//     }

// }