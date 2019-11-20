let user = {
    sayHi() { // ignored
        console.log("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
  };
  
  console.log(JSON.stringify(user) ); // {} (empty object)

  /***************************************************** */

  let numbers = "[0, 1, 2, 3]";

    numbers = JSON.parse(numbers);

    console.log( numbers[3]);                                                
    console.log( )