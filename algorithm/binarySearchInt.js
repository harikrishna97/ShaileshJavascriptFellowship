const Utility=require('../utility/utility')

const intArr=[1,2,3,4,5,6,7,8,9]

console.log("Enter Number To be Search :: ");
var key=Utility.input()

var first=0;
var last=intArr.length
binarySearchForInt(intArr,key,first,last);

function binarySearchForInt(intArr,key){
    var first=0;
    var last=intArr.length
    var mid;
    while(first<=last){
        mid=(first+last)/2

        if(key>intArr[mid]){
            fisrt=mid+1
        }
        else if(intArr[mid]==key){
        console.log("Element "+key+" is found at location :: "+mid);
        break
        }
        else{
            last=mid-1
        }
    }
    if(first>last){
        console.log("Element "+key+" is not found");
        
    }


}
