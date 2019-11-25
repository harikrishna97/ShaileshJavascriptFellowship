/*****************************************************************************
 *Execution         :   1. default node         cmd> node  primeAnagram2D.js  
 * Purpose: Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Queue using
            the Linked List and Print the Anagrams from the Queue. Note no Collection Library
            can be used.
 * @file                 : primeAnagram2D.js  
 * @overview       : Prime Anagram number strored in STACK and print in a reverse order
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  22/11/2019 
 *****************************************************************************/
const Utility=require('../utility/dsUtility')
const stUtility=require('../utility/stack')
var st=new stUtility.Stack;
var arr=[]
var arr2=[]
var array=[['000-100  :: ['],['100-200  :: ['],['200-300  :: ['],['300-400  :: ['],['400-500  :: ['],['500-600  :: ['],['600-700  :: ['],['700-800  :: ['],['800-900  :: ['],['900-1000 :: [']]
for(let i=2;i<1000;i++){
    if(Utility.isPrime(i)){
        arr.push(i)
    }

}
//  console.log(arr+' ');
var range =1000,k=0;

for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length-2;j++){
        if(Utility.primeAnagramOrNot(arr[i],arr[j])){
            if(arr[i]<=range){
                if(arr[j]<=range){
                    st.push(arr[i]);
                    st.push(arr[j]);
                    // console.log( array[k]+ " ");

                }
            }
            
        }
       
    }

}
//console.log( array+ "\n "); 
console.log('Number which are prime and anagrams are :: ');
 st.display();



/*
OUTPUT ::
bridgeit@bridgeit-LIVA-Z2V:~/Desktop/HariKrishnaFelloship/dataStructure$ node primeAnagramStack.js 
Number which are prime and anagrams are :: 
983
839
977
797
877
787
967
769
937
739
971
719
907
709
863
683
691
619
761
617
631
613
953
593
857
587
757
577
751
571
659
569
653
563
941
491
947
479
647
467
643
463
641
461
547
457
941
419
491
419
937
397
739
397
983
389
839
389
937
379
739
379
397
379
733
373
673
367
953
359
593
359
439
349
743
347
733
337
373
337
331
313
823
283
821
281
727
277
521
251
421
241
293
239
919
199
971
197
719
197
911
191
811
181
971
179
719
179
197
179
317
173
761
167
617
167
631
163
613
163
751
157
571
157
941
149
491
149
419
149
193
139
317
137
173
137
311
131
271
127
311
113
131
113
701
107
97
79
73
37
71
17
31
13

bridgeit@bridgeit-LIVA-Z2V:~/Desktop/HariKrishnaFelloship/dataStructure$ 
*/