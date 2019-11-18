/*****************************************************************************
 *Execution         :   1. default node         cmd> node bubbleSortInt.js 
 * Purpose: Sort the Given Integer Array Using BubbleSort.
 * @file                 : bubbleSortInt.js
 * @overview       : Sorting integer Using Bubble Sort
 * @author  SHAILESH
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

console.log('Sorted Array using Bubble Sort Is :: ')
Utility.bubbleSortInt(intArr);


