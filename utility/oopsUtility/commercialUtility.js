var readline = require('readline-sync');
var file=require('fs')

class StockAccount{

    /*
    @description: constructor of StockAccount class for initialising values 
    @param: Name,NumberOfShare,Price
    @return:void
    */
    constructor(name,share,price){
        this.Name=name
        this.NumberOfShare=share
        this.Price=price

    }

    /*
    @description: funtion to take Input From User
    @param: no parameter
    @return:input
    */
    input() {

        let input = readline.question("");
        return input;

    }

   /*
    @description: Function to Create New Account 
    @param: custObj
    @return:void
    */
    createAcount(custObj){
        console.log('Enter Your Name :: ');
        var name=this.input()

        var id=Math.round(Math.random()*100)
        console.log('How Many Share You Want To Add ? :: ');
        var numberOfShare=this.input()
        console.log('\n');
        console.log('Hi, '+name+' Your Id is :: '+id);

        custObj.Customer.push(
            {
                "Name": name,
                "Id": id,
                "NumberOfShare": numberOfShare
            })

            console.log(custObj);

            var data=file.writeFileSync('../oops/jsonFiles/customer.json',JSON.stringify(custObj),'utf8')
            console.log('Account Created Successfully..');
            console.log(data);
    }

    /*
    @description: Function to Buy Shares 
    @param: custObj,CompObj
    @return:void
    */
    buyShares(CustObj,CompObj){
        var flag=false;

        console.log(CustObj);

        var Obj=CustObj.Customer;
        console.log('Enter Your Id :: ');
        var id=this.input()

        for(var i in Obj){
            if(Obj[i].Id==id){
                var index=CustObj.Customer.indexOf(Obj[i])
                var customerName=Obj[i].Name
                console.log();
                console.log('*********** Company Information *********');
                console.log();
                console.log(CompObj);
                var Obj1=CompObj.Company
                console.log();

                console.log('Enter Symbol Of Company :: ');
                
                var symbol=this.input()
                for(let i in Obj1){
                    if(Obj1[i].Symbol==symbol){
                        console.log()
                        console.log('See company details :: ')
                        console.log(Obj1[i]);
                        var CompanyName1=Obj1[i].Name
                        var symbol1=Obj1[i].Symbol
                        var numberOfShare=Obj1[i].NumberOfShare

                        do{
                            console.log('Enter Number of Share You Want To Buy? ::');
                            var num=this.input()
                            if(num>numberOfShare){
                            console.log('invalid input..\n Number Of Shares Should be less than Company Share..');
                                flag=false
                            }else{
                                flag=true

                            }
                            
                        }while(!flag)       
                        var tempData='Customer Name Is :: '+customerName+'\nCompany Name'+CompanyName1+'And Symbol is :: '+symbol1+'\nAnd He Buy '+num+' Shares';
                        console.log(tempData);
                        
                        var num1=parseInt(CustObj.Customer[index].NumberOfShare)
                        var num2=parseInt(CompObj.Company[i].Share)
                        var number=parseInt(num)

                        var custTotal=num1+number;
                        var compTotal=num2-number

                        if(num2>number){

                            CustObj.Customer[index].NumberOfShare=custTotal;
                            CompObj.Company[i].Share=compTotal;

                            var data1=file.writeFileSync('../oops/jsonFiles/customer.json',JSON.stringify(CustObj),'utf8')
                            var data2=file.writeFileSync('../oops/jsonFiles/company.json',JSON.stringify(CompObj),'utf8')

                            var date=new Date()

                            console.log('Time Of Buying The Share is :: '+Math.floor(date.getHours())+ 'Sec');
                            console.log('Date Of Buying The Share is :: '+Math.floor(date.getDay())+'/'+date.getMonth()+'/'+date.getFullYear());
                            
                            


                        }

                    }
                            
                        
                    }
                }    
                
            }
        }
       
        /*
        @description: Function to Print Details 
        @param: custObj,CompObj
        @return:void
        */
        printDetails(CustObj,CompObj){

            console.log('Customer Shares Details is :: ');
            console.log(CustObj);
            console.log('Company Shares Details is :: ');
            console.log(CompObj);
            
            
            
        }

        /*
        @description: Function to Sell Shares 
        @param: custObj,CompObj
        @return:void
        */
        sellShares(CustObj,CompObj){
            var flag=false;

            console.log(CustObj);
    
            var Obj=CustObj.Customer;
            console.log('Enter Your Id :: ');
            var id=this.input()
    
            for(var i in Obj){
                if(Obj[i].Id==id){
                    var index=CustObj.Customer.indexOf(Obj[i])
                    var customerName=Obj[i].Name
                    console.log();
                    console.log('*********** Company Information *********');
                    console.log();
                    console.log(CompObj);
                    var Obj1=CompObj.Company
                    console.log();
    
                    console.log('Enter Symbol Of Company :: ');
                    
                    var symbol=this.input()
                    for(let i in Obj1){
                        if(Obj1[i].Symbol==symbol){
                            console.log()
                            console.log('See company details :: ')
                            console.log(Obj1[i]);
                            var CompanyName1=Obj1[i].Name
                            var symbol1=Obj1[i].Symbol
                            var numberOfShare=Obj1[i].NumberOfShare

                            do{
                                console.log('Enter Number of Share You Want To Sell? ::');
                                var num=this.input()
                                if(num>numberOfShare){
                                console.log('invalid input..\n Number Of Shares Should be less than Company Share..');
                                    flag=false
                                }else{
                                    flag=true
    
                                }
                                
                            }while(!flag) 
                            
                            var tempData='Customer Name Is :: '+customerName+'\nCompany Name'+CompanyName1+'And Symbol is :: '+symbol1+'\nAnd He Buy '+num+' Shares';
                        console.log(tempData);
                        
                        var num1=parseInt(CustObj.Customer[index].NumberOfShare)
                        var num2=parseInt(CompObj.Company[i].Share)
                        var number=parseInt(num)

                        var custTotal=num1-number;
                        var compTotal=num2+number

                        if(num2>number){

                            CustObj.Customer[index].NumberOfShare=custTotal;
                            CompObj.Company[i].Share=compTotal;

                            var data1=file.writeFileSync('../oops/jsonFiles/customer.json',JSON.stringify(CustObj),'utf8')
                            var data2=file.writeFileSync('../oops/jsonFiles/company.json',JSON.stringify(CompObj),'utf8')

                            var date=new Date()

                            console.log('Time Of Selling The Share is :: '+Math.floor(date.getHours())+ 'Sec');
                            console.log('Date Of Selling The Share is :: '+Math.floor(date.getDay())+'/'+date.getMonth()+'/'+date.getFullYear());
                        

                        } 
                    }  
                }        
            }    
    

        }
    }

}

module.exports={
    StockAccount
}

    