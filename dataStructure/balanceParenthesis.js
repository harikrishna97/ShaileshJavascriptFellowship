/*****************************************************************************
 *Execution         :   1. default node         cmd> node  balanceParenthesis.js  
 * Purpose: Desc ­> Take an Arithmetic Expression such as
            (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the
            performance of operations. Ensure parentheses must appear in a balanced
            fashion.
 * @file                 : balanceParenthesis.js                   
 * @overview       : check for balance parenthesis
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  21/11/2019 
 *****************************************************************************/
const Utility=require('../utility/stack')
var st=new Utility.Stack;

console.log('Enter Arithmatic Expression :: ');
var string=Utility.input()
checkForBalanceParenthiesis(string);

// var string= '((5+6)*(7+8)/(4+3)*(5+6)*(7+8)/)4+3)'

function checkForBalanceParenthiesis(string){
    try{
        if(string=='undefined'||string=='null'){
            throw 'invalid input';
        }else{
            var expression=string.split("")
            for(let i=0;i<expression.length;i++){
                if(expression[i]=='('){
                    st.push('(')
                
                }else if(expression[i]==')'){
                    if(st.isEmpty()){
                        st.push(')')
                        break
                    }
                    st.pop()
                }
            }
            if(st.isEmpty()){
                console.log('Parenthesis is Balanced');
                
            }else{
                console.log('Parenthesis is Not Balanced');

            }
        }    
    }catch(error){
        console.log('invalid input..!');
        console.log('Enter Expression Again');
        var string=Utility.input()
        checkForBalanceParenthiesis(string)
        return error
    }    
}
