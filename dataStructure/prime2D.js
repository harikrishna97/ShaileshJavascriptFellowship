/*****************************************************************************
 *Execution         :   1. default node         cmd> node  numberOfBST.js  
 * Purpose: find the number of different binary search trees that can be created
 *          using these given Node/number
 * @file                 : numberOfBST.js  
 * @overview       : number of Binary search tree created using given node
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  21/11/2019 
 *****************************************************************************/
const Utility=require('../utility/dsUtility')
var result = Utility.primeNumberInARange()//getPrimeNumber(100)
console.log('Prime Numbers Is '+result);

// let primenumbers = Utility.getPrimeNumber(1000);
//     console.log(primenumbers);
//     primearray = [[]];
//     let range = 100;
//     let j = 0;
//     let row = 0;
//     for (let i = 0; i < primenumbers.length; i++) {
//         // insert if primenumber is less than range
//         if (primenumbers[i] < range) {
//             primearray[row][j] = primenumbers[i];
//             j++;
//         }
//         // increment range and insert if primenumber is greater than range
//         else {
//             range += 100;
//             row = row + 1;
//             j = 0;
//             primearray[row] = [];
//             primearray[row][j] = primenumbers[i];
//         }
//     }
//     for (i = 0; i < 10; i++)
//         console.log(primearray[i]);