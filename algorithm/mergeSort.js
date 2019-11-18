/*****************************************************************************
 *Execution         :   1. default node         cmd> node insertionSortString.js 
 * Purpose: Sort the Given String  Array Using Insertion Sort.
 * @file                 : insertionSortInt.js 
 * @overview       : Sorting String Array Using Insertion Sort.
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility/utility')
var stringArr=['aa','cc','ff','xx','ll','ii']

console.log('Array after Sorting Is :: ')
console.log(Utility.mergesort(stringArr));