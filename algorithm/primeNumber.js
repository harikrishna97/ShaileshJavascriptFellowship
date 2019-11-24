/*****************************************************************************
 *Execution         :   1. default node         cmd> node primeNumber.js 
 * Purpose: Print the Prime Number Between 0-1000
 * @file                 : primeNumber.js
 * @overview       : Prime number between 0-1000
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility/utility');
console.log("Prime Numbers in a range of 0 - 1000 are :: ");
var arr=[]
console.log('Prime Number Range From :: ');
var from=Utility.input()
console.log('Prime Number Range To :: ');
var to=Utility.input()
Utility.primeNumberInARange(from,to);


// try {
//     let u = require("../Algorithmic/utililty");
//     let ud = require("./utility");

//     let primenumbers = u.primenumbers(1000);
//     //console.log(primenumbers);
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
// }
// catch (err) {
//     console.log(err)
// }


// //...................

// /**
//    * PURPOSE Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
//    * @param Print  1000 prime number.
//    */

//   function getPrimeNumber(number) {
//     if (number <= 1000) {
//       for (var i = 1; i <= number; i++) {
//         var temp = 0;
//         for (var j = 2; j < i - 1; j++) {
//           if (i % j == 0) {
//             temp = temp + 1;
//           }
//         }
//         if (temp == 0) {
//           console.log("Prime Number:" + i);
//         }
//       }
//       return number;
//     }
//     else {
//       console.log("Number is out of range")
//     }
//   }

//   function isPrime(num) {
//     try {
//       if (num == 0 || num == 1)
//         return false;
//       for (let i = 2; i < num; i++) {
//         if (num % i == 0)
//           return false;
//       }
//       return true;
//     }
//     catch (e) {
//       console.log(e.message);
//     }
//   }