var readline = require('readline-sync');

module.exports={

    //Input From user
    input() {

        let input = readline.question("");
        return input;

    },
    /*********************** Number Of Binary Search Tree **************************/
    numberOfBinarySearchTree(number){
        var numerator=this.findFatorial(2*number)
        var denominator=this.findFatorial(number+1)*this.findFatorial(number)

        var numberOfTrees=numerator/denominator;
        return numberOfTrees

    },

    findFatorial(n){
        var fact=1
        while(n>0){
            fact=fact*n
            n--;
        }
        return fact;
    },
/********************************   *****************************************/
primeNumberInARange() {
    var arr = [];
    const sum = 0
    // for(let k=0;k<1000;k++){

    for (let i = 0; i <= 1000; i++) {
        if (i == 2) {
            arr.push(i);
        }
        var flag = 0;
        for (let j = 2; j < i; j++) {

            if (i % j == sum) {
                flag = 0
                break
            } else {
                flag = 1;
            }
        }
        if (flag == 1) {
            arr.push(i);
            //console.log(i+' ');
        }

    }

    var result=arr.values()

    console.log(result);
     result
     
    //console.log("Prime Numbers :: " + arr);
    //return arr

//this.isPalindrome(arr)


},


}