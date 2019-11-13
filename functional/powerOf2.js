const Utility =  require("../utility/utility");
do{
    console.log("Enter Year :: ");
    var n=Utility.input();
}while(checkN(n));

Utility.findPowerOf2(n);
// check 
function checkN(n){
    console.log("hari");
    
    if(n<0||n>31){
        console.log("Number Should be in the range (0-31):: ");
        return true;
    }else{
        return false;
    }

}