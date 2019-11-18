let user = {
    sayHi() { // ignored
        console.log("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
  };
  
  console.log(JSON.stringify(user) ); // {} (empty object)