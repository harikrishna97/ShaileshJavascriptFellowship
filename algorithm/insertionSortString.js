const Utility=require('../utility/utility')


var arrSize;
var intArr=[]
console.log("Enter Size Of Array :: ");
arrSize=Utility.input()

console.log("Enter "+arrSize+" Elements");

for(let i=0;i<arrSize;i++){
    console.log("Enter "+i+" Element ::");
    intArr[i]=Utility.input();
}

console.log('Sorted Array using Insertion Sort Is :: ')
Utility.insertionSortInt(intArr);
