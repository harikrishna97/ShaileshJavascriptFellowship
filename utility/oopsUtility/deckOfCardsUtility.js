

module.exports={
    
    deckOfCards(){

    let suit=['Heart','Diamond','Spade','Club']
    let ranks=[2,3,4,5,6,7,8,9,10,'Ace','Jack','Queen','King']

    var length=suit.length*ranks.length

    let deck=[]
    
    for(let i=0;i<suit.length;i++){

        for(let j=0;j<ranks.length;j++){

            
            deck.push(suit[i]+' '+ranks[j])
        }
    }
// console.log(deck);

    
    // console.log(deck);
    

    let array=[[],[],[],[]]

    for(let i=0;i<length;i++){
        let randomValue=Math.floor(Math.random()*length)


        var temp=deck[randomValue]
        deck[randomValue]= deck[i]
        deck[i]=temp

    }
    for(let player=0;player<4;player++){
        for(card=0;card<9;card++){
            array[player][card]=deck[card]
        

        
        }
    }
    //Suffling
    
 console.log(array);



}

}