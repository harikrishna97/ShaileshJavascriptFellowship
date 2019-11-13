const Utility=require('../utility/utility');

console.log("Enter How Many Coupons :: ");
var n=Utility.input();

console.log("Random Numbers Require to generate "+n+" Distinct coupons Numbers are :: "+Utility.generateDistinctCoupon(n));

    