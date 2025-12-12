import styles from './Card.module.css';
import RulesAddForm from '../RulesAddForm/RulesAddForm';
import { useState } from 'react';
import { nextStep, updateEndCardTook} from '../../store/cardInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setisAllEndCardsTook } from '../../store/gameStatuses';

const Card = ({ cardNumber, cardSuit, text, rules}) => {

  const [isLeaving, setIsLeaving] = useState(false);
  const [isEntering, setIsEntering] = useState(true);
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
          <p className={styles.cardText}>{text}</p>
        </div>
      </div>

      {rules && !isRuleAdd && (
        <div className={styles.formContainer}>
          <RulesAddForm />
        </div>
      )}
    </div>
  );
};

export default Card;