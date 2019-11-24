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


var arrSize;
var StringArr=[]
console.log("Enter Size Of Array :: ");
arrSize=Utility.input()

console.log("Enter "+arrSize+" Elements");

for(let i=0;i<arrSize;i++){
    console.log("Enter "+i+" Element ::");
    StringArr[i]=Utility.input();
}

console.log('Sorted Array using Insertion Sort Is :: ')
Utility.insertionSortString(StringArr);
