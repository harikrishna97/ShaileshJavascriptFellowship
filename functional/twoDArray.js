
//var Utility = require('../utility/utility');
var read = require('readline-sync');
//taking the input from user
var row = read.question('enter size of row ');
var column = read.question('enter size of column ');
array(row, column)

function array(row, column) {
    var arr = [];
    for (var i = 0; i < row; i++) {
       arr[i] = [];

       for (var j = 0; j < column; j++) {

          var element = read.question("Enter the value :")
          arr[i][j]= element+"";

       }

    }
    console.log(arr);
 }