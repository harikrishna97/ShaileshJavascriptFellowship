const Utility=require('../utility/utility');
console.log("Prime Numbers in a range of 0 - 1000 are :: ");
var arr=[]

arr=Utility.primeNumberInARange();

var n=arr.length;
//Extending Program to check for anagrams and palindrome
//for(let i=0;i<n;i++){
    isPalindrome(arr)

//}

function isPalindrome(num){
var arr=[]
arr=num;
const n=arr.length
    for(let i=0;i<n;i++){
    
        var rem,sum=0,temp;
    
        temp=arr[i];
    
        while(arr[i]>0){
            rem=arr[i]%10;
            sum=sum*10+rem;
            num=parseInt(arr[i]/10);
        }
    
        if(temp==arr[i]){
            console.log(arr[i]+" is Palindrome");
        }
        
        
    }


}





// function primeNumberInARange(){
//     // var arr;
//     const sum=0
//     for(let i=0;i<=1000;i++){
       
//         var flag=0;
//         for(let j=2;j<i;j++){
            
//             if(i%j==sum){
//                 flag=0
//                 break 
//             }else{
//                 flag=1;
//             } 
//         }
//         if(flag==1){
//             console.log(i+' ');
//         }
        
    
//  }
// }
