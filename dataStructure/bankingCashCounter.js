/*****************************************************************************
 *Execution         :   1. default node         cmd> node  bankingCashCounter.js  
 * Purpose: Desc ­> Create a Program which creates Banking Cash Counter where people
            come in to deposit Cash and withdraw Cash. Have an input panel to add people
            to Queue to either deposit or withdraw money and dequeue the people. Maintain
            the Cash Balance.
 * @file                 : bankingCashCounter.js                  
 * @overview       : implement Queue data strucure
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  21/11/2019 
 *****************************************************************************/

const Utility=require('../utility/queue')
var queue=new Utility.Queue;
console.log('Enter Number Of Peoples Waiting in the Queue :: ');
        var nPeople=Utility.input()
bankingCashCounter(nPeople);

function bankingCashCounter(nPeople){
    try{
        const format=/[^0-9]/
        if(format.test(nPeople)||nPeople==null||nPeople==undefined||nPeople==''){
            throw 'invalid input'
        }else{
        var amount=10000
        

        // Utility.val
        for(let i=0;i<nPeople;i++){
            console.log('Enter Customer Name :: ');
            var custName=Utility.input()
            queue.enqueue(custName)

            var oldAmount=amount

            console.log('Balance Is :: '+amount);
            do{
                console.log('Welcome TO the Bank! ')
                    console.log(custName+' is in Queue Now')
                
                console.log('1. Withdraw Amount\n2. Deposit Amount');
                console.log('Enter Your Choice :: ');
                var ch=parseFloat(Utility.input())

                switch(ch){

                    case 1:{//withdrawMoney();break;
                        console.log('Enter Amount You Want To Withdraw :: ');
                            var withdrwAmount=Utility.input()
                        
                            if(withdrwAmount>0&&withdrwAmount<=amount){
                                amount=amount-withdrwAmount;
                        
                                if(amount==0){
                                    console.log('Balance is zero Now');
                                    
                                }
                                console.log('Updated amount is :: '+amount);
                                
                            }else{
                                console.log('Enter valid input');
                                return
                            }
                            
                            }break;
                    case 2:{//depositMoney();break;
                            console.log('Enter Amount You Want To Deposit :: ');
                            var depositAmount=parseFloat(Utility.input())

                            var oldAmount=amount
                    
                    
                            if(depositAmount>0){
                                var amount=(oldAmount)+(depositAmount)
                            console.log(amount);
                            
                                    //console.log('Old Balance is :: '+oldAmount);
                                    
                                    console.log('Updated Balance is :: '+amount);
                                    
                                }
                                // console.log('Updated amount is :: '+amount);
                                
                            else{
                                console.log('Enter valid input');
                                return
                            }
                
                    }break;
                    default: console.log('Wrong Choice!\nEnter Valid Input');break;
                
                }
            }while(ch<0&&ch>=2);
        }
    }
    } catch(error){
        console.log(error);
        
        console.log('Enter Number Of Peoples Waiting in the Queue :: ');
        var nPeople=Utility.input()
        bankingCashCounter(nPeople);
    return error
    }
}    
//    function withdrawMoney(){
//        console.log('Enter Amount You Want To Withdraw :: ');
//        var withdrwAmount=Utility.input()

//        if(withdrwAmount>0&&withdrwAmount<=amount){
//            amount=amount-withdrwAmount;

//            if(amount==0){
//                console.log('Balance is zero Now');
               
//            }
//            console.log('Updated amount is :: '+amount);
           
//        }else{
//            console.log('Enter valid input');
//            return
//        }

//        }
       
//        function depositMoney(){
//             console.log('Enter Amount You Want To Deposit :: ');
//             var depositAmount=parseFloat(Utility.input())

//             var oldAmount=amount
//     console.log("fdsf"+oldAmount);
    
//             if(depositAmount>0){
//                 var amount=(oldAmount)+(depositAmount)
//                console.log(amount);
               
//                     //console.log('Old Balance is :: '+oldAmount);
                     
//                     console.log('Updated Balance is :: '+amount);
                    
//                 }
//                 // console.log('Updated amount is :: '+amount);
                
//             else{
//                 console.log('Enter valid input');
//                 return
//             }
 
//         }



       

//   }
   
   

