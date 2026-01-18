import styles from './SettingPanel.module.css';
import React from 'react';
import { useRef } from 'react';
import { handleFileChange } from '../../utils/helper';
import { setCardsAfterUpload, setIsUploadError, setIsCardsUpload, addNewCard, openAlertMessage} from '../../store/cardsSlice';
import { useDispatch, useSelector} from 'react-redux';
import {useState} from "react";
import { deleteInfoFromLocalSession } from '../../utils/helper';

const SettingPanel = () => {
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const isCardUpload = useSelector((state) => state.cards.isCardsUpload);
  
    const [localCard, setLocalCard] = useState({
        "id": "",
        "cardNumber": "",
        "cardSuit": "",
        "text": "",
        "rules": false
    });

    const uploadFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const deleteUploadFile = () => {
        deleteInfoFromLocalSession('customCardEdit');
        dispatch(setCardsAfterUpload([]));
        dispatch(setIsCardsUpload(false));

    };
    const saveAddedCards = (target) => {
        handleFileChange(target)
            .then(
                (cardsList) => {
                    dispatch(setCardsAfterUpload(cardsList));
                    dispatch(setIsUploadError(false));
                    dispatch(setIsCardsUpload(true));
                },
                () => dispatch(setIsUploadError(true))
            );
      
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setLocalCard(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(localCard['text'].length );
        if(localCard['text'].length > 400) {
            dispatch(openAlertMessage());
        }

        dispatch(addNewCard(localCard));
        setLocalCard({
            id: "",
            cardNumber: "",
            cardSuit: "",
            text: "",
            rules: false
        });
    };


    return (
        <div className={styles.settingContainer}>
            <h2 className={styles.title}>Настройка карты</h2>

            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={saveAddedCards}
            />

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="suit">Масть карты</label>
                    <input
                        type="text"
                        name="cardSuit"
                        id="suit"
                        value={localCard.cardSuit}
                        className={styles.input}
                        placeholder=""
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="value">Номер карты</label>
                    <input
                        type="text"
                        id="value"
                        name="cardNumber"
                        value={localCard.cardNumber}
                        className={styles.input}
                        onChange={handleChange}
                        placeholder="Любое число, символ, слово"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="text">Текст карты</label>
                    <textarea
                        id="text"
                        name="text"
                        className={styles.textarea}
                        onChange={handleChange}
                        value={localCard.text}
                        rows={4}
                        placeholder="Описание карты"
                    />
                </div>

                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            id="hasRule"
                            name="rules"
                            checked={localCard.rules}
                            onChange={handleChange}
                            className={styles.checkbox}
                        />
            Карта содержит правило
                    </label>
                </div>

                <button type="submit" className={styles.saveButton}>
          Добавить карту
                </button>
        
            </form>
            <div> 
                {isCardUpload ? <button className={styles.deleteButton} onClick={deleteUploadFile}> Удалить загруженные и добавленные карты </button> : <button className={styles.saveButton} onClick={uploadFile}> Загрузить файл с картами </button> }
        
            </div> 
      
        </div>
    );
};

export default SettingPanel;