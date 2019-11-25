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

const Utility = require('../utility/dequeue')
const deque = new Utility.Dequeue

console.log('Enter String :: ');
var string = Utility.input()

var charString = string.split("")
console.log("char string after slpit--> ", charString);

for (let i = 0; i < charString.length; i++) {

    console.log(charString[i])
    deque.addRear(charString[i])


}
console.log("deque--> ", deque.length());

var flag = true;


// loop1:
for (var i = 0; i < deque.length(); i++) {

    if (flag) {
        var a = deque.getFront()
        console.log("a--> ", a)
        var b = deque.getRear()
        console.log("b--> ", b)

        if (a != b) {
            flag = false
            console.log("flag after cmopare--> ", flag)
            break
            //  console.log('flag 1'+flag);
            //  break loop1;
        }

        deque.removeFront()
        deque.removeRear()

        // var a=deque.removeFront()
        // console.log('a '+a);

        // var b=deque.removeRear()
        // console.log('b '+b);


        //console.log(deque.length());
        //if(deque.removeFront()!=deque.removeRear()){

    }
    // if(deque.getFront()!=deque.getRear()){

    // flag=false
    // // break loop1;
    // }else{

    // deque.removeFront()
    // deque.removeRear()
    // }
}

if (flag == true) {
    console.log('String ' + string + ' Is  Palindrome');

} else {
    console.log('String ' + string + ' Is Not Palindrome');

}
