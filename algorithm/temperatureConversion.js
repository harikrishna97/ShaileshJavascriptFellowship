/*****************************************************************************
 *Execution         :   1. default node         cmd> node leapYear.js 
 * Purpose: Print the year is a Leap Year or not.
 * @file                 : LeapYear.js
 * @overview       : check year is leap year or not
 * @author  SHAILESH
 * @version v12.13.0
 * @since  date 
 *****************************************************************************/
const Utility=require('../utility/utility');
console.log("Enter Temperature in Farnheit :: ");
var farTemp=Utility.input()

console.log("Enter Temperature in Celcius :: ");
var celTemp=Utility.input()

Utility.tempConversion(farTemp, celTemp);
 