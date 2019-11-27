/*Object.values() creates an array containing the values of an object.*/

// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

// Get all values of the object
const values = Object.values(session);

console.log(values);

/*
Output
[1, "26-July-2018", "mobile", "Chrome"]
*/
