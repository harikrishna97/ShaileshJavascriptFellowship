var readline = require('readline-sync');
const Utility = require('../utility/linkedList')
var list = new Utility.LinkedList;
const fos = require('fs')
module.exports = {

    //Input From user
    input() {

        let input = readline.question("");
        return input;

    },
    /*********************** Number Of Binary Search Tree **************************/
    numberOfBinarySearchTree(number) {
        try{
            const format=/[^0-9]/
            if(format.test(number)||number==null||number==undefined||number==''){
                throw 'invalid input'
            }else{
            var numerator = this.findFatorial(2 * number)
            var denominator = this.findFatorial(number + 1) * this.findFatorial(number)

            var numberOfTrees = numerator / denominator;
            return numberOfTrees
            }
        }catch(error){

            console.log(error);
            console.log('Enter Number Again');
            var number=this.input()
            this.numberOfBinarySearchTree(number)
            return error
            
        }    

    },

    findFatorial(n) {
        var fact = 1
        while (n > 0) {
            fact = fact * n
            n--;
        }
        return fact;
    },
    /********************************   *****************************************/
    /************************** Prime Number in a range 0 - 1000 */
    /*
    *@description: Function print prime numbers between 0-1000 
    *@param: no  parameters
    *@return:void
    */
   primeNumberInARange(from,to) {
    try{
        var format=/[^0-9]/
        if(format.test(from)||format.test(to)||to==''||to==null||to==undefined){
            throw 'invalid input'
        }else{
            var arr = [];
            const sum = 0
            // for(let k=0;k<1000;k++){

            for (let i = from; i <= to; i++) {
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
            return (arr+" ")
        }    
        //this.isPalindrome(arr)
    }catch(error){
        console.log('invalid input');
        console.log("Enter Input Again");
        console.log('Prime Number Range From :: ');
        var from=this.input()
        console.log('Prime Number Range To :: ');
        var from=this.input()
        this.primeNumberInARange(from,to);
        return error;
        
    }   

},

    isPrime(number){
        let flag=0
        loop1:
        for(let i=2;i<number/2;i++){
            if(number==2){
                flag=0
            }else if(number%i==0){
                flag=1
                break loop1
            }

        }
        if(flag==0){
            return true
        }else {
            return false
        }
            
    },

    /*
    *@description: Function to Print day of a specified month and year(calender) 
    *@param: month and year
    *@return:void
     */

    calender(month, year) {
        try {
            var format = /[^0-9]/
            if (format.test(month) || month == null || month == undefined || month == '' || month > 12) {
                throw 'invalid month'
            }

            else if (format.test(year) || year == '' || (year > 9999 || year < 1000)) {

                throw 'invalid year'
            } else {

                /**
            * @description month at each postion display in output after printing
            */
                months = [" ", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "novenber", "december"]
                days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,]

                /**
                *@decription if entered input of month is equal to 2 then is leap year
                check for year is leap or not.
                * @function LeapYear()
                * @param : year and month
                **/
                if (month == 2 && this.leapYear(year)) {
                    days[month] = 29;
                }
                console.log()
                console.log(" " + months[month] + " " + year)
                console.log();
                console.log(" S M TU W TH F S")

                var d = this.day(month, year);
                for (let i = 1; i <= d; i++) {
                    process.stdout.write(" ");
                }
                for (let i = 1; i <= days[month]; i++) {
                    if (i <= 9) {
                        process.stdout.write(" 0" + i);
                    } else {
                        process.stdout.write(" " + i)
                    }
                    if (((i + d) % 7 == 0) || i == days[month]) {
                        console.log();
                    }
                    if (((i + d)) % 7 == 0) {
                        console.log()
                    }

                }
                console.log();
            }
        } catch (error) {
            console.log('invalid input');
            console.log('Enter Month Again:: ');
            var month = this.input()
            console.log('Enter Year Again :: ');
            var year = this.input()

            this.calender(month, year);
            return error

        }
    },
/**
* @description check if entered year is leap or not
* @param year
* @function LeapYear
*/leapYear(year) {

        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
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
    day(month, year) {
        let d = 1;
        let y1 = year - Math.floor((14 - month) / 12);
        let x = y1 + Math.floor((y1 / 4)) - Math.floor((y1 / 100)) + Math.floor((y1 / 400));
        let m1 = month + Math.floor((12 * ((14 - month) / 12))) - 2;
        let d1 = Math.floor((d + x + (31 * m1) / 12) % 7);
        return d1;
    },

    

    
    unOrderList(searchKey) {
        try {
            var format = /[^a-zA-Z]/
            if (format.test(searchKey) || searchKey == null || searchKey == undefined || searchKey == '') {
                throw 'invalid String'
            } else {


                var result = list.search(searchKey)

                if (result === true) {
                    console.log('Element ' + searchKey + ' Is Found');
                    list.deleteElement(searchKey);
                } else {
                    console.log(searchKey + ' Is Not Found')
                    list.addElement(searchKey);
                    console.log(searchKey + ' Is Added to the File')
                    //console.log('Elements in the File are :: '+list.display());

                }

                var data = list.display()
                //console.log(list.search(searchKey)?'Element Found':'Element Not Found')

                fos.writeFileSync('unorderList.txt', data, 'utf8')
                console.log('File Data Is :: ' + data);
            }

        } catch (error) {

            console.log(error);
            console.log('Enter input again :: ');
            console.log('Enter String To be Search :: ');
            var searchKey = Utility.input()
            unOrderList(searchKey);
            return error

        }
    },

    orderListFun(searchKey) {
        var intData = Utility.inputFromFile('orderList.txt');

        for (let i = 0; i < intData.length; i++) {
            list.addElement(intData[i])
        }
        // console.log(list.display());
        list.sortingLinkedlist()
        console.log('After sorting elements in the file are :: ' + list.display());
        try {
            var format = /[^0-9]/
            if (format.test(searchKey) || searchKey == null || searchKey == undefined || searchKey == '') {
                throw 'invalid input'
            } else {
                var result = list.search(searchKey)

                if (result === true) {
                    console.log('Element ' + searchKey + ' Is Found');
                    list.deleteElement(searchKey);
                } else {
                    console.log(searchKey + ' Is Not Found')
                    list.addElement(searchKey);

                    console.log(searchKey + ' Is Added to the File')

                    //console.log('Elements in the File are :: '+list.display());

                }

                list.sortingLinkedlist();
                var data = list.display()
                //console.log(list.search(searchKey)?'Element Found':'Element Not Found')

                fos.writeFileSync('orderList.txt', data, 'utf8')
                console.log('File Data Is :: ' + data);
            }
        } catch (error) {

            console.log("invalid Input");


            console.log('Enter Number To be Search :: ');
            var searchKey = this.input()
            this.orderListFun(searchKey);
            return error

        }
    },

    
    /**
    * @description function to get prime numbers that are anagram
    * @function primeRange
    */
    primeAnagramOrNot(num1,num2){
        // var arr=[]
       var int1=num1.toString().split('').sort().join('')
       var int2=num2.toString().split('').sort().join('')
       if(int1==int2){
            return true
            // arr.push(num1)
            // arr.push(num2)
       }else{
           return false
       }

       

    },

    //input from file
    inputFromFile(file){
        const fis=require('fs')
        var data=fis.readFileSync(file,'utf8')
        var stringData=data.trim().split(' ')

        return stringData;
    },

    //write to file
    outputToFile(file,content){
        const fos=require('fs')
        fos.writeFileSync(file,content,'utf8')

    },

}//module.exports