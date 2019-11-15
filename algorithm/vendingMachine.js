const Utility=require('../utility/utility');




console.log("Enter Amount :: ");
var amount=Utility.input()

console.log("Minimum Number of Notes required is :: "+Utility.calculateMinNotes(amount));


