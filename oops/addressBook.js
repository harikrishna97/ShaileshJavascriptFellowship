/*****************************************************************************
 *Execution         :   1. default node         cmd> node  addressBook.js  
 * Purpose: 1. The software to be designed is a program that can be used to maintain an address book. An address book
               holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
               phone number.
 * @file                 : addressBook.js  
 * @overview       : Address Book Implementation 
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  27/11/2019 
 *****************************************************************************/
const oopsUtility=require('../utility/oopsUtility/addressBookUtility')

 const address=oopsUtility.inputFromFile('./jsonFiles/addressBookData.json')
 const jsonObj=JSON.parse(address)
// console.log(data);

//Creating Object Of Address Class
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
      console.log('Enter valid Choice only..');
      
      return true
   }
   
      return false;
   
});
 
 

