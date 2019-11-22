


     
     class Node{
        /*
        @description: constructor of Node class for initialising next=prev=null and data 
        @param: data
        @return:void
        */
        constructor(data){
            this.data=data;
            this.next=null;
            this.prev=null;
        }
     }

     class Dequeue{
        /*
        @description: constructor of Dequeue class for initialising front=rear=null and size=0 
        @param: no parameters
        @return:void
        */
        constructor(){
            this.front=null
            this.rear=null
            this.size=0
        }

        /*
        @description: calculates length of Dequeue using size
        @param: no parameters
        @return:size
        */
        length(){
            return this.size
        }

        /*
        *@description: Function Checks for empty Dequeue 
        *@param: no parameters
        *@return:true or false
        */
        isEmpty(){
            return this.front==null
        }

        /*
        *@description: Function insert data in the front of Dequeue 
        *@param: data
        *@return:void
        */
        addFront(data){
            var temp=new Node(data)

            if(this.isEmpty()){
                this.front=this.rear=temp;

            }else{
                this.front.pre=temp;
                this.front=temp;
            }
            console.log('Data'+data+' inserted Successfully');
            
            this.size++
        }

        /*
        *@description: Function insert data in the rear of Dequeue 
        *@param: data
        *@return:void
        */
        addRear(data){
            var temp=new Node(data)

            if(this.rear==null){
                this.front=this.rear=temp;
            }else{
                this.rear.next=temp
                this.rear=temp
            }
            console.log('Data'+data+' inserted Successfully');
            this.size++
        }
        /*
        *@description: Function get front element in the Dequeue 
        *@param: no  parameters
        *@return:front.data
        */
        getFront(){
            if(this.isEmpty()){
                return false
            }else{
                return this.front.data;
            }
        }
        /*
        *@description: Function get rear element in the Dequeue 
        *@param: no  parameters
        *@return:rear.data
        */
        getRear(){
            if(this.isEmpty()){
                return false
            }else{
                return this.rear.data;
            }
        }

        /*
        *@description: Function delete Front element of Dequeue 
        *@param: no parameters
        *@return:void
        */
        removeFront(){

            if(this.front==null){
                console.log('Underflow.SS.\nDequeue is Empty');
                
            }else {

                var temp=this.front

                this.front=this.front.next

                if(this.front==null){
                    this.rear=null
                }else{
                    this.front.prev=null
                }
                console.log('Removed '+temp.data)
                this.size--
                return
            }
             
        }

        /*
        *@description: Function delete rear element of Dequeue 
        *@param: no parameters
        *@return:void
        */
        removeRear(){
            if(this.isEmpty()){
                console.log('Underflow..\nDequeue is Empty');
                
            }else{
                var temp=this.front
                this.rear=this.rear.prev
                
                if(this.rear==null){
                    this.front=null
                }else{
                    this.rear.next=null
                }
                console.log('Removed '+temp.data);
                this.size--
                return 
            }
             
        }

     }

     module.exports={
        Dequeue,


    //input from user
    input() {
        var readline=require('readline-sync')
        let input = readline.question("");
        return input;

    },


     }