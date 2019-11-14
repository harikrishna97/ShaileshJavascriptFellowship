const Utility=require('../utility/utility')

//const intArr=[1,255,232,67,0,4,345,26,98]

var arrSize;
var intArr=[]
console.log("Enter Size Of Array :: ");
arrSize=Utility.input()

console.log("Enter "+arrSize+" Elements");

for(let i=0;i<arrSize;i++){
    console.log("Enter "+i+" Element ::");
    intArr[i]=Utility.input()
}

console.log('Sorted Array using Bubble Sort Is :: ')
Utility.bubbleSortInt(intArr);


