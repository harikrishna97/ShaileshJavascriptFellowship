
   const Utility=require('../utility/utility'); 
 //do{
    console.log(" enter year ::");
    
    var year=Utility.input();
 //}while(checkLength(year));

//   var result= Utility.leapYear(year);
   console.log(Utility.leapYear(year)? 'Year '+year+' Is leap Year' : 'Year '+year+' Is Not leap Year' );
   
 // checking  year is 4 digit number or not
//  function checkLength(year)
//  {

//     if(year<1000||year>9999){
//         console.log("Year should be 4 digit number..");
//         return true;
//     }else{
//         return false;
//     }
//  }

