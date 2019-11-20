
     //Node
     class Node{
        constructor(data){
            this.data=data;
            this.next=null;
        }
    }

     class LinkedList{

        constructor(){
             this.head=null
        }

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

       display(){
           var str='';
            var temp=this.head
            while(temp){
                //console.log(temp.data);
                str=str+temp.data+" "
                temp=temp.next
            }
            return str;
        }

        search(searchKey){
            var temp=this.head;
            while(temp!=null){

                if(temp.data===searchKey){
                    return true
                }
                temp=temp.next
            }
            return false
            

        }

        deleteElement(key){
         if(this.head.data===key){
             this.head=this.head.next
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
            
            

         }
            

        }



    }
    
    module.exports={
        LinkedList,

        input() {
            var readline=require('readline-sync')
            let input = readline.question("");
            return input;
    
        },

        inputFromFile(st){
            const fis=require('fs')
            var data=fs.readFileSync('unorderList.txt','utf8')
            var stringData=data.toString().split(" ")

            return stringData;
        },

        outputToFile(file,content){
            const fos=require('fs')
            fos.writeFileSync(file,content,'utf8')

        }
    }
        
   