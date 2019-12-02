/*****************************************************************************
 *Execution         :   1. default node         cmd> node  deckOfCardsUsingQueueList.js  
 * Purpose: 1. Write a Program DeckOfCards.js , to initialize deck of cards having suit ("Clubs",
            Extend the above program to create a Player Object having Deck of Cards, and
            having ability to Sort by Rank and maintain the cards in a Queue implemented using
            Linked List. Do not use any Collection Library. Further the Player are also arranged
            in Queue. Finally Print the Player and the Cards received by each Player.
 * @file                 :  deckOfCardsUsingQueueList.js
 * @overview       : Deck Of Cards Using Queue
 * @author  SHAILESH BORASE
 * @version node v8.10.0    npm 3.5.2
 * @since  29/11/2019
 *  *****************************************************************************/


const oopsUtility=require('../utility/oopsUtility/deckOfCardsUtility')

    var suit=['Heart','Diamond','Spade','Club']
    var ranks=[2,3,4,5,6,7,8,9,10,'A','J','Q','K']
    
    //Creating Object of DeckOfDeck Class
    var DecObj=new oopsUtility.DeckOfCards(suit,ranks)

    console.log('\nDistribution Of Cards Among Four Players Are ::\n');
    DecObj.distributesCardsUsingQueueList();
    
       
       

