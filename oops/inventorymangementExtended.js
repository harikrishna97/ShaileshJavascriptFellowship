/*****************************************************************************
 *Execution         :   1. default node         cmd> node  inventorymanagementExtended.js  
 * Purpose: 1. JSON Inventory Data Management of Rice, Pulses and Wheats
                Desc ­> Extend the above program to Create InventoryManager to manage the
                Inventory. The Inventory Manager will use InventoryFactory to create Inventory
                Object from JSON. The InventoryManager will call each Inventory Object in its list
                to calculate the Inventory Price and then call the Inventory Object to return the
                JSON String. The main program will be with InventoryManager
 * @file                 : inventorymanagementExtended.js 
 * @overview       : Inventory Management System for Grains
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  26/11/2019 
 *****************************************************************************/

const oopsUtility=require('../utility/oopsUtility/inventoryManager')

const file=require('fs')

const UtilityData=require('../utility/oopsUtility/inventoryUtility.js')


const data=file.readFileSync('./jsonFiles/inventoryDetailForGrains.json')
const jsonObj=JSON.parse(data)
inventory(jsonObj);

const Object=new UtilityData.InventoryClass(jsonObj)


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
            // console.log('\t\n\t'+name+'\t'+weight+'\t'+price);
            var total=inventoryObj.total(weight,price);
            console.log('\t'+(i+1)+')\n\tName :: '+name+'\n');
            console.log('\tWeight :: '+weight+'\n');
            console.log('\tPrice :: '+price+'\n');
            console.log('\tTotal Price for '+jsonObj.Rice[i].Name+' :: '+total);
            
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
            console.log('\tTotal Price for '+jsonObj.Pulses[i].Name+' :: '+total);
        
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
            console.log('\tTotal Price for '+jsonObj.Wheats[i].Name+' :: '+total);
            
        }
}    
        console.log('...............................................................................'); 
        function save() {
            file.writeFileSync('./jsonFiles/inventoryDetailForGrains.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
                if (err) throw err
                console.log('File Saved!!')
            })

        } 

        console.log('\n1. Rise\t\t2. Wheat\t3. Pulses\t4. EXIT');
        
        console.log('Enter What Do You Want To Purchase :: ');
         var choice=parseInt(Object.input())

         switch(choice){

            case 1:
                    console.log('Enter Rice Variety You Want To Purchase :: ');
                    console.log(jsonObj.Rice);
                    console.log('1. '+jsonObj.Rice[0].Name);
                    console.log('2. '+jsonObj.Rice[1].Name);
                    console.log('3. '+jsonObj.Rice[2].Name);
                    
                    var choice=parseInt(Object.input())
                    
                    switch(choice){
                        
                        case 1:console.log(jsonObj.Rice[0]);
                                var quantity;
                                    do{
                                        console.log('Enter How Much Kg You Want :: ');
                                         quantity=Object.input()
                                        if(quantity>jsonObj.Rice[0].Weight){
                                            console.log('invalid input..\n Enter again');
                                            flag=false
                                        }else{
                                            flag=true
            
                                        }
                                    
                                    }while(!flag)  
                                //changes remainng
                                    var newWeight=jsonObj.Rice[0].Weight-quantity
                                    jsonObj.Rice[0]=
                                        {
                                            "Name":jsonObj.Rice[0].Name,
                                            "Weight":newWeight,
                                            "Price":jsonObj.Rice[0].Price

                                        };
                                        // save()

                                    file.writeFileSync('./jsonFiles/inventoryDetailForGrains.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
                                        if (err) throw err
                                    })
                                        

                                    console.log('Your bill is, Rice Name :: '+jsonObj.Rice[0].Name+'  Quantity :: '+quantity+' Kg is :: '+jsonObj.Rice[0].Price*quantity+' Rupees')
                                    break;
                        case 2:console.log(jsonObj.Rice[1]);
                                    do{
                                        console.log('Enter How Much Kg You Want :: ');
                                        var quantity=Object.input()
                                        if(quantity>jsonObj.Rice[1].Weight){
                                            console.log('invalid input..\n Enter again');
                                            flag=false
                                        }else{
                                            flag=true
            
                                        }
                                    
                                    }while(!flag)  
                                //changes remainng 
                                var newWeight=jsonObj.Rice[1].Weight-quantity
                                    jsonObj.Rice[1]=
                                        {
                                            "Name":jsonObj.Rice[1].Name,
                                            "Weight":newWeight,
                                            "Price":jsonObj.Rice[1].Price

                                        };
                                        // save()

                                    file.writeFileSync('./jsonFiles/inventoryDetailForGrains.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
                                        if (err) throw err
                                    })
                                        

                                    console.log('Your bill is, Rice Name :: '+jsonObj.Rice[1].Name+'  Quantity :: '+quantity+' Kg is :: '+jsonObj.Rice[1].Price*quantity+' Rupees')
                                break;
                        case 3:console.log(jsonObj.Rice[2]);
                                    do{
                                        console.log('Enter How Much Kg You Want :: ');
                                        var quantity=Object.input()
                                        if(quantity>jsonObj.Rice[2].Weight){
                                            console.log('invalid input..\n Enter again');
                                            flag=false
                                        }else{
                                            flag=true
            
                                        }
                                    
                                    }while(!flag)  
                                //changes remainng
                                var newWeight=jsonObj.Rice[2].Weight-quantity
                                    jsonObj.Rice[2]=
                                        {
                                            "Name":jsonObj.Rice[2].Name,
                                            "Weight":newWeight,
                                            "Price":jsonObj.Rice[2].Price

                                        };
                                        // save()

                                    file.writeFileSync('./jsonFiles/inventoryDetailForGrains.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
                                        if (err) throw err
                                    })
                                        

                                    console.log('Your bill is, Rice Name :: '+jsonObj.Rice[2].Name+'  Quantity :: '+quantity+' Kg is :: '+jsonObj.Rice[2].Price*quantity+' Rupees') 
                                break;
                        

                    }
                    
                    break;

            case 2:
                    console.log('Enter Wheat Variety You Want To Purchase :: ');
                            
                    console.log(jsonObj.Wheats);
                    console.log('1. '+jsonObj.Wheats[0].Name);
                    console.log('2. '+jsonObj.Wheats[1].Name);
                    console.log('3. '+jsonObj.Wheats[2].Name);
                    
                    var choice=parseInt(Object.input())
                    switch(choice){
                        case 1:console.log(jsonObj.Wheats[0]);
                                    do{
                                        console.log('Enter How Much Kg You Want :: ');
                                        var quantity=Object.input()
                                        if(quantity>jsonObj.Wheats[0].Weight){
                                            console.log('invalid input..\n Enter again');
                                            flag=false
                                        }else{
                                            flag=true
            
                                        }
                                    
                                    }while(!flag)  
                                //changes remainng
                                var newWeight=jsonObj.Wheats[0].Weight-quantity
                                jsonObj.Wheats[0]=
                                    {
                                        "Name":jsonObj.Wheats[0].Name,
                                        "Weight":newWeight,
                                        "Price":jsonObj.Wheats[0].Price

                                    };
                                    // save()

                                file.writeFileSync('./jsonFiles/inventoryDetailForGrains.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
                                    if (err) throw err
                                })
                                    

                                console.log('Your bill is, Wheat Name :: '+jsonObj.Wheats[0].Name+'  Quantity :: '+quantity+' Kg is :: '+jsonObj.Wheats[0].Price*quantity+' Rupees')  
                                break;
                        case 2:console.log(jsonObj.Wheats[1]);
                                    do{
                                        console.log('Enter How Much Kg You Want :: ');
                                        var quantity=Object.input()
                                        if(quantity>jsonObj.Wheats[1].Weight){
                                            console.log('invalid input..\n Enter again');
                                            flag=false
                                        }else{
                                            flag=true
            
                                        }
                                    
                                    }while(!flag)  
                                //changes remainng 
                                var newWeight=jsonObj.Wheats[1].Weight-quantity
                                jsonObj.Wheats[0]=
                                    {
                                        "Name":jsonObj.Wheats[1].Name,
                                        "Weight":newWeight,
                                        "Price":jsonObj.Wheats[1].Price

                                    };
                                    // save()

                                file.writeFileSync('./jsonFiles/inventoryDetailForGrains.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
                                    if (err) throw err
                                })
                                    

                                console.log('Your bill is, Wheat Name :: '+jsonObj.Wheats[1].Name+'  Quantity :: '+quantity+' Kg is :: '+jsonObj.Wheats[1].Price*quantity+' Rupees')  
                                break;
                        case 3:console.log(jsonObj.Wheats[2]);
                                    do{
                                        console.log('Enter How Much Kg You Want :: ');
                                        var quantity=Object.input()
                                        if(quantity>jsonObj.Wheats[2].Weight){
                                            console.log('invalid input..\n Enter again');
                                            flag=false
                                        }else{
                                            flag=true
            
                                        }
                                    
                                    }while(!flag)  
                                //changes remainng
                                var newWeight=jsonObj.Wheats[2].Weight-quantity
                                jsonObj.Wheats[0]=
                                    {
                                        "Name":jsonObj.Wheats[2].Name,
                                        "Weight":newWeight,
                                        "Price":jsonObj.Wheats[2].Price

                                    };
                                    // save()

                                file.writeFileSync('./jsonFiles/inventoryDetailForGrains.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
                                    if (err) throw err
                                })
                                    

                                console.log('Your bill is, Wheat Name :: '+jsonObj.Wheats[2].Name+'  Quantity :: '+quantity+' Kg is :: '+jsonObj.Wheats[2].Price*quantity+' Rupees')   
                                break;
                    }            
                            
                    break;
         
            case 3:
                    console.log('Enter Pulses Variety You Want To Purchase :: ');
                            
                    console.log(jsonObj.Pulses);
                    console.log('1. '+jsonObj.Pulses[0].Name);
                    console.log('2. '+jsonObj.Pulses[1].Name);
                    console.log('3. '+jsonObj.Pulses[2].Name);
                    
                    var choice=parseInt(Object.input())
                    switch(choice){
                        case 1:console.log(jsonObj.Pulses[0]);
                                    do{
                                        console.log('Enter How Much Kg You Want :: ');
                                        var quantity=Object.input()
                                        if(quantity>jsonObj.Pulses[0].Weight){
                                            console.log('invalid input..\n Enter again');
                                            flag=false
                                        }else{
                                            flag=true
            
                                        }
                                    
                                    }while(!flag)  
                                //changes remainng\
                                var newWeight=jsonObj.Pulses[0].Weight-quantity
                                jsonObj.Pulses[0]=
                                    {
                                        "Name":jsonObj.Pulses[0].Name,
                                        "Weight":newWeight,
                                        "Price":jsonObj.Pulses[0].Price

                                    };
                                    // save()

                                file.writeFileSync('./jsonFiles/inventoryDetailForGrains.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
                                    if (err) throw err
                                })
                                    

                                console.log('Your bill is, Pulse Name :: '+jsonObj.Pulses[0].Name+'  Quantity :: '+quantity+' Kg is :: '+jsonObj.Pulses[0].Price*quantity+' Rupees')   
                                break;
                        case 2:console.log(jsonObj.Pulses[1]);
                                    do{
                                        console.log('Enter How Much Kg You Want :: ');
                                        var quantity=Object.input()
                                        if(quantity>jsonObj.Pulses[1].Weight){
                                            console.log('invalid input..\n Enter again');
                                            flag=false
                                        }else{
                                            flag=true
            
                                        }
                                    
                                    }while(!flag)  
                                //changes remainng
                                var newWeight=jsonObj.Pulses[1].Weight-quantity
                                jsonObj.Pulses[1]=
                                    {
                                        "Name":jsonObj.Pulses[1].Name,
                                        "Weight":newWeight,
                                        "Price":jsonObj.Pulses[1].Price

                                    };
                                    // save()

                                file.writeFileSync('./jsonFiles/inventoryDetailForGrains.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
                                    if (err) throw err
                                })
                                    

                                console.log('Your bill is, Pulse Name :: '+jsonObj.Pulses[1].Name+'  Quantity :: '+quantity+' Kg is :: '+jsonObj.Pulses[1].Price*quantity+' Rupees')   
                                break;
                        case 3:console.log(jsonObj.Pulses[2]);
                                    do{
                                        console.log('Enter How Much Kg You Want :: ');
                                        var quantity=Object.input()
                                        if(quantity>jsonObj.Pulses[2].Weight){
                                            console.log('invalid input..\n Enter again');
                                            flag=false
                                        }else{
                                            flag=true
            
                                        }
                                    
                                    }while(!flag)  
                                //changes remainng 
                                var newWeight=jsonObj.Pulses[2].Weight-quantity
                                jsonObj.Pulses[2]=
                                    {
                                        "Name":jsonObj.Pulses[2].Name,
                                        "Weight":newWeight,
                                        "Price":jsonObj.Pulses[2].Price

                                    };
                                    // save()

                                file.writeFileSync('./jsonFiles/inventoryDetailForGrains.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
                                    if (err) throw err
                                })
                                    

                                console.log('Your bill is, Pulse Name :: '+jsonObj.Pulses[2].Name+'  Quantity :: '+quantity+' Kg is :: '+jsonObj.Pulses[2].Price*quantity+' Rupees')  
                                break;
                    }            
                            
                    break;
            case 4: console.log('Thank You For Visiting... ');break;   

            default:console.log('Not valid input\nEnter Again :: ');break;

         }
        

        //  function save() {
        //     file.writeFileSync('../oops/jsonFiles/inventoryDetailForGrains.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
        //         if (err) throw err
        //         console.log('File Saved!!')
        //     })

        // }






















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


