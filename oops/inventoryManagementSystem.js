/*****************************************************************************
 *Execution         :   1. default node         cmd> node  inventoryManagementSystem.js  
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

const oopsUtility=require('../utility/oopsUtility/inventoryManager')

const data=oopsUtility.inputFromFile('./jsonFiles/inventoryDetailForGrains.json')
const jsonObj=JSON.parse(data)
inventory(jsonObj);
function inventory(jsonObj){

//Rice Verieties    
console.log('...............................................................................');  
console.log('\t\t\tRice Verieties\n ');
// console.log('\t1)\n\tName  \tWeight\tPrice');

for(let i=0;i<jsonObj.Rice.length;i++){

    var name=jsonObj.Rice[i].Name;
    var price=jsonObj.Rice[i].Price;
    var weight=jsonObj.Rice[i].Weight;

    let inventoryObj=new oopsUtility.Rice(name,weight,price);
    var total=inventoryObj.total(weight,price);
    console.log('\t\n\t'+name+'\t'+weight+'\t'+price);
    var total=inventoryObj.total(weight,price);
    console.log('\t'+(i+1)+')\n\tName :: '+name+'\n');
    console.log('\tWeight :: '+weight+'\n');
    console.log('\tPrice :: '+price+'\n');
    console.log('\tTotal Price :: '+total);
    
}


//tPulses Verieties
console.log('...............................................................................');  
console.log('\t\t\tPulses Verieties\n ');
for(let i=0;i<jsonObj.Pulses.length;i++){

    var name=jsonObj.Pulses[i].Name;
    var price=jsonObj.Pulses[i].Price;
    var weight=jsonObj.Pulses[i].Weight;

    let inventoryObj=new oopsUtility.Pulses(name,weight,price);

    var total=inventoryObj.total(weight,price);
    console.log('\t'+(i+1)+')\n\tName :: '+name+'\n');
    console.log('\tWeight :: '+weight+'\n');
    console.log('\tPrice :: '+price+'\n'); 
    console.log('\tTotal Price :: '+total);
   
}


//Wheat Verieties
console.log('...............................................................................');  
console.log('\t\t\tWheat Verieties\n ');
for(let i=0;i<jsonObj.Wheats.length;i++){

    var name=jsonObj.Wheats[i].Name;
    var price=jsonObj.Wheats[i].Price;
    var weight=jsonObj.Wheats[i].Weight;

    let inventoryObj=new oopsUtility.Wheats(name,weight,price);

    var total=inventoryObj.total(weight,price);
    console.log('\t'+(i+1)+')\n\tName :: '+name+'\n');
    console.log('\tWeight :: '+weight+'\n');
    console.log('\tPrice :: '+price+'\n'); 
    console.log('\tTotal Price :: '+total);
       
}


}




















// console.log(inventory);

// const entries=Object.entries(inventory.Rice)
// console.log(entries);

// const  key=Object.keys(inventory)
// console.log(' '+key+' ');



// const values=Object.values(JSON.parse(inventory[0].Rice))
// console.log(values+' ');


// console.log(inventory.Rice)

// console.log('Available Stock Is :: ');
// for(let i=0;i<inventory.Rice.length;i++){
//     console.log(inventory.Rice[i].Name+'\t'+inventory.Rice[i].Weight+'\t'+inventory.Rice[i].Price);
// }
// console.log(inventory.Ric);


