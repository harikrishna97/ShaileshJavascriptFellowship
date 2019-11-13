
var readline = require('readline-sync');

module.exports = {

    input() {

        let input = readline.question("Input ::");
        return input;

    },

    //******************* String Replace*************/
    
    stringReplacer(name) {
        var TEMPLATE = "Hi UserName, How are You?";

        console.log(TEMPLATE.replace("UserName", name));

    },


    //****************** LeapYear *********************/ 

    leapYear(year) {

        if ((year % 4 == 0 && year != 100) || year % 400 == 0) {
            console.log(year + " Is Leap Year");
        } else {

            console.log(year + " Not Leap Year");

        }
    },


    //****************** Harmonic Number ****************/

    harmonic(n) {
        var har = 0;
        for (var i = 1; i <= n; i++) {
            har = har + 1.0 / i;
            //console.log(har);

        }
        console.log("Harmonic Number of " + n + " Is :: " + har);

    },

    //******************* Flip Coin **************** */ 
    findPercentage(number) {

        var tail = 0, head = 0;

        for (var i = 0; i < number; i++) {

            var result = Math.random();
            console.log("Random Number :: " + result);

            if (result < 0.5) {
                tail++;
            }
            else {
                head++;
            }
        }

        var headPercent = (head * 100) / number;
        var tailPercent = (tail * 100) / number;

        console.log("Head Percentage Are :: " + headPercent);
        console.log("Tail Percentage Are :: " + tailPercent);
    },

    //***************Power Of 2 **************/
    findPowerOf2(n) {

        for (i = 0; i <= n; i++) {
            console.log(Math.pow(2, i));

        }

    },

    //************************* Prime Factor************/
    primeFactors(n) {
        for (var i = 2; i <= n; i++) {
            while (n % i == 0) {
                console.log(" " + i);
                n = n / i;

            }

        }
        if (n === 2) {
            console.log(n);

        }

    },

    /********************* Triplate **********************/

    input1DArray(n) {
        const arr = [n];

        for (var i = 0; i < n; i++) {
            arr[i] = this.input();
        }
        console.log("Array is :: " + arr);
        return arr;
    },


    // print1DArray(array){

    //     for(var i=0;i<size;i++){

    //     }
    //     //return arr;

    //    console.log(arr); 
    // },
    sum(array) {

        var sum = 0;
        var arr_size = array.length;
        {
           if (arr_size != 0) {
              var l, r;
  
              // Fix the first element as A[i]
              for (var i = 0; i < arr_size - 2; i++) {
  
                 // Fix the second element as A[j]
                 for (var j = i + 1; j < arr_size - 1; j++) {
  
                    // Now look for the third number
                    for (var k = j + 1; k < arr_size; k++) {
                       if (array[i] + array[j] + array[k] == sum) {
                          console.log("Triplet is " + array[i] + ", " + array[j] + ", " + array[k]);
  
                       }
                    }
                 }
              }
           }
  
           else {
  
              console.log("invalid ");
           }
        }
     },
  
    findDistinctTriplate(arr) {
        var n=arr.length;
        const sum=0;
        let c=0;
        // console.log('arrr',arr);
        // console.log("nn",n);

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {

                    if (arr[i] + arr[j] + arr[k] == sum) {
                        c=c+1;
                        console.log("Triplet is :: " + arr[i] + ", " + arr[j] + ", " + arr[k]);

                    }
                   


                }
              
            }
        }
        
        return c;
        
        
    },

/**************** Coupon Number************************* */
        generateDistinctCoupon(n){

            let count = 0;
            const arr = [];
            while (arr.length != n) {

                var randNum = Math.floor(Math.random() * 100);
                if (arr.includes(randNum)) {
                    count++;
                } else {
                    count++;
                    arr.push(randNum);
                }

            }
            console.log("Distint Coupon Numbers are :: " + arr);

            return count;
        }


    }//module.export;