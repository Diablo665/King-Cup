
/* Перемешиваем карты */
const shuffleDeck = (deck) =>  {  

    for (let i = 0; i < deck.length; i++) {  

        let j = Math.floor(Math.random() * deck.length);   
        let temp = deck[i];  

        deck[i] = deck[j];  
        deck[j] = temp;  
    }  

    return deck;
}

export default shuffleDeck;

/* 

Работа с  LocalSession

*/ 

export const getInfoFromLocalSession = (key) => {

    const cardList = sessionStorage.getItem(key);

    if(!cardList){
        return []
    }

    return JSON.parse(cardList);
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

export const handleDownload = () => {

    const url = '/patternCard.json'; 

    const link = document.createElement('a');
    link.href = url;
    link.download = 'customCard.json';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

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

