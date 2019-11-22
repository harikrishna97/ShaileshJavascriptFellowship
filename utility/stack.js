//Node
class Node{
    /*
    @description: constructor of Node class for initialising next=null and data 
    @param: no parameters
    @return:size
    */
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    /*
    @description: constructor of Stack class for initialising top=null and size=0 
    @param: no parameters
    @return:void
    */
    constructor(){
         this.top=null
         this.size=0
    }
    
    /*
    *@description: function to calculate length of stack 
    *@param: no parameters
    *@return:size
    */
    length(){
        return this.size;

    }

    /*
    *@description: function to check for empty stack 
    *@param: no parameters
    *@return:true or false
    */
    isEmpty(){
        return this.size==0;
    }

    /*
    *@description: function to return peek element of stack
    *@param: no parameters
    *@return:top.data
    */
    peek(){
        return this.top.data
    }

    /*
    *@description: function to remove stack element 
    *@param: no parameters
    *@return:void
    */
    pop(){
        if(this.isEmpty()){
            console.log('Stack is Empty');
            
        }
        //var x=this.top.data
        this.top=this.top.next
        this.size--
          
    }

    /*
    *@description: function to push element in the stack 
    *@param: data
    *@return:void
    */
    push(data){
        var temp= new Node(data)

        temp.next=this.top
        this.top=temp
        this.size++
    }

    /*
    *@description: function to display all elements in the stack 
    *@param: no parameters
    *@return:void
    */
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

        /*
        *@description: Function to get user input 
        *@param: no parameters
        *@return:input
        */
        input() {
            var readline=require('readline-sync')
            let input = readline.question("");
            return input;

        },

    

    
    
}