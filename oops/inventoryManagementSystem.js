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
 * @overview       : number of Binary search tree created using given node
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  21/11/2019 
 *****************************************************************************/
const fs=require('fs')
const oopsUtility=require('../utility/oopsUtility/inventoryManager')

const data=oopsUtility.inputFromFile('./jsonFiles/inventoryDetailForGrains.json')
const inventory=JSON.parse(data)
// console.log(inventory);

// const entries=Object.entries(inventory.Rice)
// console.log(entries);

const  key=Object.keys(inventory)
console.log(' '+key+' ');



const values=Object.values(JSON.parse(inventory[0].Rice))
console.log(values+' ');


// console.log(inventory.Rice)

// console.log('Available Stock Is :: ');
// for(let i=0;i<inventory.Rice.length;i++){
//     console.log(inventory.Rice[i].Name+'\t'+inventory.Rice[i].Weight+'\t'+inventory.Rice[i].Price);
// }
// console.log(inventory.Ric);


