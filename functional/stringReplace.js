/*****************************************************************************
 *Execution         :   1. default node         cmd> node stringReplacer.js 
 * Purpose: Replace the given Name with the user Name.
 * @file                 : stringReplacer.js 
 * @overview       : replace UserName
 * @author  SHAILESH
 * @version node v8.10.0    npm 3.5.2
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility/utility')


     
    console.log("Enter Your Name :: ");
       
    var name=Utility.input();
     
    Utility.stringReplacer(name);
    


  