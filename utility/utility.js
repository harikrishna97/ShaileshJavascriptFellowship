
var readline = require('readline-sync');

module.exports = {
    /**************** Input From User *************** */
    /*
    *@description: Function to get user input 
    *@param: no parameters
    *@return:input
    */
    input() {

        let input = readline.question("");
        return input;

    },
/****************** validatating Number ****************/
    /*
    *@description: Function to validate number 
    *@param: number
    *@return:void
    */
    validatingNumber(number){
        const format=/[^0-9]/;
        if(number==undefined||format.test(number)||number===null||number==''){
            throw 'invalid input';
        }

    },
/****************** validatating String ****************/
    /*
    *@description: Function to validate String 
    *@param: string
    *@return:void
    */

    validatingString(string){
        const format=/[^a-zA-Z]/;
        if(format.test(string)||string==null||(string==undefined)||(string =='')){
            throw 'invalid input';
        }

    },

    validatingIntArray(intArr){

    },

    validatingIntArray(stringArr){
        const format=/[^a-zA-Z]/
    if (arr.some(function (el) { return format.test(el); })) {
        throw "err"
    } else {
        console.log('no error')
    }

    },


    // /**************  input String Array From User ************ */
    // inputStringArray(arrSize){

    //     console.log("Enter "+arrSize+" Elements");

    //     for(let i=0;i<arrSize;i++){

    //         console.log("Enter "+i+" Element ::");
    //         intArr[i]=this.input()
    //     }
    //     return intArr
    // },

    //******************* String Replace*************/
    /*
    *@description: Function to replace substring from a given string 
    *@param: name
    *@return:void
    */
    stringReplacer(name) {

        try {
            let format = /[^a-zA-Z]/;
            if (format.test(name)){
                throw 'invalid name';
            }else if(name.length<3){
                throw 'short length';
            }else {
            var TEMPLATE = "Hi UserName, How are You?";

            console.log(TEMPLATE.replace("UserName", name));
            //throw true
            }
        } catch (error) {
            //console.log("invalid Input");
            return error;


        }
    },


    //****************** LeapYear *********************/ 
    /*
    *@description: Function to check year is leap year or not 
    *@param: year
    *@return:true or false
    */
    leapYear(year) {
        try {
            let format = /[^0-9]/;
            if ( format.test(year) || (year < 1000) ||  (year > 9999)||year=='' ) {
                throw 'is invalids';

            }
            
            if(year !=null){

                if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                    //console.log(year + " Is Leap Year");
                return true
            } else {

                  //console.log(year + " Not Leap Year");
                return false
                }
             }
        }catch (error) {
            console.log("not valid input");
              console.log("enter year again :: ");
             var year=parseInt(this.input())
             
              this.leapYear(year) ;
                  
            return error

        }
        
    },


    //****************** Harmonic Number ****************/
    /*
    *@description: Function to calculate harmonic number of a given number n 
    *@param: number n
    *@return:void
    */
    harmonic(n) {

        try{
            let format=/[^1-9]/
          if(format.test(n)|| n==null ||n==undefined||n==''){
              throw 'invalid input'
          }else{
            var har = 0;
            for (var i = 1; i <= n; i++) {
                har = har + 1.0 / i;

            }
            console.log("Harmonic Number of " + n + " Is :: " + har);
        } 
    }catch(error){
        console.log('invalid input');
        console.log("Enter Number Again :: ");
        var n=this.input();
        this.harmonic(n);
        return error;

        }
    },

    //******************* Flip Coin **************** */
    /*
    *@description: Function calculate percentage of head and tails 
    *@param: number(number of times to flip coin)
    *@return:void
    */ 
    findPercentage(number) {
        try{
            let format=/[^0-9]/
            var tail = 0, head = 0;
            if(format.test(number)||number==null||number==undefined||number==''){
                throw 'invalid input'
            }else{
                
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
            }    
            var headPercent = (head * 100) / number;
            var tailPercent = (tail * 100) / number;

            console.log("Head Percentage Are :: " + headPercent);
            console.log("Tail Percentage Are :: " + tailPercent);
        }catch(error){
            console.log('invalid input');
            console.log('Enter input again');
            console.log("Enter The Number of Times To Flip Coin");
            var number = this.input();

            this.findPercentage(number);
            
            return error
        }
    },

    //***************Power Of 2 **************/
    /*
    *@description: Function calculate power of 2 
    *@param: number
    *@return:void
    */
    findPowerOf2(number) {
        try{
            let format=/[^0-9]/
            
            if(format.test(number)||number===null||number===undefined||number==''){
                throw 'invalid input'
            }else{
                for (i = 0; i <= number; i++) {
                    console.log("2^"+i+"="+Math.pow(2, i));

                }
            }
        }catch(error){
            console.log("Enter Number Again :: ");
            var n=this.input();

            this.findPowerOf2(n);
            return error
        }
    },

    //************************* Prime Factor************/
    /*
    *@description: Function find prime faactors of a given number 
    *@param: number n
    *@return:void
    */
    primeFactors(n) {
        try{
            let format=/[^0-9]/
            
            if(format.test(n)||n===null||n===undefined||n==''){
                throw 'invalid input'
            }else{

                for (var i = 2; i <= n; i++) {
                    while (n % i == 0) {
                        console.log(" " + i);
                        n = n / i;

                    }

                }
                if (n > 2) {
                    console.log(n);

                }
            }     
        }catch(error){
            console.log('invalid input');
            console.log("Enter Number Again :: ");
            var n=this.input();
            this.primeFactors(n)
            return true
        }
    },

    /********************* Array **********************/
    /*
    *@description: Function to get input array from user 
    *@param: number(size of array)
    *@return:arr
    */
    input1DArray(number) {
        try{
            let format=/[^0-9]/
            if(format.test(number)||number===null||number===undefined||number==''){
                throw 'invalid input'
        const arr = [];

        for (var i = 0; i < number; i++) {
            arr[i] = this.input();
        }
        console.log("Array is :: " + arr);
        return arr;
    }
    }catch(error){
        return error
    } 
    },



    /****************** Triplates*************************/
    /*
    *@description: Function find the number of triplte whose sum is zero 
    *@param: array
    *@return:count
    */
    findDistinctTriplate(arr) {
        try{
                var n = arr.length;
                this.validatingNumber(n)
                const sum = 0;
                let c = 0;

                for (let i = 0; i < n; i++) {
                    for (let j = i + 1; j < n; j++) {
                        for (let k = j + 1; k < n; k++) {

                            if (arr[i] + arr[j] + arr[k] == sum) {
                                c = c + 1;
                                console.log("Triplet is :: " + arr[i] + " +" + arr[j] + " +" + arr[k] + " =0");

                            }
                        }

                    }
                }
                return c;
        }catch(error){
            console.log('invalid input');
            return error
            
        }        
    },

    /**************** Coupon Number************************* */
    /*
    *@description: Function to generate distinct coupon number 
    *@param: no  parameters
    *@return:void
    */
    generateDistinctCoupon(n) {

        try{
            let format=/[^0-9]/
           
            if(format.test(n)||n===null||n===undefined||n==''){
                throw 'invalid input'}
            else{    
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
            console.log("Random Numbers Require to generate "+n+" Distinct coupons Numbers are :: "+count);

            //return true;
        } 
        }
    catch(error){
        console.log("invalid input");
        console.log("Enter number of Coupons again :: ");
        var number=this.input();

        this.generateDistinctCoupon(number);
        return error
    } 
    },

    /************************** TwoDArray ***************************************/
    /*
    *@description: Function to print 2D array 
    *@param: row and column
    *@return:void
    */
    print2DArray(row, column) {
        try{
            let format=/[^0-9]/
           
            if((format.test(row)||row===null||row===undefined)||row==''||column==''||(format.test(column)||column===null||column===undefined)){
                throw 'invalid input'
            }
            else{
                var arr = [];
                for (var i = 0; i < row; i++) {
                    arr[i] = [];

                    for (var j = 0; j < column; j++) {
                        console.log("Enter Element ["+i+"] :: ");

                        var element = this.input()
                        arr[i][j] = element;

                    }
                    

                }
                console.log(arr);
                
            }
        }catch(error){
            console.log(error);
            console.log("Enter Number Of Rows :: ");

            var rows = this.input()
            console.log("Enter Number Of Columns :: ");
            var columns = this.input()
            this.print2DArray(rows,columns);
            return error  
        }    
    },

    /****************** Gambling Game *************************/
    /*
    *@description: Function to implement gambling game 
    *@param: stake,goal,trials
    *@return:void
    */
    gambler(stake, goal, trials) {
        try{
            this.validatingNumber(stake)
            this.validatingNumber(goal)
            this.validatingNumber(trials)
            var  win = 0;
        
            for (i = 0; i < trials; i++) {
                var cash = stake;
            
                while (cash > 0 && cash < goal) {
                  
                    if (Math.random() > 0.5) {
                    cash++;
                    } else {
                        cash--;
                    }
                }
                if (cash == goal) {
                    win++;
                }
            }

            var winPercent=100.0 * win / trials
            var lossPercent=100-winPercent
            console.log("You Win "+win+" Times Outof "+trials+" trials");
            console.log("Percentage of game won :: " +winPercent );
            console.log("Percentage of game Loss :: " +lossPercent );
        }catch(error){
            console.log('invalid input\nEnter input again');
            var stake, goal, trials;
            console.log("Enter Stake Price :: ");
            stake = this.input();
            
            console.log("Enter Stake Goal :: ");
            goal = this.input();
            
            console.log("Enter Number Of Time :: ");
            trials = this.input();
            this.gambler(stake,goal,trials)
            
            return error
        }   
        },
    /*********************************************************************************************** */
    //                            Algorithm Programs                                                 //
    /*********************************************************************************************** */
    
    /**************** Anagram Detection **************************/
    /*
    *@description: Function to check given two words are anagram or not 
    *@param: word1,word2
    *@return:true or false
    */
    checkAnagrams(word1, word2) {
        var format=/[^a-zA-Z]/
        try{
            if(format.test(word1)||word1==null||word1==undefined||word1==''||format.test(word2)|word2==null||word2==undefined||word2==''){
                throw 'invalid input'
            }
            var str1 = this.reduceCodeForAnagram(word1);
            var str2 = this.reduceCodeForAnagram(word2);
            if(str1 === str2){
                return true
            }else{
                return false
            }
        }catch(error){
            console.log('invalid input\nEnter input again');
            console.log("Enter First Word :: ");
            var word1=this.input();
            console.log("Enter Second Word :: ");
            var word2=this.input();
            this.checkAnagrams(word1, word2);
            return error
        }    

    },

    reduceCodeForAnagram(word) {
        return (word.toLowerCase().split('').sort().join(''));

    },

    // checkAnagrams(word1, word2) {
    //    // var format = /[a-zA-Z]/;
    //     try{
           
    //             var count = 0;
    //             if (format.test(word1) && format.test(word2)) {
    //                 if (word1.length !== word2.length) {
    //                     console.log("strings are not anagram");
    //                 }
    //                 else {
    //                     for (var i = 0; i < word1.length; i++) {
    //                         for (var t = 0; t < word2.length; t++) {
    //                             if (word2[t].toLowerCase() == word1[i].toLowerCase()) {
    //                             count++;
    //                             break;
    //                             }
    //                         }
    //                     }
    //                     if (count == word1.length) {
    //                         return true
    //                     }
    //                     else {
    //                         return false
    //                     }
    //                 }
    //             }
    //             else {
    //             console.log("invalid input");
    //             }
    //         }catch(error){

    //             return error
    //         }        
    // },

    /************************** Prime Number in a range 0 - 1000 */
    /*
    *@description: Function print prime numbers between 0-1000 
    *@param: no  parameters
    *@return:void
    */
    primeNumberInARange(from,to) {
        try{
            var format=/[^0-9]/
            if(format.test(from)||format.test(to)||from==''||to==''||from==null||from==undefined||to==null||to==undefined){
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
                return arr
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
    /************************** Palindrome Checker */
    /*
    *@description: Function to check for palindrome or not 
    *@param: num
    *@return:void
    */
    isPalindrome(num){
        
        var arr=[]
        arr=num;
        const n=arr.length
            for(let i=0;i<n;i++){
            
                var rem,sum=0,temp;
            
                temp=parseInt(arr[i]);
            
                while(arr[i]>0){
                    rem=arr[i]%10;
                    sum=sum*10+rem;
                    num=parseInt(arr[i]/10);
                }
            
                if(temp==arr[i]){
                    console.log(arr[i]+" is Palindrome");
                }
                
                
            }
        
        
        },
    /********************************************************************************* */

    //******************** Buble Sort For Interger ***************************** */
    /*
    *@description: Function to implement buble sort for integer
    *@param: intArr
    *@return:front.data
    */

    bubbleSortInt(intArr) {
            try{
                const n = intArr.length
                if(n==null||n==undefined||n==''){
                    throw 'invalid input'
                }else{
                    for (let i = 0; i < n - 1; i++) {
                        for (let j = 0; j < n - i - 1; j++) {
                            if (intArr[j] > intArr[j + 1]) {
                                let temp = intArr[j];
                                intArr[j] = intArr[j + 1]
                                intArr[j + 1] = temp
                            }

                        }
                    }
                    console.log(intArr)
                    //return intArr
                }    
            }catch(error){

                console.log('invalid input');
                return error
                
            }        

    },
    //******************** Insertion Sort For Interger ***************************** */
    /*
    *@description: Function implement insertion sort for integer array 
    *@param: intArr
    *@return:void
    */

    insertionSortInt(intArr) {
        try{
                var temp;

                var n = intArr.length;
            if(n==null||n==undefined||n==''){
                throw 'invalid input'
            }else{

                for (let i = 1; i < n; i++) {

                    temp = intArr[i];
                    var j = i;
                    while (j > 0 && intArr[j] < intArr[j - 1]) {
                        intArr[j] = intArr[j - 1];
                        j--;
                        intArr[j] = temp;
                    }

                }
                console.log(intArr);
            }    
        }catch(error){
            console.log('invalid input');
            return error
            
            
        }        
    },

    /************************ Binary Search For Integer Value************ */
    /*
    *@description: Function to implement binary search for integer array 
    *@param: intArr and key
    *@return:void
    */
     binarySearchForInt(intArr,key){
         try{
            const format=/[^0-9]/;
            if(format.test(key)||key==undefined||key==null||key==''){
                throw 'invalid input';
            }else{
                var first=0;
                var last=intArr.length-1
                var mid;
                while(first<=last){
                    mid=Math.floor(first+last)/2

                    if(intArr[mid]==key){
                    //console.log("Element "+key+" is found at location :: "+(mid+1));
                    console.log("found");
                    
                    //return true
                    //break
                    }
                    else if(key>intArr[mid]){
                        fisrt=mid+1
                    }else{
                        last=mid-1
                    }
                }
                if(first>last){
                    console.log("Element "+key+" is not found");
                    
                }
            }    
        }catch(error){
            console.log(error);
            console.log('Enter input again :: ');
            const intArr=[1,2,3,4,5,6,7,8,9]
            console.log('Array contains :: '+intArr);
            console.log("Enter Number To be Search :: ");
            var key=this.input()
            this.binarySearchForInt(intArr,key);
            return error
        }    
            
    
    },
    /************************ Binary Search For String Value************ */
    /*
    *@description: Function to implement binary search for string array 
    *@param: arr and key
    *@return:true or false
    */

    binarySearchForString(arr,key){
        var first=0;
        var last=arr.length-1
        let mid;
        while(first<=last){
            
            mid=Math.floor((first+last)/2)

            if(arr[mid]===key){
                return true
                break
            }else if(arr[mid]<key){
                first=mid+1

            }else{
                last=mid-1
            }
        
            
            
        }
        return false
        
    },
    //*************************** Merge Sort ********************** */
    /*
    *@description: Function to implement merge sort for string array 
    *@param: leftArr and rightArr
    *@return:sortedArr
    */
     merge(leftArr, rightArr) {
        var sortedArr = [];
        while (leftArr.length && rightArr.length) {
    
            if (leftArr[0] <= rightArr[0]) {
                sortedArr.push(leftArr[0]);
                 leftArr = leftArr.slice(1)
            } 
            else { 
                sortedArr.push(rightArr[0]);
                rightArr = rightArr.slice(1)
             }
        } 
        while (leftArr.length) 
        sortedArr.push(leftArr.shift());
    
        while (rightArr.length) 
        sortedArr.push(rightArr.shift());
    
        return sortedArr;
    },
    
    
     mergesort(arr) {
    
        if (arr.length < 2) {
            return arr;
        }
        else {
            var midpoint = parseInt(arr.length / 2);
            var leftArr = arr.slice(0, midpoint);
            var rightArr = arr.slice(midpoint, arr.length);
            return this.merge(this.mergesort(leftArr),this.mergesort(rightArr));
        }
    }, 
    /************************* Find Your Number ********************/
    /*
    *@description: Function to find your guese number  
    *@param:no parameters
    *@return:void
    */
    findYourNumber() {
        try {
        var low = 0, high = 100, mid;
        while (low < high) {
        mid = Math.floor((low + high) / 2);
        
        console.log("enter 1 if no between " + low + "-" + mid);
        console.log("enter 2 if no between " + (mid + 1) + "-" + high);
        
        var num = this.input();
        if (num == 1) {
        high = mid;
        }
        else if (num == 2) {
        low = mid + 1;
        }
        }
        console.log("guess number is " + low);
        }
        
        catch (error) {
        return error;
        }
        
        },

    //************************* Vanding Machine **********************/
    /*
    *@description: Function to calculate minimum number of notes in the vending machine 
    *@param: amount
    *@return:void
    */
    calculateMinNotes(amount) {
        loop1:
        try{
                this.validatingNumber(amount);
            var minNote=0

            if (amount == 0) {
                break loop1;
            }
            //calculate 1000 rupees notes
            if (amount >= 1000) {
                minNote = minNote + parseInt(amount / 1000)
                console.log("1000 Rupees Notes Are :: " + parseInt(amount / 1000));

                if (amount / 1000 == 0) {
                    return
                } else {
                    this.calculateMinNotes(amount % 1000)
                }
            }
            //calculate 500 rupees notes
            else if (amount >= 500) {
                minNote = minNote + parseInt(amount / 500)
                console.log("500 Rupees Notes Are :: " + parseInt(amount / 500));

                if (amount / 500 == 0) {
                    return
                } else {
                    this.calculateMinNotes(amount % 500)
                }
            }
            //calculate 100 rupees notes
            else if (amount >= 100) {
                minNote = minNote + parseInt(amount / 100)
                console.log("100 Rupees Notes Are :: " + parseInt(amount / 100));

                if (amount / 100 == 0) {
                    return
                } else {
                    this.calculateMinNotes(amount % 100)
                }
            }
            //calculate 50 rupees notes
            else if (amount >= 50) {
                minNote = minNote + parseInt(amount / 50)
                console.log("50 Rupees Notes Are :: " + parseInt(amount / 50));

                if (amount / 50 == 0) {
                    return
                } else {
                    this.calculateMinNotes(amount % 50)
                }
            }
            //calculate 10 rupees notes
            else if (amount >= 10) {
                minNote = minNote + parseInt(amount / 10)
                console.log("10 Rupees Notes Are :: " + parseInt(amount / 10));

                if (amount / 10 == 0) {
                    return
                } else {
                    this.calculateMinNotes(amount % 10)
                }
            }
            //calculate 5 rupees notes
            else if (amount >= 5) {
                minNote = minNote + parseInt(amount / 5)
                console.log("5 Rupees Notes Are :: " + parseInt(amount / 5));

                if (amount / 5 == 0) {
                    return
                } else {
                    this.calculateMinNotes(amount % 5)
                }
            }
            //calculate 2 rupees notes
            else if (amount >= 2) {
                minNote = minNote + parseInt(amount / 2)
                console.log("2 Rupees Notes Are :: " + parseInt(amount / 2));

                if (amount / 2 == 0) {
                    return
                } else {
                    this.calculateMinNotes(amount % 2)
                }
            }
            //calculate 1 rupees notes
            else if (amount >= 1) {
                minNote = minNote + parseInt(amount / 1)
                console.log("1 Rupees Notes Are :: " + parseInt(amount / 1));

                if (amount / 1 == 0) {
                    break loop1
                } else {
                    this.calculateMinNotes(amount % 1)
                }
            }

            return minNote;
        }catch(error){
            console.log('invalid input');
            console.log("Enter Amount Again :: ");
            var amount=this.input()
            this.calculateMinNotes(amount)
            return error
        }    

    },

    //************************* Temperature Conversion ******************** */
    /*
    *@description: Function to to convert temperature form degree to farenheit and vice versa 
    *@param: farTemp, celTemp
    *@return:void
    */
    tempConversion(farTemp, celTemp) {
        try{
            var format=/[^0-9]/
            if(format.test(farTemp)||format.test(calTemp)||farTemp==null||farTemp==undefined||celTemp==null||celTemp==''||calTemp==undefined){
                throw 'invalid input'
            }else{

                var celcius = (farTemp - 32) * 5 / 9;
                console.log("celcius converted temprature of " +farTemp+ "F is ::" + celcius + "C")
                var farenheit = (celTemp * 9/5) + 32;
                console.log("fahrenhite converted temprature of " +celTemp+ "C is ::"+ farenheit + "F")
            }
        }catch(error){
            return error
        }     
        },

        /***************************** Squre Root *****************************/
        /*
        *@description: Function to find squareRoot of a given number 
        *@param: number c
        *@return:void
        */
        
        findSqureRoot(c){
            try{
                var t=c
                var epsilon=1e-15;
                while(Math.abs(t-c/t)>epsilon*t){
                    t=((c/t)+t)/2.0//
                }
                console.log(t)
            }catch(error){
                console.log(error);
                console.log("Enter The Number to Find SqureRoot :: ");
                var number = Utility.input();
                Utility.findSqureRoot(number);
                
            }    

        },

              
    

}//module.export;