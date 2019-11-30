

class InventoryClass{
    constructor(Obj){
        this.Obj=Obj;
    }

    input() {
        const readline = require('readline-sync');
        let input = readline.question("");
        return input;
    
    }

    inventory(){

    }

}

module.exports={
    InventoryClass,
}