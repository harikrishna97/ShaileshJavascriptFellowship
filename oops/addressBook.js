/*****************************************************************************
 *Execution         :   1. default node         cmd> node  addressBook.js  
 * Purpose: 1. JSON Inventory Data Management of Rice, Pulses and Wheats
                a. Desc ­> Create a JSON file having Inventory Details for Rice, Pulses and Wheats
                with properties name, weight, price per kg.
                b. Use Library : Java JSON Library , For IOS JSON Library use
                NSJSONSerialization for parsing the JSON .
                c. I/P ­> read in JSON File
                d. Logic ­> Get JSON Object in Java or NSDictionary in iOS. Create Inventory
                Object from JSON. Calculate the value for every Inventory.
                e. O/P ­> Create the JSON from Inventory Object and output the JSON String
 * @file                 : numberOfBST.js  
 * @overview       : Inventory Management System for Grains
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  26/11/2019 
 *****************************************************************************/
const oopsUtility=require('../utility/oopsUtility/addressBookUtility')

 const address=oopsUtility.inputFromFile('./jsonFiles/addressBookData.json')
 const jsonObj=JSON.parse(address)
// console.log(data);

const AddressObj=new oopsUtility.Address;
do{
   console.log('************** Address Book Details ****************');
   console.log('1. Add New Person \n2. Show Details Of Address Book \n3. Update Informateion \n4. Delete Person');
   console.log('Enter Your Choice :: ');
   let choice=parseInt(oopsUtility.input())

   switch(choice){

      case 1: AddressObj.createProfile(jsonObj); break;
      case 2: AddressObj.displayDetail(jsonObj); break;
      case 3: AddressObj.updateProfile(jsonObj); break;
      case 4: AddressObj.deleteDetail(); break;
      case 5: console.log('Thank You..'); break;

      //  default:console.log('Enter Valid Choice ');break;
      
      
   }
 
}while(checkChoice=(choice)=>{

   if(choice >5||choice <1||choice==null||choice ==''||choice ==undefined){
      console.log('Enter valid Choice only');
      
      return true
   }
   
      return false;
   
});
 
 

