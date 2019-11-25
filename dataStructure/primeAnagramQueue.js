/*****************************************************************************
 *Execution         :   1. default node         cmd> node  primeAnagram2D.js  
 * Purpose: Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Queue using
            the Linked List and Print the Anagrams from the Queue. Note no Collection Library
            can be used.
 * @file                 : primeAnagram2D.js  
 * @overview       : Prime Anagram number strored in QUEUE and print in a stored order
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  22/11/2019 
 *****************************************************************************/
const Utility=require('../utility/dsUtility')
const qUtility=require('../utility/queue')
var que=new qUtility.Queue;
var arr=[]

var array=[['000-100  :: ['],['100-200  :: ['],['200-300  :: ['],['300-400  :: ['],['400-500  :: ['],['500-600  :: ['],['600-700  :: ['],['700-800  :: ['],['800-900  :: ['],['900-1000 :: [']]
for(let i=2;i<1000;i++){
    if(Utility.isPrime(i)){
        arr.push(i)
    }

}
  // console.log(arr+' ');
var range =1000;

for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length-2;j++){
        if(Utility.primeAnagramOrNot(arr[i],arr[j])){
            if(arr[i]<=range){
                if(arr[j]<=range){
                    que.enqueue(arr[i]);
                    que.enqueue(arr[j]);
                    // console.log( array[k]+ " ");

                }
            }
            
        }
       
    }

}
//console.log( array+ "\n "); 
console.log('Number which are prime and anagrams  stored in a Queue are :: ');
 que.display();
/*

*/