/*****************************************************************************
 *Execution         :   1. default node         cmd> node wordFromAwordList.js 
 * Purpose: Find the Word From A word list Using Binary search.
 * @file                 : wordFromAwordList.js 
 * @overview       : Find Word From a word list
 * @author  SHAILESH
 * @version  node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility/utility')

const stringArr=['aa','bb','cc','dd','ee']
console.log('Array contains :: '+stringArr);


console.log("Enter Word To be Search :: ");
var key=Utility.input()


console.log(Utility.binarySearchForString(stringArr,key)? " word Is found":"Word Is Not Found");
