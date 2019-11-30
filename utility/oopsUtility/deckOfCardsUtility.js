
class DeckOfCards{
    /*
    *@description: constructor to initialize suit and ranks array 
    *@param: suit and ranks
    *@return:void
    */
    constructor(suit,ranks){
        this.suit=suit;
        this.ranks=ranks;
    }
    /*
    *@description: function to elements of Cards 
    *@param: no parameters
    *@return:deck[]
    */
    shuffleCards(){
        var deck=[]
        
        for(let i=0;i<this.suit.length;i++){

            for(let j=0;j<this.ranks.length;j++){

                
                deck.push(' '+this.suit[i]+' '+this.ranks[j]+' ')
            }
        }

        //lenght == 52= total number of cards
        var length=this.suit.length*this.ranks.length

        //shuffling using random function
        for(let i=0;i<length;i++){
            var randomValue=Math.floor(Math.random()*length)
    
    
            var temp=deck[randomValue]
            deck[randomValue]= deck[i]
            deck[i]=temp
    
        }

        return deck;

    }

    /*
    *@description: function to distributes 9 cards among 4 playes each
    *@param: no parameters
    *@return:array[]
    */
    distributesCards(){
        try{

            var deck=[]
            deck=this.shuffleCards(suit,ranks)
            
            var p=0
            var array=[[],[],[],[]]
            for(let player=0;player<4;player++){

                for(let card=0;card<9;card++){

                    array[player][card]=deck[p++]
                    

                
                }
            }

            return array;
        }catch(error){
            console.log('invalid input array..\nEnter Again ::');
            var suit=['Heart','Diamond','Spade','Club']
            var ranks=[2,3,4,5,6,7,8,9,10,'A','J','Q','K']
            this.distributesCards(suit,ranks)
            return error
            
        }    
    }
    /*
    *@description: function to Print the all four player along with the cards distributed 
    *@param: array[]
    *@return:void
    */
    printResult(array){
        try{
            if(array==[]||array==null||array==''){
                throw 'invalid'
            }
            else{
                for(let i=0;i<4;i++){
                    console.log('Player '+(i+1)+' :: '+array[i]+'\n');
                    
                }

                return true

            }
        }catch(error){
            console.log(error);
        
        }
    }

}


module.exports={
    DeckOfCards,
    

 }