/*
Map: Basically, every time you need to modify the elements of your array,
 think of using map.

It takes one parameter: a function that is called on every element of the array.
 And it returns a new array, so no side effects here.
*/

const numbers = [1, 2, 3, 4]

const numbersPlusOne = numbers.map(n => n + 1); // Adds one to every element
console.log(numbersPlusOne); // [2, 3, 4, 5]

//You can also create a new array that keeps only one particular property of an object:
//So, remember, whenever you need to transform an array, think of using map.

const allActivities = [
    { title: 'My activity', coordinates: [50.123, 3.291] },
    { title: 'Another activity', coordinates: [1.238, 4.292] },
    // etc.
  ]
  
  const allCoordinates = allActivities.map(activity => activity.coordinates)
  console.log(allCoordinates) // [[50.123, 3.291], [1.238, 4.292]]