/*****************************************************************************
 *Execution         :   1. default node         cmd> node triplate.js 
 * Purpose: Find the triplates whose sum is zero.
 * @file                 : triplate.js
 * @overview       : triplates whose sum is zero
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility/utility');

  console.log("Enter the Size of array :: ");

   var n=Utility.input();

    var arr=[];
    for(let i=0;i<n;i++){
        console.log("Enter Element ["+i+"] ::");
    
    arr[i]=parseInt(Utility.input());
}
//  

// console.log(" Array is :: "+arr);

//var arr=[1,2,-3,1,2]
console.log("Number of Distinct Triplate are :: "+Utility.findDistinctTriplate(arr));


