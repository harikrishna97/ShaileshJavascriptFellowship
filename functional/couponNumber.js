/*****************************************************************************
 *Execution         :   1. default node         cmd> node couponNumber.js 
 * Purpose: Print the N distinct Coupon Numbers.
 * @file                 : couponNumber.js 
 * @overview       : N distinct Coupon Numbers.
 * @author  SHAILESH
 * @version v12.13.0
 * @since   12/11/2019
 *****************************************************************************/
const Utility=require('../utility/utility');

console.log("Enter How Many Coupons :: ");
var n=Utility.input();

Utility.generateDistinctCoupon(n);

    