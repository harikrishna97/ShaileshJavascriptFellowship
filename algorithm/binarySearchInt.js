/*****************************************************************************
 *Execution         :   1. default node         cmd> node binarySearchInt.js 
 * Purpose: Binary search for integer array .
 * @file                 : binarySearchInt.js 
 * @overview       : search a integer number from given integer array
 * @author  SHAILESH
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility/utility')

//const intArr=['aa','b','cc','dd']
const intArr=[1,2,3,4,5,6,7,8,9]
console.log('Array contains :: '+intArr);


console.log("Enter Number To be Search :: ");
var key=parseInt(Utility.input())


Utility.binarySearchForInt(intArr,key);



