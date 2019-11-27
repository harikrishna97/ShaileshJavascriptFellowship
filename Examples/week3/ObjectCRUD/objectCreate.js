/*
Objects in JavaScript are collections of key/value pairs. 
The values can consist of properties and methods, and may contain 
all other JavaScript data types, such as strings, numbers, and Booleans.
*/
/*
The Object.create() method is used to create a new object and link it to the 
prototype of an existing object.

We can create a job object instance, and extend it to a more specific object.
*/

// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();

/*
OUTPUT:
The barista position is hourly and is accepting applications.
*/