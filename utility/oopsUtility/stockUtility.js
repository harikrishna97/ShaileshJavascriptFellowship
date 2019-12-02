const fis=require('fs')
const fos=require('fs')

class Stock{
    /*
    *@description: constructor to initialize values
    *@param: shareName,sharePrice,
    *@return:void
    */
    constructor(shareName,numberOfShare,sharePrice){
        this.shareName=shareName
        this.numberOfShare=numberOfShare
        this.sharePrice=sharePrice
    }

    /*
    *@description: function to calculate Total Price
    *@param: string
    *@return:numberOfShare*numberOfShare
    */
    total(){

        return this.numberOfShare*this.numberOfShare;
    }
}

module.exports={

    Stock,

    /*
    *@description: function to take input from user
    *@param: no para
    *@return:input
    */
    input() {
        const readline = require('readline-sync');
            let input = readline.question("");
            return input;
        
        },
        /*
        *@description: function to take input from File
        *@param: file
        *@return:stringData
        */
        inputFromFile(file){
                
            var data=fis.readFileSync(file,'utf8')
            var stringData=data.trim()
        
            return stringData;
        },
        /*
        *@description: function to Write into File
        *@param: file,content
        *@return:void
        */
        //write to file
        outputToFile(file,content){
            fos.writeFileSync(file,content,'utf8')
        
        },
}