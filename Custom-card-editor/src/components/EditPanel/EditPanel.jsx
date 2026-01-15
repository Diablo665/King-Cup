import styles from './EditPanel.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeEditingPanel, editSavedCard } from '../../store/cardsSlice';
import {useState} from 'react'

const EditPanel = () => {

    const dispatch = useDispatch();
    const {savedCard, editingID} = useSelector((state) => state.cards)
    const [localInfo, setlocalInfo] = useState({
        "id": editingID,
        "cardNumber": "",
        "cardSuit": "",
        "text": "",
        "rules": false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setlocalInfo(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    
    const saveEditingCard = () => {
        dispatch(editSavedCard(localInfo));
        dispatch(closeEditingPanel());
    }

    const closeEdit = () => {
        dispatch(closeEditingPanel());
    }

    const filteredCard = savedCard.filter((card) => Number(card.id) === Number(editingID))
    const editCardInfo = filteredCard[0];

    return (
      <div className={styles.overlay}>
        <div className={styles.panel}>
          <h3 className={styles.title}>Редактирование карты </h3>
            <div>
                Информация о карте: Номер {editCardInfo.cardNumber}, масть {editCardInfo.cardSuit}, текст {editCardInfo.text}, карта добавляет правило - {editCardInfo.rules ? "Да" : "Нет"}
            </div>
          <div className={styles.field}>
            <label className={styles.label}>Номер карты</label>
            <input 
              type="text"
              name="cardNumber"
              className={styles.input}
              placeholder="Введите номер"
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Масть</label>
            <input
              type="text"
              name='cardSuit'
              className={styles.input}
              placeholder=""
              aria-label="Масть карты"
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Текст карты</label>
            <textarea
              className={styles.textarea}
              name="text"
              placeholder="Введите текст карты"
              rows="4"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={styles.checkboxWrapper}>
            <input type="checkbox" id="hasRule" className={styles.checkbox} name='rules' onChange={handleChange}/>
            <label htmlFor="hasRule" className={styles.checkboxLabel}>
              Есть правило
            </label>
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.cancelButton} onClick={closeEdit}>Отмена</button>
            <button className={styles.saveButton} onClick={saveEditingCard}>Сохранить</button>
          </div>
        </div>
      </div>
    );
};

export default EditPanel