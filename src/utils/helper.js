const shuffleDeck = (deck) =>  {  

    for (let i = 0; i < deck.length; i++) {  

        let j = Math.floor(Math.random() * deck.length);   
        let temp = deck[i];  

        deck[i] = deck[j];  
        deck[j] = temp;  
    }  

    return deck;
}

export default shuffleDeck