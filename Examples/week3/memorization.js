/*
Memoization is a programming technique which attempts to increase a function’s performance 
by caching its previously computed results. Because JavaScript objects behave like associative arrays, 
they are ideal candidates to act as caches. Each time a memoized function is called, its parameters are 
used to index the cache. If the data is present, then it can be returned, without executing the entire 
function.  However, if the data is not cached, then the function is executed, and the result is
 added to the cache.


*/



var fibonacci = (function() {
    var memo = {};
  
    function f(n) {
      var value;
  
      if (n in memo) {
        value = memo[n];
      } else {
        if (n === 0 || n === 1)
          value = n;
        else
          value = f(n - 1) + f(n - 2);
  
        memo[n] = value;
      }
  
      return value;
    }
  
    return f;
  })
  
  ();
 
  