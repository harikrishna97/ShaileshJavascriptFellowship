/*****************************************************************************
 *Execution         :   1. default node         cmd> node unorderList.js 
 * Purpose: Read the Text from a file, split it into words and arrange it as Linked List.
            Take a user input to search a Word in the List. If the Word is not found then add it
            to the list, and if it found then remove the word from the List. In the end save the
            list into a file
 * @file                 : unorderList.js  
 * @overview       : Find The Minimum Number of Notes
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  20/11/2019 
 *****************************************************************************/



//const Utility=require('../utility/utility')
const Utility=require('../utility/linkedList')
var list=new Utility.LinkedList;
const fos=require('fs')

var stringData=Utility.inputFromFile('unorderList.txt');

for(let i=0;i<stringData.length;i++){
    list.addElement(stringData[i])
}
console.log(list.display());

console.log('Enter String To be Search :: ');
var searchKey=Utility.input()
unOrderList(searchKey);

function unOrderList(searchKey){
    try{
        var format=/[^a-zA-Z]/
        if(format.test(searchKey)||searchKey==null||searchKey==undefined||searchKey==''){
            throw 'invalid String'
        }else{


            var result=list.search(searchKey)

            if(result===true){
                console.log('Element '+searchKey+' Is Found');
                list.deleteElement(searchKey);     
            }else{
                console.log(searchKey+' Is Not Found')
                list.addElement(searchKey);
                console.log(searchKey+' Is Added to the File')
                //console.log('Elements in the File are :: '+list.display());

            }

            var data=list.display()
            //console.log(list.search(searchKey)?'Element Found':'Element Not Found')

            fos.writeFileSync('unorderList.txt',data,'utf8')
            console.log('File Data Is :: '+data);
        }

    }catch(error){

        console.log("invalid input");
        console.log('Enter input again :: ');
        console.log('Enter String To be Search :: ');
        var searchKey=Utility.input()
        unOrderList(searchKey);
        return error
        
    }
}