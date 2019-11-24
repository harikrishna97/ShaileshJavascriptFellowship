/*****************************************************************************
 *Execution         :   1. default node         cmd> node  primeAnagram2D.js  
 * Purpose: find the number of different binary search trees that can be created
 *          using these given Node/number
 * @file                 : primeAnagram2D.js  
 * @overview       : number of Binary search tree created using given node
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  21/11/2019 
 *****************************************************************************/
const Utility=require('../utility/dsUtility')

var arr=[]
var arr2=[]
for(let i=2;i<1000;i++){
    if(Utility.isPrime(i)){
        arr.push(i)
    }

}
console.log(arr+' ');
var range =100,k=0;

for(let j=0;j<primes.length;j++){
    for(let k=j+1;k<primes.length-1;k++){
        var result=Utility.primeAnagramOrNot(primes[j],primes[k])
    if(result==true){
    arr.push(primes[j])
    // arr.push(primes[k])   
    }
 }
}















// function primes() {
//     try {
//         var primes = [];
//         var primeAnagrams=[]
//         // let start = 0;
//         // let end = 100;
//         var arr=[]
//         for (let i = 0; i < 10; i++) {
//             let start = 0;
//         let end = 100;
//             var arr=[]
//             primes[i] = Utility.primeNumberInARange(start, end)
//             // console.log(primes);
            
//             for(let j=0;j<primes.length;j++){
//                 for(let k=j+1;k<primes.length-1;k++){
//                    var result=Utility.primeAnagramOrNot(primes[j],primes[k])
//                     if(result==true){
//                         arr.push(primes[j])
//                         // arr.push(primes[k])   
//                     }
//                 }
//             }
//             // primeAnagrams[i]=arr
//             //  console.log(start + " " + end + ":" + "[" +arr+ "]");
//               start = start + 100;
//               end = end + 100;
//               console.log('\n\n\nAnagrams Number Are :: '+arr+' ');

//         }
//     } catch (e) {
//         console.log(e.message);
//     }

// }
// primes()