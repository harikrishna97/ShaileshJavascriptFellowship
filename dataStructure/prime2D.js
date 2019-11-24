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

function primes() {
    try {
        var primes = [];
        var start = 0;
        var end = 100;
        for (let i = 0; i < 10; i++) {
            primes[i] = Utility.primeNumberInARange(start, end)
            console.log(start + " " + end + ":" + "[" + primes[i]+ "]");
            start = start + 100;
            end = end + 100;
        }
    } catch (e) {
        console.log(e.message);
    }

}
primes();