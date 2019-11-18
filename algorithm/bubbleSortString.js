/*****************************************************************************
 *Execution         :   1. default node         cmd> node bubbleSortString.js 
 * Purpose: Sort the Given string  Array Using BubbleSort.
 * @file                 : bubbleSortString.js
 * @overview       : Sorting string Array Using Bubble Sort
 * @author  SHAILESH
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility/utility')


var arrSize;
var intArr=[]
console.log("Enter Size Of Array :: ");
arrSize=Utility.input()

//intArr=Utility.inputStringArray(arrSize);

console.log("Enter "+arrSize+" Elements");

for(let i=0;i<arrSize;i++){ 
    console.log("Enter "+i+" Element ::");
    intArr[i]=Utility.input()
}

console.log('Sorted Array using Bubble Sort Is :: ')
Utility.bubbleSortInt(intArr);

