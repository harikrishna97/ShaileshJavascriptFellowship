//import linkedList from '../utility/linkedList'



//const Utility=require('../utility/utility')
const Utility=require('../utility/linkedList')
var list=new Utility.LinkedList;
const fs=require('fs')

var data=fs.readFileSync('unorderList.txt','utf8')
var stringData=data.toString().split(" ")

console.log(stringData)
for(let i=0;i<stringData.length;i++){
    list.addElement(stringData[i])
}
console.log(list.display());

console.log('Enter String To be Search :: ');
var searchKey=Utility.input()
if(searchKey.length<1){
    throw 'Enter valid String..'
    
}

var result=list.search(searchKey)

if(result===true){
    console.log('Element '+searchKey+'Is Found');
    //console.log(searchKey+' Is Deleted From the File');
    list.deleteElement(searchKey);
    //console.log('Elements in the File are :: '+list.display());
    
    
}else{

    console.log(searchKey+' Is Not Found')
    list.addElement(searchKey);
    //console.log(searchKey+' Is Added to the File')
    //console.log('Elements in the File are :: '+list.display());

}
var data=list.display()
//console.log(list.search(searchKey)?'Element Found':'Element Not Found')

fs.writeFileSync('unorderist.txt',data,'utf8')
