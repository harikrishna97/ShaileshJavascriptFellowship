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
console.log('Enter Number Of Test Cases :: ');
var testcases=Utility.input()

while(testcases>0){
    console.log('Enter Test Case :: ');
    var number=Math.floor(Utility.input())
    var totalNumber=Utility.numberOfBinarySearchTree(number);
    console.log('Number Of Binary search Tree created using '+number+' Node Is :: '+totalNumber);
    testcases--
    
}




 