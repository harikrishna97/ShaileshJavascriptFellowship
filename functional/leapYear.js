/*****************************************************************************
 *Execution         :   1. default node         cmd> node leapYear.js 
 * Purpose: Print the year is a Leap Year or not.
 * @file                 : LeapYear.js
 * @overview       : check year is leap year or not
 * @author  SHAILESH
 * @version node v8.10.0    npm 3.5.2
 * @since   
 *****************************************************************************/
  
  
  const Utility=require('../utility/utility'); 
 
   console.log(" enter year ::");
    
   var year=Utility.input();
 
   console.log(Utility.leapYear(year)? 'Year Is leap Year' : 'Year Is Not leap Year' );
      
