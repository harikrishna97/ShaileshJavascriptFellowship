/*
ES6 Features
*/

class someClass {
    constructor() {
        this.name = "HariKrishna"
    }

    testRegular() {
        return function() { return this }

    }

    //Arrow Function
    testArrow() {
        return () => this.name;
    }
}

var obj = new someClass();

console.log(obj.name)// HariKrishna
console.log(obj.testRegular()());//undefined
console.log(obj.testArrow()());// HariKrishna

/*
OUTPUT::
HariKrishna
undefined
HariKrishna

*/
/***************************************************************************** */
/*
String interpolation
Nice syntax for string interpolation

*/

var name = "Bob", time = "today";

var multiLine = `This

Line

Spans Multiple

Lines`


console.log(`Hello ${name},how are you ${time}?`)
console.log(multiLine)
/*
OUTPUT:
Hello Bob,how are you today?
This

Line

Spans Multiple

Lines
*/
/**************** let ***************************
 * It is not possible to redeclare a variable using let:
 * 
*/

{
    var globalVar = "from demo1"//from demo1
 }
 
 {
    let globalLet = "from demo2";//ReferenceError: globalLet is not defined
 }
 
 console.log(globalVar)
 console.log(globalLet)

 /************************* const******************
Const is for read-only variables.

  */

 const a = "b"
 a = "a"//TypeError: Assignment to constant variable.
