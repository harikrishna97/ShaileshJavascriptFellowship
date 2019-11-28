/*****************************************************************************
 *Execution         :   1. default node         cmd> node  addressBook.js  
 * Purpose: a. Desc ­> Write a program to read in Stock Names, Number of Share, Share Price.
                Print a Stock Report with total value of each Stock and the total value of Stock.
            b. I/P ­> N number of Stocks, for Each Stock Read In the Share Name, Number of
                Share, and Share Price
            c. Logic ­> Calculate the value of each stock and the total value
            d. O/P ­> Print the Stock Report.
            e. Hint ­> Create Stock and Stock Portfolio Class holding the list of Stocks read
               from the input file. Have functions in the Class to calculate the value of each
               stock and the value of total stocks
 * @file                 : numberOfBST.js  
 * @overview       : Stock Management System for Grains
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  26/11/2019 
 *****************************************************************************/
const oopsUtility=require('../utility/oopsUtility/stockUtility')
const data=oopsUtility.inputFromFile('./jsonFiles/stockData.json')
const jsonObj=JSON.parse(data)

console.log(jsonObj);

for(let i=0;i<jsonObj.Stock.length;i++){
var shareName  =jsonObj.Stock[i].StockName;
var numberOfShares  =jsonObj.Stock[i].NumberOfShares;
var sharePrice  =jsonObj.Stock[i].SharePrice;

let stockObject=new oopsUtility.Stock(shareName,numberOfShares,sharePrice)
var total=stockObject.total()
console.log('Name :: '+shareName+'\nNumber Of Shares :: '+numberOfShares+'\nShare Price :: '+sharePrice)
 console.log('Price Of one Share is :: '+sharePrice);
console.log('\nTotal Price of Stock is :: '+total);



}
