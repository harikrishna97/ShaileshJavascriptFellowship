

// Created Node for implementing Queue
class Node{
    /*
    @description: constructor of Node class for initialising next=null and data 
    @param: no parameters
    @return:size
    */
    constructor(data){
        this.next=null;
    }
 }

 // class Queue
 class Queue{
    /*
    @description: constructor of Queue class for initialising frontA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            =null and size=0 
    @param: no parameters
    @return:void
    */
    constructor(){
         this.front=null
         this.rear=null
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
    *@description: function to insert element in the Queue 
    *@param: data
    *@return:void
    */
    enqueue( data) {
		var temp=new Node(data);
		
		if(this.isEmpty()) {
			this.front=temp;
		}else {
			this.rear.next=temp;
		}
		
		this.rear=temp;
		
		this.size++;
	}

    /*
    *@description: function to remove element from the Queue 
    *@param: no parameters
    *@return:void
    */
    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is Empty');
            
        }
        var data=this.front.data;
		this.front=this.front.next;
		
		if(this.front==null) {
		  this.rear=null;
		 }
		
		  this.size--; 
		  console.log('Data '+data+' deleted sucessfully');
    }
    /*
    *@description: function to display all element from the Queue 
    *@param: no parameters
    *@return:void
    */
    display(){

        if(this.isEmpty()){
            console.log('Queue is Empty');
            
        }else{

            var temp=this.front
            while(temp!=null){
                console.log(temp.data);
                temp=temp.next
                
            }
            console.log('null');
            
        }
    }
}   

module.exports={

    Queue,

   /*
    *@description: function get input from user 
    *@param: no parameters
    *@return:input
    */
    input() {
        var readline=require('readline-sync')
        let input = readline.question("");
        return input;

    },

    
}