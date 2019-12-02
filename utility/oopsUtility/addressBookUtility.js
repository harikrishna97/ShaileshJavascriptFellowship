


const thisObj=require('../dsUtility')
const readline=require('readline-sync')
var file = require('fs')

nameRestriction = /[a-z]/g;
contactRestriction = /[0-9]/g;


class Address {

    /*
    @description: constructor of Address class for initialising values 
    @param: firstName,lastName
    @return:void
    */
    constructor(firstName,lastName) {
        this.name=firstName
        this.lastName=lastName;
        
    }
    
        /*
        @description: function To Create User Profile for Address Book 
        @param: address
        @return:void
        */
        createProfile(address){
            try{
                if(address==null||address==undefined||address==''){

                    throw 'invalid address'
                }else{
                    console.log(address);
                    
                    console.log('Fill Your Detials :: ');
                    do{
                        console.log('Enter Your First Name :: ');
                        var firstName=thisObj.input().trim()
                    }while(this.checkString(firstName))
                    

                    do{
                    console.log('Enter Your Last Name :: ');
                    var lastName=thisObj.input().trim()
                    }while(this.checkString(lastName))

                    do{
                        console.log('Enter Your Street Name :: ');
                        var street=thisObj.input().trim()
                        }while(this.checkString(street))

                    do{
                    console.log('Enter Your City Name :: ');
                    var city=thisObj.input().trim()
                    }while(this.checkString(city))

                    do{
                        console.log('Enter Your State Name :: ');
                        var state=thisObj.input().trim()
                        }while(this.checkString(state))

                    do{
                        console.log('Enter Your Nationality :: ');
                        var nationality=thisObj.input().trim()
                    }while(this.checkString(nationality))
                        
                    do{
                        console.log('Enter Your Zip Code :: ');
                        var zipCode=thisObj.input().trim()
                    }while(this.checkZipCode(zipCode))
                    do{
                        console.log('Enter Your Phone Number :: ');
                        var phoneNum=thisObj.input().trim()
                    }while(this.checkMobile(phoneNum))        
                    
                
                
            //Pushing User Profile TO the Json 
            address.Person.push(
                {
                    "Name": firstName,
                    "LastName": lastName,
                    "Address":[ {
                    "Street": street,
                    "City": city,
                    "State": state,
                    "Nationality": nationality,
                    "Zip Code": zipCode, 
                    "PhoneNum": phoneNum
                                    
                    }]
                });

                //Writing Content TO File
                file.writeFileSync('../oops/jsonFiles/addressBookData.json', JSON.stringify(address), 'utf-8', function (err) {
                    if (err) throw err
                    console.log('Done!');
                })

                console.log("Your Information As Per Our Record IS:\n \r Name: " + firstName + "\n \r Last Name: " + lastName)
                console.log("Address: " + street + "," + city + ',' + state + ',' + nationality + ',' + zipCode)
                console.log("Phone Number is: " + phoneNum)
                return true
            }
            }catch(error){
                console.log(error);
                console.log('Enter address Again :: ');
                
                // this.createProfile(this.address);
                return error;
                
            }        
            
    }
         
        /*
        @description: function To Validating Mobile Number 
        @param: mobile
        @return:true/false
        */
        checkMobile(mobile){
            var format=/[^0-9]/
            if(mobile.length!=10||format.test(mobile)||mobile==null||mobile==''||mobile==undefined){
                console.log('Not Valid Phone Number\nPhone Number Should contain onnly numbers of length 10');
                return true
            }else{
                return false
            }
        }
    
         /*
        @description: function To validating ZipCode
        @param: zipCode
        @return:true/false
        */
        checkZipCode(zipCode){
            var format=/[^0-9]/
            if(zipCode.length!=6||format.test(zipCode)||zipCode==null||zipCode==''||zipCode==undefined){
                console.log('Not Valid Zip Code\nZip Code Should contain onnly numbers of length 6');
                return true
            }else {
                return false
            }
        }
    
        /*
        @description: function To validating String
        @param: string
        @return:true/false
        */
        checkString(string){
            var format=/[^a-zA-Z]/
            if(format.test(string)||string==null||string==undefined||string==''){
                console.log('Enter Valid input !');
                return true;
            }
            else{ 
                return false
            }
    
        }


        /*
        @description: function To Update User Profile
        @param: address
        @return:void
        */
        updateProfile(address) {
            var temp = -1;
            if (address.Person.length > 0) {
                for (let i = 0; i < address.Person.length; i++) {
                    console.log("Address book Details:  ")
                    console.log(address.Person[i]);
                    console.log();
                }
                console.log()
                console.log("**Welcome**")
                console.log()
                var name = readline.question("Enter the Name of the Profile: ")
                for (var k = 0; k < address.Person.length; k++) {
                    if (name == address.Person[k].Name) {
                        console.log("What Do you Want to do ? ")
                        console.log("1 : Update Address")
                        console.log("2 : Delete")
                        console.log("3 : Sort")
                        console.log("4 : Save")
                        console.log("5 : Exit")
    
                        var key = readline.question("Enter your Choice: ")
                        switch (parseInt(key)) {
                            case 1:
                                /**
                                 * Update Address
                                 */
                                console.log("What Do You want to Update ?")
                                console.log("1 : Street")
                                console.log("2 : City")
                                console.log("3 : State")
                                console.log("4 : Nationality")
                                console.log("5 : Zip Code")
                                console.log("6 : Phone Number")
    
                                var choice = readline.question("Enter Your Choice: ")
                                switch (parseInt(choice)) {
                                    case 1:
                                        //Street Update
                                        var sUpdate = readline.question("Enter New Street: ")
                                        while (nameRestriction.test(sUpdate) == false) {
                                            console.log("No Special characters ..Invalid Street! ");
                                            sUpdate = readline.question(" ReEnter New Street: ")
                                        }
                                        var obj = {
                                            "Name": address.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": {
                                                "Street": sUpdate,
                                                "City": address.Person[k]["Address"].City,
                                                "State": address.Person[k]["Address"].State,
                                                "Nationality": address.Person[k]["Address"].Nation,
                                                "Zip": address.Person[k]["Address"].Zip,
                                                "PhoneNum": address.Person[k]["Address"].PhoneNum
                                            }
                                        }
                                        address.Person[k] = obj;
                                        save();
                                        break;
                                    case 2:
                                        //City Update
                                        var cUpdate = readline.question(" Enter New City : ")
                                        while (nameRestriction.test(cUpdate) == false) {
                                            console.log("No Special characters ..Invalid City! ");
                                            cUpdate = readline.question(" ReEnter New City: ")
                                        }
                                        var obj = {
                                            "Name": address.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": {
                                                "Street": address.Person[k]["Address"].Street,
                                                "City": cUpdate,
                                                "State": address.Person[k]["Address"].State,
                                                "Nationality": address.Person[k]["Address"].Nation,
                                                "Zip": address.Person[k]["Address"].Zip,
                                                "PhoneNum": address.Person[k]["Address"].PhoneNum
                                            }
    
                                        }
                                        address.Person[k] = obj;
                                        save()
                                        break;
                                    //State Update
                                    case 3:
                                        var stUpadat = readline.question("Enter the New State: ")
                                        while (nameRestriction.test(stUpadat) == false) 
                                        {
                                            console.log("No Special characters ..Invalid State! ");
                                            stUpadat = readline.question("ReEnter New State: ")
                                        }
                                        var obj = 
                                        {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": 
                                            {
                                                "Street": address.Person[k]["Street"].Street,
                                                "City": address.Person[k]["City"].City,
                                                "State": stUpdate,
                                                "Nationality": address.Person[k]["Nationality"].Nation,
                                                "Zip": address.Person[k]["Zip Code"].Zip,
                                                "PhoneNum": address.Person[k]["Phone Number"].PhoneNum
                                            }
    
                                        }
                                        address.Person[k] = obj;
                                        save()
                                        break;
                                    //Nationality Update
    
                                    case 4:
                                        var nUpadte = readline.question("Enter New Nationality: ")
                                        while (nameRestriction.test(nUpadte) == false) 
                                        {
                                            console.log("No Special characters ..Invalid Nationality! ");
                                            nUpadte = readline.question(" ReEnter New Nationality: ")
                                        }
                                        var obj = 
                                        {
                                            "Name": address.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": 
                                            {
                                                "Street": address.Person[k]["Street"].Street,
                                                "City": address.Person[k]["City"].City,
                                                "State": address.Person[k]["State"].State,
                                                "Nationality": nUpdate,
                                                "Zip": address.Person[k]["Zip Code"].Zip,
                                                "PhoneNum": address.Person[k]["Phone Number"].PhoneNum
                                            }
    
                                        }
                                        address.Person[k] = obj;
                                        save()
                                        break;
    
                                    //Zip Code Update
                                    case 5:
                                        var zUpdate = readline.question("Enter New Zip Code: ")
                                        while(contactRestriction.test(zUpdate) == false && zip.length != 6) {
                                            console.log("Enter 6 digit Number..Invalid Zip Code! ");
                                            zUpdate = readline.question("ReEnter New Zip Code: ")
                                        }
                                        var obj = {
                                            "Name": address.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": {
                                                "Street": address.Person[k]["Street"].Street,
                                                "City": address.Person[k]["City"].City,
                                                "State": address.Person[k]["State"].State,
                                                "Nationality": address.Person[k]["Nationality"].Nation,
                                                "Zip": zUpdate,
                                                "PhoneNum": address.Person[k]["Phone Number"].PhoneNum
                                            }
    
                                        }
                                        address.Person[k] = obj;
                                        save()
                                        break;
    
                                    //Phone number update
    
                                    case 6:
                                        var pUpdate = readline.question("Enter New Phone Number: ")
                                        while (pUpdate > 9999999999 || pUpdate < 999999999) 
                                        {
                                            console.log("Enter 10 digit Phone Number ..Invalid Name! ");
                                            pUpdate = readline.question("ReEnter New Phone Number: ")
                                        }
                                        var obj = {
                                            "Name": address.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": 
                                            {
                                                "Street": address.Person[k]["Street"].Street,
                                                "City": address.Person[k]["City"].City,
                                                "State": address.Person[k]["State"].State,
                                                "Nationality": address.Person[k]["Nationality"].Nation,
                                                "Zip": address.Person[k]["Zip Code"].Zip,
                                                "PhoneNum": pUpdate,
                                            }
    
                                        }
                                        address.Person[k] = obj;
                                        save()
                                        file.writeFileSync('../oops/jsonFiles/addressBookData.json', JSON.stringify(address), 'utf-8');
                                        break;
    
                                    case 7:
                                        console.log("Thank You.....")
                                        break;
                                }
                                break;
    
    
                            /**
                             * Delete Index
                             */
                            case 2:
                                var update = readline.question("Enter the Name which You want to Delete: ")
                                for (let i = 0; i < address.Person.length; i++) {
                                    if (address.Person[i].Name == update) {
                                        var index = address.Person.indexOf(address.Person[i])
    
                                        address.Person.splice(index, 1)
                                        
                                       
    
                                    }
    
                                }
                                save()
                                console.log("Delete Sucessfully.......")
                                break;
    
                            /**
                             * Sort Last Name
                             */
                            case 3:
                                var temp;
                                for (let i = 0; i < address.Person.length; i++) {
                                    for (let j = 0; j < address.Person.length - 1; j++) {
                                        if (address.Person[j].LastName.localeCompare(address.Person[j + 1].LastName) == 1) {
                                            temp = address.Person[j];
                                            address.Person[j] = address.Person[j + 1];
                                            address.Person[j + 1] = temp;
    
    
                                        }
                                    }
                                }
                                console.log(address)
                                save()
                                break;
    
                            /**
                             * Save new Updation
                             */
                            case 4:
                                function save() {
                                    file.writeFileSync('../oops/jsonFiles/addressBookData.json', JSON.stringify(address), 'utf-8', function (err) {
                                        if (err) throw err
                                        console.log('File Saved!!')
                                    })
                                    //file.writeFile('AddressBook.json', JSON.stringify(address), 'utf -8')
    
                                }
                                break;
    
                            case 5:
    
                                console.log('Thank You......')
                                break;
                            default:
                                console.log("Please enter valid option");
                                break;
                        }
                    }
                }
    
            }
            else 
            {
                console.log("Profile Unavilable ....Please create New One ")
                this.createProfile(address)
            }
        }


    /*
    @description: function To Details Of Address Book
    @param: address
    @return:void
    */    
    displayDetail(address)
    {
       if (address.Person.length > 0) 
       {
           for (let i = 0; i < address.Person.length; i++) 
           {
               console.log(address.Person[i])
           }
       }
   }



   /*
    @description: function To Delete the Person
    @param: address
    @return:void
    */
   deleteDetail(address) 
   {
       
       var update = readline.question("Enter the Name which You want to Delete: ")
       for (let i = 0; i < address.Person.length; i++) 
       {
           if (address.Person[i].Name == update) 
           {
               var index = address.Person.indexOf(adress.Person[i])

               address.Person.splice(index, 1)
           }

       }
       console.log("Delete Sucessfully.......")


   }

}    
 

module.exports = {
    Address,
    /*
    @description: function To Take User Input
    @param: no Paramter 
    @return:input
    */
    input(){
        
        let input = readline.question("");
        return input;
    
    },
    
   /*
    @description: function To Take Input From File
    @param: file
    @return:data
    */
    inputFromFile(file){
        const fis=require('fs')  
        var data=fis.readFileSync(file,'utf8')
        // var stringData=data.trim()
    
        return data;
    },
    
    /*
    @description: function To Take Write to File
    @param: file,content
    @return:void
    */
    outputToFile(file,content){
        fos.writeFileSync(file,content,'utf8')
    
    },
    
}










  

