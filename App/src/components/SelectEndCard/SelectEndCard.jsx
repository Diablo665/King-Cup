import styles from './SelectEndCard.module.css';
import { getSuitList } from '../../utils/helper';
import { useSelector, useDispatch } from 'react-redux';
import { setEndCards } from '../../store/cardInfoSlice';
import { useState, useEffect } from 'react';


const SelectEndCard = () => {
  const { cards, endCards, customCardAdd} = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const cardSuitList = getSuitList(cards);

  const [localEndCards, setLocalEndCards] = useState({});

  useEffect(() => {
    if(customCardAdd === "added"){ 
        setLocalEndCards(endCards);
    }

  }, [endCards]);

  const saveCustomEndCard = () => {
    const newEndCards = Object.fromEntries(
      Object.keys(localEndCards).map(key => [key, 0])
    );
    dispatch(setEndCards({ endCards: localEndCards, endTook: newEndCards }));
  };

  const updateLocalEndList = (suit, value) => {
    if (value > 0) {
      setLocalEndCards(prev => ({ ...prev, [suit]: value }));
    } else {
      setLocalEndCards(prev => {
        const newState = { ...prev };
        delete newState[suit];
        return newState;
      });
    }
  };

  const checkNumber = (userInput, maxValue, suit) => {
    const value = Math.max(0, Math.min(maxValue, Number(userInput)));
    updateLocalEndList(suit, value);
    return value;
  };

  return (
    <div className={styles.endCardSelectConteiner}>
      <h2>Карты завершения</h2>
      <ul className={styles.endCardForm}>
        {Object.entries(cardSuitList).map(([suit, count]) => (
          <li className={styles.endCardSelect} key={suit}>
            <span>{suit} (Количество: {count})</span>
            <input
              type="number"
              max={count}
              min={0}
              value={localEndCards[suit] ?? 0} 
              onChange={(e) => checkNumber(e.target.value, count, suit)}
            />
          </li>
        ))}
      </ul>
      <button
        className={styles.saveCustomCard}
        onClick={saveCustomEndCard}
      >
        Сохранить
      </button>
    </div>
  );
};

export default SelectEndCard;
