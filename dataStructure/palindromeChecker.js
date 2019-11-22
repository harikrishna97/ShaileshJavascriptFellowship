/*****************************************************************************
 *Execution         :   1. default node         cmd> node  palindromeChecker.js  
 * Purpose: Desc ­> A palindrome is a string that reads the same forward and backward, for
            example, radar, toot, and madam. We would like to construct an algorithm to
            input a string of characters and check whether it is a palindrome.
 * @file                 : palindromeChecker.js                   
 * @overview       : check for String is Palindrome Or Not
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  22/11/2019 
 *****************************************************************************/

 const Utility=require('../utility/dequeue')
 const deque=new Utility.Dequeue

 console.log('Enter String :: ');
 var string=Utility.input()

 var charString=string.split("")
 console.log(charString);

 for(let i=0;i<charString.length;i++){

     deque.addRear(charString[i])


 }

var flag=true;
loop1:
 if(!deque.isEmpty()&&deque.length()>1){
    
     var a=deque.getFront()
     
     
     var b=deque.getRear()
    
    
      deque.removeFront()
      deque.removeRear()
     
     
        if(a==b){
            
         flag=true; 
         
         
        }else{
            flag=false
            break loop1;
        }

    }

    if(flag==true){
        console.log('String '+string+' Is  Palindrome');
        
     }else{
        console.log('String '+string+' Is Not Palindrome');
   
    
     }
 