/*
Prototypes in JavaScript is nothing but a special set of properties which an
object holds (remember, almost everything in JavaScript is derived from Object). 
Each object holds it's own set of prototype properties. 
*/

var fooFunc = function() {
    return {
        foo: 42
    }
};
fooFunc.prototype.bar = 'baz';
var fooVal = fooFunc();
console.log(fooVal);   // {foo: 42}
console.log(fooFunc.prototype);     // {bar: "baz", constructor: ƒ}

console.log('.........................................................................');

//Except JavaScript function type, every other prototype of an object resides
//in it's __proto__ property.

console.log('prototype of fooFunc:');
console.log(fooFunc.prototype);     // {bar: "baz", constructor: ƒ}
console.log('prototype of Object:');
console.log(fooFunc.prototype.__proto__);   // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log('.........................................................................');


/*
Prototypal Inheritance: 

*/
var obj = function(){
    this.firstName = 'Varun';
    this.lastName = 'Dey'
}
obj.prototype.age = 25;
var nameObj = new obj()
console.log(nameObj.age);   // 25





