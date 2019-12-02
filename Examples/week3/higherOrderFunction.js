/*
A higher-order function is a function that either *takes a function as one of its 
parameters or *returns another function. 
*/

 var result =[1, 2, 3, 4].map(function(n){
    return n * 2
}) // [ 2, 4, 6, 8 ]

console.log(result);
