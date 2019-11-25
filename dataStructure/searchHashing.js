/*****************************************************************************
 *Execution         :   1. default node         cmd> node  searchHashing.js 
 * Purpose: Desc ­> Create a Slot of 10 to store Chain of Numbers that belong to each Slot to
            efficiently search a number from a given set of number
 * @file                 : numberOfBST.js  
 * @overview       : search number from file using hashing if present remove it else add it into file 
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  25/11/2019 
 *****************************************************************************/

 const Utility=require('../utility/dsUtility')

 const arr=[34,55,64,87,23,78,36]
 console.log('Array contains :: '+arr);

 for(let i=0;i<arr.length;i++){
     var result=arr[i]%11
    //  if(result==undefined)
 }
 
 console.log('Enter Number nTo be search :: ');
 var search=Utility.input()

 