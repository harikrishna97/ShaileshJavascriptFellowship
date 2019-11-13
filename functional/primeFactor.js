const Utility= require('../utility/utility');

do{
    console.log("Enter Positive Number :: ");
    var number = Utility.input();
}while(checkN(number));

Utility.primeFactors(number);

//Check N>0

function checkN(number){

    if(number<0){
        console.log("Number Should be positve..");
        return true;
    }
    else{
        return false;
    }

}