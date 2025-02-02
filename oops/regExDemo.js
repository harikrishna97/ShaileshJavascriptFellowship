/*****************************************************************************
 *Execution         :   1. default node         cmd> node  inventoryManagementSystem.js  
 * Purpose: Desc ­> Read in the following message: Hello <<name>>, We have your full
            name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
            Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
            Use Regex to replace name, full name, Mobile#, and Date with proper value.
          b. I/P ­> read in the Message
          c. Logic ­> Use Regex to do the following
            Replace <<name>> by first name of the user ( assume you are the user)
            replace <<full name>> by user full name.
            replace any occurance of mobile number that should be in format
            91­xxxxxxxxxx by your contact number.
            replace any date in the format XX/XX/XXXX by current date.
          d. O/P ­> Print the Modified Message.
 * @file                 : numberOfBST.js  
 * @overview       : replace first name last name phone number usinng regex
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  26/11/2019 
 *****************************************************************************/
const Utility=require('../utility/oopsUtility/regexUtility')

const TEMPLATE=Utility.inputFromFile('regexTEMPLATE.txt','utf8')

// console.log(TEMPLATE);
console.log('Fill Your Detials :: ');
do{
 console.log('Enter Your First Name :: ');
 var firstName=Utility.input().trim()
}while(checkString(firstName))
//  name=/<<name>>/

do{
console.log('Enter Your Last Name :: ');
var lastName=Utility.input().trim()
}while(checkString(lastName))
do{
console.log('Enter Your Phone Number :: ');
var mobile=Utility.input().trim()
}while(checkMobile(mobile))

var date =new Date();
var currentDate=date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear()
// console.log(currentDate);

var result=Utility.replaceRegex(firstName,lastName,mobile,currentDate,TEMPLATE);
console.log(result);

function checkMobile(mobile){
    var format=/[^0-9]/
    if(mobile.length!=10||format.test(mobile)||mobile==null||mobile==''||mobile==undefined){
        console.log('Not Valid Phone Number\nPhone Number Should contain onnly numbers of length 10');
        return true
    }else{
        return false
    }
}


function checkString(string){
    var format=/[^a-zA-Z]/
    if(format.test(string)||string==null||string==undefined||string==''){
        console.log('Enter Valid First Name !\nFirst Name Should  Contains Only Characters');
        return true;
    }
    else{ 
        return false
    }

}





