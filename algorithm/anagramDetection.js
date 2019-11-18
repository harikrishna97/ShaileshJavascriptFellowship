/*****************************************************************************
 *Execution         :   1. default node         cmd> node anagram.js 
 * Purpose: Check whether two strings are Anagrams or not.
 * @file                 : anagram.js
 * @overview       : strings are Anagrams or not
 * @author  SHAILESH
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility//utility')

console.log("Enter First Word :: ");
var word1=Utility.input();

console.log("Enter Second Word :: ");
var word2=Utility.input();

console.log(Utility.checkAnagrams(word1,word2)? 'Words are Anagram':'Words are not Anagram');




