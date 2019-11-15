//Practice Programs

var a=42;
var b=56;
var c=a+b;
console.log("Sum Of 42 and 56 :: node   "+c);
var str="Hi HariKrishna";
console.log(str);

//typeof operator

console.log(typeof a);

var a=20;
var b="20";

//use of === operator
if(a===b){
    console.log("Volues of A and B are Equal ");
    
}
else{
    console.log("Volues of A and B are Not Equal ");
}

// 
var a=0;
if (a){
    console.log("a is true");
}else {
    console.log("a is false");
    
}

var a="hari";
if (a){
    console.log("a is true");
}else {
    console.log("a is false");
}
  a="";
    
if (a){
    console.log("a is true");
}else {
    console.log("a is false");
}

// 3. Object

var myString="Harikrishna";

var myObj={};
myObj.prop="Hari";
myObj.prop2=123;

console.log(myObj);
console.log("Property 2 is :: "+myObj.prop2);

// different way two defining Object

var myObj1={
"prop":"Hari", 
"prop1": 33
};
console.log(myObj);

//Accesing properties using square Bracket

console.log("Accessing Using Bracket "+myObj["prop"]);

//nested Object
var person={
"id":123,
"name":"hari",
"age":90,
"student" : {
    "sub":"english"
}
};

console.log(person.student);

//delete Property

delete person.age

//arrays
var myArray=["shailesh","hari","krishna"];
console.log(myArray[0]);
myArray[3]="ram";

console.log(myArray);

console.log(myArray.length);
//

//Functions

function sayHello(){
console.log("hello");
}

sayHello();
