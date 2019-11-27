const fis=require('fs')
const fos=require('fs')

class Inventory{

    constructor(name,weight,price){
        this.Name=name
        this.Weight=weight
        this.Price=price
    }

    total(weight,price){
        return weight*price
    }
    // set name(name){
    //     this.Name=name
        
    // }

    // set weight(weight){
        
    //     this.Weight=weight
       
    // }

    // set price(price){
        
    //     this.Price=price
    // }
}

class Rice extends Inventory{
    
    
    constructor(name,weight,price){
        super(name,weight,price);
        this.total(weight,price)
        
        
    }
}

class Pulses extends Inventory{
    constructor(name,weight,price){
        super(name,weight,price);
        this.total(weight,price)
    }
    
}
class Wheats extends Inventory{
    constructor(name,weight,price){
        super(name,weight,price);
        this.total(weight,price)
    }


}



module.exports={
    
    Rice,
    Pulses,
    Wheats,

    //input from file
    inputFromFile(file){
        
        var data=fis.readFileSync(file,'utf8')
        

        return data;
    },

    //write to file
    outputToFile(file,content){
        fos.writeFileSync(file,content,'utf8')

    },

    multiplyTwoValues(a,b){
        return a*b
    }
    
}
