import React from 'react';
import styles from './Card.module.css';
import RulesAddForm from '../RulesAddForm/RulesAddForm';
import { useState } from 'react';
import { nextStep, updateEndCardTook} from '../../store/cardInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setisAllEndCardsTook } from '../../store/gameStatuses';

const Card = ({ cardNumber, cardSuit, text, rules}) => {

  const [isLeaving, setIsLeaving] = useState(false);
  const [isEntering, setIsEntering] = useState(true);
  const isAllEmpty = cardNumber.trim() === "" && cardSuit.trim() === "" && text.trim() === "";
  const dispatch = useDispatch();
  const {isRuleAdd, endCards, endCardTookValue} = useSelector((state) => state.game)

  const handleCardClick = () => {

    setIsLeaving(true);
    setIsEntering(false);
    
    const timeoutId = setTimeout(() => {
      if(cardNumber in endCards){
        dispatch(updateEndCardTook(cardNumber));
        (endCards[cardNumber] === endCardTookValue[cardNumber] + 1 ) && dispatch(setisAllEndCardsTook(true))
      }
      dispatch(nextStep());
      setIsLeaving(false);
      setIsEntering(true);
    }, 500);
      
    return () => clearTimeout(timeoutId);
  };

  const getClasses = () => {
    return [
      styles.card,
      isLeaving && styles.isLeaving,
      isEntering && styles.isEntering,
      isEntering && styles.isVisible,
      isAllEmpty && styles.isAllEmpty
    ].filter(cls => cls); 
  };



  return (
    <div className={getClasses().join(' ')}>
      <div 
        className={styles.cardWrapper} 
        onClick={handleCardClick}
      >
        <div className={styles.topLeft}>
          <span className={styles.number}>{cardNumber}</span>
          <span className={styles.suit}>{cardSuit}</span>
        </div>
        <div className={styles.bottomRight}>
          <span className={styles.number}>{cardNumber}</span>
          <span className={styles.suit}>{cardSuit}</span>
        </div>
        <div className={styles.cardContent}>
          <p className={styles.cardText}>{isAllEmpty ? `Тревога! В колоде появилась карта-невидимка. Ты заполнил всё… отсутствием. Браво!
            Это карта "Баго-фича".
            Мой план был прост: добавить проверку на пустые поля. Реальность: открыл редактор, закрыл, пошёл за чаем, вернулся через неделю и написал этот текст.
            Теперь она — официальный символ "я потом доделаю".
            Правило от души: по кругу каждый пьёт по 2 глотка, а вытащивший карту — 4 глотка подряд и говорит "за лень разработчика!"` : text}
          </p>
        </div>
      </div>

      {!isAllEmpty && rules && !isRuleAdd && (
        <div className={styles.formContainer}>
          <RulesAddForm />
        </div>
      )}
    </div>
  );
};

export default Card;