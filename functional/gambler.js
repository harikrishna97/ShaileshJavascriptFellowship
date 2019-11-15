const Utility = require('../utility/utility');
var stake, goal, trials, bet = 0, win = 0, betPrice;
console.log("Enter Stake Price :: ");
cash = Utility.input();

console.log("Enter Number Of Time :: ");
times = Utility.input();

console.log("Enter Stake Goal :: ");
goal = Utility.input();
//gambler(cash, times, goal);
// // console.log("Enter BetPrice :: ");
// // betPrice=Utility.input();
var bet=0,win=0;
//var cash;
for(let i=0;i<trials;i++){

    // cash=stake;
    while(cash>0&&cash<goal){
        bet++;
        if(Math.random<0.5){
            cash++;//=cash+betPrice;
        }else{
            cash--;//=cash-betPrice;

        }
    }
    if(cash==goal){
        //console.log("Goal "+goal+" Reached");
        win++;
    }

}

console.log(win," wins of ",trials)
console.log("Percentage of trial is:" + 100*win/trials);
console.log("average of bet is:"+ 1.0*bet/trials);




