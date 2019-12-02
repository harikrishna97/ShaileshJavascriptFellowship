/*
Currying is a process in functional programming in which we can transform 
a function with multiple arguments into a sequence of nesting functions. 
It returns a new function that expects the next argument inline.
*/


function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  console.log( curriedSum(1)(2) ); // 3