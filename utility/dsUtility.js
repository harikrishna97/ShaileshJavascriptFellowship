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

/*
*@description: Function to Print day of a specified month and year(calender) 
*@param: month and year
*@return:void
 */

 calender(month,year){
     try{
         var format=/[^0-9]/
        if(format.test(month)||month==null||month==undefined||month==''||month>12){
            throw 'invalid month'
        }
        
        else if(format.test(year)||year==''||(year>9999||year<1000)){
            
            throw 'invalid year'
        }else{

                /**
            * @description month at each postion display in output after printing
            */
            months =[" " ,"january","february","march","april","may","june","july","august","september","october","novenber","december"]
            days =[0 ,31 ,28, 31, 30, 31, 30, 31, 31, 30 , 31, 30, 31,]

            /**
            *@decription if entered input of month is equal to 2 then is leap year
            check for year is leap or not.
            * @function LeapYear()
            * @param : year and month
            **/
            if(month == 2 && this.leapYear(year)){
            days[month] = 29;
            }
            console.log()
            console.log(" " + months[month] + " " + year)
            console.log();
            console.log(" S M TU W TH F S")

            var d =this.day(month,year);
            for(let i=1; i<= d; i++){
                process.stdout.write(" ");
            }
            for(let i =1;i<= days[month]; i++){
                if (i <= 9){
                    process.stdout.write(" 0" + i);
                }else {
                    process.stdout.write(" " + i)
                }
                if (((i + d)% 7 == 0 ) || i == days[month]){
                    console.log();
                }
                if(((i + parseInt(d)) % 7 == 0 )){
                    console.log()
                }

            }
        console.log();
        }
    }catch(error){
        console.log(error);
        console.log('Enter Month Again:: ');
        var month=this.input()
        console.log('Enter Year Again :: ');
        var year=this.input()

        this.calender(month,year);
        return error
        
    }
},
/**
* @description check if entered year is leap or not
* @param year
* @function LeapYear
*/leapYear(year){

    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        //console.log(year + " Is Leap Year");
    return true
    } else {
        //console.log(year + " Not Leap Year");
        return false
    }
},
/**
* @description this is the function determines the first day of week
from which the month starts
*@param: month=m1 and year=y1 or day=d
*@function day
*/
day(month ,year){
    let d = 1;
    let y1 = year -(14-month) / 12;
    let x = y1 +(y1 / 4) - (y1 / 100) + (y1 / 400);
    let m1 =month + (12 * ((14 - month) / 12)) -2;
    let d1 = (d + x +( 31 * m1) / 12) % 7 ;
    return d1;
},

getPrimeNumber(number) {
    if (number <= 1000) {
      for (var i = 1; i <= number; i++) {
        var temp = 0;
        for (var j = 2; j < i - 1; j++) {
          if (i % j == 0) {
            temp = temp + 1;
          }
        }
        if (temp == 0) {
          console.log("Prime Number:" + i);
        }
      }
      return number;
    }
    else {
      console.log("Number is out of range")
    }
  },

  primeNumberInARange() {
    var arr = [];
    const sum = 0
    // for(let k=0;k<1000;k++){

    for (let i = 0; i <= 1000; i++) {
        
        var flag = 0;
        for (let j = 2; j < i; j++) {
            if (i == 2) {
                //arr.push(i);
                //return i;
                flag=1
                break
            }

            if (i % j == sum) {
                flag = 0
                break
            } else {
                flag = 1;
            }
        }
        if (flag == 1) {
            //arr.push(i);
            //console.log(i+' ');
            return i;
        }

    }
    //return arr

}
}//module.exports