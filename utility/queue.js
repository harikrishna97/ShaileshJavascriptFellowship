

// Created Node for implementing Queue
class Node{

    constructor(data){
        this.data=data;
        this.next=null;
    }
 }

 // class Queue
 class Queue{

    constructor(){
         this.front=null
         this.rear=null
         this.size=0
    }
    //
    length(){
        return this.size;

    }
    //
    isEmpty(){
        return this.size==0;
    }

    //
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

    //
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

    //input from user
    input() {
        var readline=require('readline-sync')
        let input = readline.question("");
        return input;

    },

    
}