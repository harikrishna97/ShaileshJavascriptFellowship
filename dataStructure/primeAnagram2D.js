/*****************************************************************************
 *Execution         :   1. default node         cmd> node  primeAnagram2D.js  
 * Purpose: Extend the Prime Number Program and store only the numbers in that range that are
            Anagrams. For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range.
            Further store in a 2D Array the numbers that are Anagram and numbers that are not
            Anagram
 * @file                 : primeAnagram2D.js  
 * @overview       : Prime Anagram number strored in 2D Array
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  22/11/2019 
 *****************************************************************************/
const Utility=require('../utility/dsUtility')

var arr=[]
var arr2=[]
var array=[['000-100  :: ['],['100-200  :: ['],['200-300  :: ['],['300-400  :: ['],['400-500  :: ['],['500-600  :: ['],['600-700  :: ['],['700-800  :: ['],['800-900  :: ['],['900-1000 :: [']]
for(let i=2;i<1000;i++){
    if(Utility.isPrime(i)){
        arr.push(i)
    }

}
//  console.log(arr+' ');
var range =100,k=0;

for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length-2;j++){
        if(Utility.primeAnagramOrNot(arr[i],arr[j])){
            if(arr[i]<=range){
                if(arr[j]<=range){
                    array[k].push(arr[i]);
                    array[k].push(arr[j])
                    // console.log( array[k]+ " ");

                }
            }else{
                //console.log("my name is hari");
                
                range=range+100;
                k++
                if(arr[j]<=range){
                    array[k].push(arr[i])
                    array[k].push(arr[j])
                    // console.log( array[k]+ " ");
                }
            }
            
        }
       
    }

}
//console.log( array+ "\n "); 
console.log('Number which are prime and anagrams stored in a Stack are :: ');

for(let i=0;i<array.length;i++){
    console.log(array[i]+']');
    // console.log();
    
    
}
/*
OUTPUT :: 
bridgeit@bridgeit-LIVA-Z2V:~/Desktop/HariKrishnaFelloship/dataStructure$ node primeAnagram2D.js 
Number which are prime and anagrams are :: 
000-100  :: [,13,31,17,71,37,73,79,97]
100-200  :: [,113,131,137,173,139,193,179,197]
200-300  :: [,239,293]
300-400  :: [,313,331,337,373,379,397]
400-500  :: [,419,491]
500-600  :: []
600-700  :: [,613,631,619,691]
700-800  :: []
800-900  :: []
900-1000 :: []
bridgeit@bridgeit-LIVA-Z2V:~/Desktop/HariKrishnaFelloship/dataStructure$ 
*/












