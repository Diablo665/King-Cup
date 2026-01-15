import cards from '../cards.json'


/* Перемешиваем карты */
const shuffleDeck = (status, deck) =>  {  

    const mutableDeck = [...deck];

    for (let i = 0; i < deck.length; i++) {  

        let j = Math.floor(Math.random() * deck.length);   
        let temp = mutableDeck[+i];  

        mutableDeck[+i] = mutableDeck[+j];  
        mutableDeck[+j] = temp;  
    }  
    return {status: status, cards: mutableDeck};
}

export default shuffleDeck;


export const getSuitList = (cardList) => {
    const suitList = {};
    
    cardList.forEach(elem => {
        if (suitList[elem.cardNumber]) {
            suitList[elem.cardNumber]++;
        } else {
            suitList[elem.cardNumber] = 1;
        }
    });
    return suitList;
};

export const getCardsList = () => {
    
    if (getInfoFromLocalSession('selectedFile').length > 0){

        const cardsFromSession = getInfoFromLocalSession('selectedFile')
        return shuffleDeck('added', cardsFromSession); 
    }
    else{
        return shuffleDeck('notAdded', cards)
    };
  }

/* 

Работа с  LocalSession

*/ 

export const getInfoFromLocalSession = (key) => {

    const info = sessionStorage.getItem(key);

    if(!info){
        return []
    }

    return JSON.parse(info);
};

export const deleteInfoFromLocalSession = (key) => {
    sessionStorage.removeItem(key);
};


/* Функции для чтения пользовательского файла */ 

export const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
        const JSONdata = await handleFileReader(file);
        return JSONdata

    }else{
        console.log('Ошибка добавления файла');
    }
};

const handleFileReader = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const content = e.target.result;
                const data = JSON.parse(content);
                sessionStorage.setItem('selectedFile', content);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        };
        
        reader.onerror = (error) => {
            reject(error);
        };
        
        reader.readAsText(file);
    });
};

