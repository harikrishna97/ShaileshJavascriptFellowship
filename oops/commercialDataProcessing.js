/*****************************************************************************
 *Execution         :   1. default node         cmd> node  commercialDataProcessing.js  
 * Purpose: 1. StockAccount.java implements a data type that
            might be used by a financial institution to keep track of customer information
 * @file                 : commercialDataProcessing.js  
 * @overview       : Commercial Data Processing
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  29/11/2019 */


 const fs=require('fs')
const Utility=require('../utility/oopsUtility/commercialUtility.js')
var comp=fs.readFileSync('./jsonFiles/company.json','utf8')
 var cust=fs.readFileSync('./jsonFiles/customer.json','utf8')

 const CompObj=JSON.parse(comp)
 const CustObj=JSON.parse(cust)

 const StockObj=new Utility.StockAccount;
stock()
 function stock(){

    console.log('******************** Stock Account *****************');
    console.log('\n1. Create Account\n2. Buy Shares\n3. Sell Shares\n4. Print Details\n5.EXIT\nEnter Your Choice :: ');
    const choice=parseInt(StockObj.input())
    
    switch(choice){

        case 1:StockObj.createAcount(CustObj);break;
        case 2:StockObj.buyShares(CustObj,CompObj);break;
        case 3:StockObj.sellShares(CustObj,CompObj);break;
        case 4:StockObj.printDetails(CustObj,CompObj);break;
        case 5:break;
        default:console.log('Enter Valid Input');break;
        
    }



    
    


 }


