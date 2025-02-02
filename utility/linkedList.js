
     //Node
     class Node{
        /*
        *@description: constructor to intitalize next=null and data 
        *@param: data
        *@return:void
        */
        constructor(data){
            this.data=data;
            this.next=null;
        }
     }

     class LinkedList{
        /*
        *@description: constructor to initialize head=null 
        *@param: no parameters
        *@return:void
        */
        constructor(){
             this.head=null
        }
        
        /*
        *@description: function to insert element in the linkedlist
        *@param: data
        *@return:void
        */
        
        addElement(data){
             
            var node=new Node(data)
        
            //if head is empty,then head=node 
            if(this.head===null){
                this.head=node
                return
            }else{//if head is not null,append node in linked List
        
                var temp=this.head
                while(temp.next!=null){
                    temp=temp.next
                }
                temp.next=node;
            }
            return


        }
        /*
        *@description: function to display all element from the Queue 
        *@param: no parameters
        *@return:void
        */
       display(){
           
            var temp=this.head
            var str=" ";
            while(temp){
                str=str+temp.data+" "
                
                temp=temp.next
            }
            return str;
        }
        /*
        *@description: function to search element from the linkedlist 
        *@param: no parameters
        *@return:void
        */
        search(searchKey){
            if(this.head==null){
                return false
            }
            var temp=this.head;
            while(temp!=null){

                if(temp.data===searchKey){
                    return true
                }
                temp=temp.next
            }
            return false
            

        }

        //Delete Element from the List
        deleteElement(key){
            if(this.head!=null){
                
                if(this.head.data===key){
                    this.head=this.head.next
                    return
                }else{
                    var current=this.head
                    var prev=null
                    while(current!=null){
                        if(current.data===key){
                            if(prev==null){
                            this.head=current.next
                            }else{
                                prev.next=current.next;
                                console.log('Deleted '+current.data)
                            }
                        }
                        prev = current; 
                        current = current.next; 
                    }
                    return false  

                }
            

            }
        }

        //Sort LinkedList
        sortingLinkedlist(){
            var currentNode=this.head
            var nextNode=null
            var temp

            if(this.head==null){
                return
            }else{
                while(currentNode!=null){
                    nextNode=currentNode.next
                    while(nextNode!=null){

                        if(currentNode.data>nextNode.data){
                            temp=currentNode.data
                            currentNode.data=nextNode.data
                            nextNode.data=temp
                        }
                        nextNode=nextNode.next
                    }
                    currentNode=currentNode.next
                }
            }

        }


    }
    
    module.exports={
        LinkedList,

        //input from user
        input() {
            var readline=require('readline-sync')
            let input = readline.question("");
            return input;
    
        },

        //input from file
        inputFromFile(file){
            const fis=require('fs')
            var data=fis.readFileSync(file,'utf8')
            var stringData=data.trim().split(' ')

            return stringData;
        },

        //write to file
        outputToFile(file,content){
            const fos=require('fs')
            fos.writeFileSync(file,content,'utf8')

        },

        
}