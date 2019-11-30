

module.exports={
    
    deckOfCards(){

    var suit=['Heart','Diamond','Spade','Club']
    var ranks=[2,3,4,5,6,7,8,9,10,'Ace','Jack','Queen','King']

    

    var deck=[]
    
    for(let i=0;i<suit.length;i++){

        for(let j=0;j<ranks.length;j++){

            
            deck.push(suit[i]+' '+ranks[j])
        }
    }
// console.log(deck);

    
    // console.log(deck);
    
    var length=suit.length*ranks.length
    var array=[[],[],[],[]]

    for(let i=0;i<length;i++){
        var randomValue=Math.floor(Math.random()*length)


        var temp=deck[randomValue]
        deck[randomValue]= deck[i]
        deck[i]=temp

    }

    var play=0
    for(let player=0;player<4;player++){
        for(card=0;card<9;card++){
            array[player][card]=deck[card+play]
            play=Math.floor(Math.random()*card)

        
        }
    }
    //Suffling
    console.log('Distribution Of Cards Among Four Players Are :: ');
    
    for(let i=0;i<4;i++){
        console.log('Player '+i+' :: '+array[i]+'\n');
        
    }
 



}

}