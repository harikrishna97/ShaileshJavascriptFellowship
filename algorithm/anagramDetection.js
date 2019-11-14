const Utility=require('../utility//utility')

console.log("Enter First Word :: ");
var word1=Utility.input();

console.log("Enter Seconnd Word :: ");
var word2=Utility.input();

console.log(Utility.checkAnagrams(word1,word2)? 'Words are Anagram':'Words are not Anagram');

//C


