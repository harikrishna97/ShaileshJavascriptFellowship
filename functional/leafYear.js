
   const Utility=require('../utility/utility');

 
 
 do{
    var year=Utility.input();
 }while(checkLength(year));

 Utility.leapYear(year);

 // checking  year is 4 digit number or not
 function checkLength(year)
 {

    if(year<1000||year>9999){
        console.log("Year should be 4 digit number..");
        return true;
    }else{
        return false;
    }
 }