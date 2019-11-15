
var readline = require('readline-sync');

module.exports = {
    /**************** Input From User *************** */
    input() {

        let input = readline.question("");
        return input;

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
    
    stringReplacer(name) {
        var TEMPLATE = "Hi UserName, How are You?";

        console.log(TEMPLATE.replace("UserName", name));

    },


    //****************** LeapYear *********************/ 

    leapYear(year) {
        try{
            var format=/[^0-9]/;
            if(format.test(year)||year.length!=4||year==undefined||year==null){
                throw error;
            }

            else if( ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ){
            console.log(year + " Is Leap Year");
            } else {

            console.log(year + " Not Leap Year");

        }
    
    }
    catch(error){
        console.log("not valid input");
        console.log("enter year again");
        var year=this.input()
        this.leapYear(year) ;       
        
        
    }
    },


    //****************** Harmonic Number ****************/

    harmonic(n) {
        var har = 0;
        for (var i = 1; i <= n; i++) {
            har = har + 1.0 / i;
            
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


    
    /****************** Triplates*************************/
  
    findDistinctTriplate(arr) {
        var n=arr.length;
        const sum=0;
        let c=0;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {

                    if (arr[i] + arr[j] + arr[k] == sum) {
                        c=c+1;
                        console.log("Triplet is :: " + arr[i] + " +" + arr[j] + " +" + arr[k]+" =0");

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
        },

        /************************** TwoDArray ***************************************/

        print2DArray(row, column) {
            var arr = [];
            for (var i = 0; i < row; i++) {
               arr[i] = [];
         
               for (var j = 0; j < column; j++) {
                console.log("Enter Element :: ");
                
                  var element = this.input()
                  arr[i][j]= element+"";
         
               }
         
            }
            console.log(arr);
         },
/*********************************************************************************************** */
//                            Algorithm Programs                                                 //
/*********************************************************************************************** */
   /**************** Anagram Detection **************************/     
    checkAnagrams(word1,word2){
        var str1=this.reduceCodeForAnagram(word1);
        var str2=this.reduceCodeForAnagram(word2);
        return (str1===str2)
       
    },

    reduceCodeForAnagram(word){
        return word.toLowerCase().split('').sort().join('');

    },
  /************************** Prime Number in a range 0 - 1000 */

  primeNumberInARange(){
     var arr=[];
    const sum=0
   // for(let k=0;k<1000;k++){

    for(let i=0;i<=1000;i++){
        if(i==2){
            arr.push(i);
        }
        var flag=0;
        for(let j=2;j<i;j++){
            
            if(i%j==sum){
                flag=0
                break 
            }else{
                flag=1;
            } 
        }
        if(flag==1){
            arr.push(i);
            //console.log(i+' ');
        }
        
 }

//  return arr
console.log("Prime Numbers :: "+arr);
//return arr

},
    /********************************************************************************* */

    //******************** Buble Sort For Interger ***************************** */

    bubbleSortInt(intArr){
        const n=intArr.length

        for(let i=0;i<n-1;i++){
            for(let j=0;j<n-i-1;j++){
                if(intArr[j]>intArr[j+1]){
                    let temp=intArr[j];
                    intArr[j]=intArr[j+1]
                    intArr[j+1]=temp
                }

            }
        }
        console.log(intArr)
        //return intArr
    },
    //******************** Insertion Sort For Interger ***************************** */

    insertionSortInt(intArr){
        var temp;
		
		var n=intArr.length;
		for(let i=1;i<n;i++) {
			
			temp=intArr[i];
			var j=i;
			while(j>0 && intArr[j]<intArr[j-1]) {
				intArr[j]=intArr[j-1];
				j--;
				intArr[j]=temp;
            }	
            		
		}
			console.log(intArr);
    },

    //************************* Vanding Machine **********************/
    calculateMinNotes(amount){
        var minNote
   
        if(amount ==0){
            return
        }
        //calculate 1000 rupees notes
        if(amount>=1000){
            minNote=minNote+parseInt(amount/1000)
            console.log("1000 Rupees Notes Are :: "+parseInt(amount/1000));
            
            if(amount/1000==0){
                return
            }else{
                this.calculateMinNotes(amount%1000)
            }
        }
        //calculate 500 rupees notes
        else if(amount>=500){
            minNote=minNote+parseInt(amount/500)
            console.log("500 Rupees Notes Are :: "+parseInt(amount/500));
            
            if(amount/500==0){
                return
            }else{
                this.calculateMinNotes(amount%500)
            }
        }
        //calculate 100 rupees notes
        else if(amount>=100){
            minNote=minNote+parseInt(amount/100)
            console.log("100 Rupees Notes Are :: "+parseInt(amount/100));
            
            if(amount/100==0){
                return
            }else{
                this.calculateMinNotes(amount%100)
            }
        }
        //calculate 50 rupees notes
        else if(amount>=50){
            minNote=minNote+parseInt(amount/50)
            console.log("50 Rupees Notes Are :: "+parseInt(amount/50));
            
            if(amount/50==0){
                return
            }else{
                this.calculateMinNotes(amount%50)
            }
        }
        //calculate 10 rupees notes
        else if(amount>=10){
            minNote=minNote+parseInt(amount/10)
            console.log("10 Rupees Notes Are :: "+parseInt(amount/10));
            
            if(amount/10==0){
                return
            }else{
                this.calculateMinNotes(amount%10)
            }
        }
        //calculate 5 rupees notes
        else if(amount>=5){
            minNote=minNote+parseInt(amount/5)
            console.log("5 Rupees Notes Are :: "+parseInt(amount/5));
            
            if(amount/5==0){
                return
            }else{
                this.calculateMinNotes(amount%5)
            }
        }
        //calculate 2 rupees notes
        else if(amount>=2){
            minNote=minNote+parseInt(amount/2)
            console.log("2 Rupees Notes Are :: "+parseInt(amount/2));
            
            if(amount/2==0){
                return
            }else{
                this.calculateMinNotes(amount%2)
            }
        }
        //calculate 1 rupees notes
        else if(amount>=1){
            minNote=minNote+parseInt(amount/1)
            console.log("1 Rupees Notes Are :: "+parseInt(amount/1));
            
            if(amount/1==0){
                return
            }else{
                this.calculateMinNotes(amount%1)
            }
        }
        
       return minNote
    
    }

    

}//module.export;