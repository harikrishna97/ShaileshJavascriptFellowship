const Utility=require('../utility/utility');

do{
var n=Utility.input();
}while(checkN(n));

Utility.harmonic(n);

// check  for N!=0
function checkN(n){
    
    if(n===0){
        console.log("Number should be positive..");
        return true;
    }else{
        return false;
    }

}