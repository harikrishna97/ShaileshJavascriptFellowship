const fis=require('fs')
const fos=require('fs')
module.exports={

    /**************** Input From User *************** */
    /*
    *@description: Function to get user input 
    *@param: no parameters
    *@return:input
    */
   input() {
    const readline = require('readline-sync');
    let input = readline.question("");
    return input;

},
//input from file
inputFromFile(file){
        
    var data=fis.readFileSync(file,'utf8')
    var stringData=data.trim()

    return stringData;
},

//write to file
outputToFile(file,content){
    fos.writeFileSync(file,content,'utf8')

},

replaceRegex(firstName,lastName,mobile,currentDate,TEMPLATE){

     TEMPLATE=TEMPLATE.replace('<<name>>',firstName)
     TEMPLATE=TEMPLATE.replace('<<full name>>',lastName)
     TEMPLATE=TEMPLATE.replace('xxxxxxxxxx',mobile)
     TEMPLATE=TEMPLATE.replace('01/01/2016',currentDate)

    return TEMPLATE;

}





}