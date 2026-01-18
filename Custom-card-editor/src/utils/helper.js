export const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
        const JSONdata = await handleFileReader(file);
        return JSONdata;

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
                sessionStorage.setItem('customCardEdit', content);
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


export const getInfoFromLocalSession = (key) => {

    const info = sessionStorage.getItem(key);

    if(!info){
        return [];
    }

    return JSON.parse(info);
};

export const deleteInfoFromLocalSession = (key) => {
    sessionStorage.removeItem(key);
};