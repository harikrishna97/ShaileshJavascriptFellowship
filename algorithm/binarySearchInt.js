const Utility=require('../utility/utility')

const intArr=[1,2,3,4,5,6,7,8,9]
console.log('Array contains :: '+intArr);


console.log("Enter Number To be Search :: ");
var key=Utility.input()


Utility.binarySearchForInt(intArr,key);



