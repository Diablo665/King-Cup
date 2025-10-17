import styles from './Card.module.css';
import RulesAddForm from '../RulesAddForm/RulesAddForm';
import { useState } from 'react';


const Card = ({ cardNumber, cardSuit, text, rules, onAddRules, isRuleAdd, onCardTook }) => {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  const handleCardClick = () => {

    setIsLeaving(true);
    setIsEntering(false);
    
    const timeoutId = setTimeout(() => {
      onCardTook();
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
          <RulesAddForm onAddRules={onAddRules} />
        </div>
      )}
    </div>
  );
};

export default Card;