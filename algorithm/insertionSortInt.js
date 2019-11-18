/*****************************************************************************
 *Execution         :   1. default node         cmd> node insertionSortInt.js 
 * Purpose: Sort the Given integer  Array Using Insertion Sort.
 * @file                 : insertionSortInt.js 
 * @overview       : Sorting integer Array Using Insertion Sort.
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility/utility')

//const intArr=[1,255,232,67,0,4,345,26,98]

var arrSize;
var intArr=[]
console.log("Enter Size Of Array :: ");
arrSize=Utility.input()

console.log("Enter "+arrSize+" Elements");

for(let i=0;i<arrSize;i++){
    console.log("Enter "+i+" Element ::");
    intArr[i]=parseInt(Utility.input())
}

console.log('Sorted Array using Insertion Sort Is :: ')
Utility.insertionSortInt(intArr);


