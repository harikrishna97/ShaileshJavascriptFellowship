/*****************************************************************************
 *Execution         :   1. default node         cmd> node  palindromeChecker.js  
 * Purpose: Desc ­> A palindrome is a string that reads the same forward and backward, for
            example, radar, toot, and madam. We would like to construct an algorithm to
            input a string of characters and check whether it is a palindrome.
 * @file                 : palindromeChecker.js                   
 * @overview       : check for String is Palindrome Or Not
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  22/11/2019 
 *****************************************************************************/
const Utility=require('../utility/dsUtility')
 console.log('Enter Month :: ');
 var month=parseInt(Utility.input())
 
 console.log('Enter Year :: ');
 var year=parseInt(Utility.input())

 Utility.calender(month,year);