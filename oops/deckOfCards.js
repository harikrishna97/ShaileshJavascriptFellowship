/*****************************************************************************
 *Execution         :   1. default node         cmd> node  deckOfCards.js  
 * Purpose: 1. Write a Program DeckOfCards.java , to initialize deck of cards having suit ("Clubs",
            "Diamonds", "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10",
            "Jack", "Queen", "King", "Ace"). Shuffle the cards using Random method and then
            distribute 9 Cards to 4 Players and Print the Cards the received by the 4 Players
            using 2D Array...
 * @file                 :  deckOfCards.js 
 * @overview       : Deck Of Cards
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  29/11/2019
 *  *****************************************************************************/

const oopsUtility=require('../utility/oopsUtility/deckOfCardsUtility')

    var suit=['Heart','Diamond','Spade','Club']
    var ranks=[2,3,4,5,6,7,8,9,10,'A','J','Q','K']
    
    //Creating Object of DeckOfDeck Class
    var DecObj=new oopsUtility.DeckOfCards(suit,ranks)

    var array=[]
    array=DecObj.distributesCards();

    console.log('\nDistribution Of Cards Among Four Players Are ::\n');
        //Calling print Function to Printing array elements
        DecObj.printResult(array)
        

