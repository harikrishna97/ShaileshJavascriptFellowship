/*
Scope determines the visibility or accessibility of a variable or other resource in the area of your code.
1. Global Scope
2. Local Scope
3. function Scope
4. Block Scope
*/


//Example Of Functional Scope
function foo(){
    var fruit ='apple';
    console.log('inside function: ',fruit);
}

foo();                    //inside function: apple
console.log(fruit);       //error: fruit is not defined 
