const oopsUtility=require('../utility/oopsUtility/deckOfCardsUtility')

    var suit=['Heart','Diamond','Spade','Club']
    var ranks=[2,3,4,5,6,7,8,9,10,'A','J','Q','K']
    
    //Creating Object of DeckOfDeck Class
    var DecObj=new oopsUtility.DeckOfCards(suit,ranks)

    var array=[]
    array=DecObj.distributesCards(suit,ranks);

    console.log('\nDistribution Of Cards Among Four Players Are ::\n');
        //Calling print Function to Printing array elements
        DecObj.printResult(array)
        

