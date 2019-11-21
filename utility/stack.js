//Node
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{

    constructor(){
         this.top=null
         this.size=0
    }
    
    length(){
        return this.size;

    }

    isEmpty(){
        return this.size==0;
    }

    peek(){
        return this.top.data
    }

    pop(){
        if(this.isEmpty()){
            console.log('Stack is Empty');
            
        }
        //var x=this.top.data
        this.top=this.top.next
        this.size--
          
    }

    push(data){
        var temp= new Node(data)

        temp.next=this.top
        this.top=temp
        this.size++
    }

    display(){
        if(this.isEmpty()){
            console.log('Stack is Empty');
            
        }else{
            var temp= this.top;
			
			while(temp!=null) {
				console.log(temp.data);
				temp=temp.next;
			}
			console.log();
            

        }
    }

}

module.exports={
    Stack,

    //input from user
    input() {
        var readline=require('readline-sync')
        let input = readline.question("");
        return input;

    },

    

    
    
}