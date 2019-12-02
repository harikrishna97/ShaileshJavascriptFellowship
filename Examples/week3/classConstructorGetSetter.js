/*
In object-oriented programming, a class is an extensible program-code-template 
for creating objects, providing initial values for state (member variables) and 
implementations of behavior (member functions or methods).
In JavaScript, a class is a kind of function.
*/



class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("Krishna");
  console.log(user.name); // John
  
  user = new User("HariKrishna"); 
  console.log(user.name);