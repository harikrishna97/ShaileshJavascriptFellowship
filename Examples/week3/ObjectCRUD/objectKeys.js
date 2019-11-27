/*Object.keys() creates an array containing the keys of an object.

We can create an object and print the array of keys.
*/

// Initialize an object
const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);
/*
Output
["boss", "secretary", "sales", "accountant"]
*/