const fis=require('fs')
const fos=require('fs')

class Stock{
    constructor(shareName,numberOfShare,sharePrice){
        this.shareName=shareName
        this.numberOfShare=numberOfShare
        this.sharePrice=sharePrice
    }

    total(){

        return this.numberOfShare*this.sharePrice;
    }
}

module.exports={

    Stock,

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
}