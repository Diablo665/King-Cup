import styles from './SelectEndCard.module.css';
import { getSuitList } from '../../utils/helper';
import { useSelector, useDispatch } from 'react-redux';
import { setEndCards } from '../../store/cardInfoSlice';


const SelectEndCard = () => {

    const {cards} = useSelector((state) => state.game);
    const dispatch = useDispatch();
    const cardSuitList = getSuitList(cards);
    const customEndCardList = {};

    const saveCustomEndCard = () => {
        const newEndCards = Object.fromEntries(
             Object.keys(customEndCardList).map(key => [key, 0])
        );

        dispatch(setEndCards({endCards: customEndCardList, endTook: newEndCards}));
    };

    const updateCustomEndList = (suit, value) => {
        if (value > 0) {
            customEndCardList[suit] = value; 
          } else {
            delete customEndCardList[suit]; 
          }
      };

    const checkNumber = (userInput, maxValue, suit) => {
        const value = Number(userInput);
        
        if (value > maxValue) {
            return maxValue;
        }
        if (value < 0) {
            return 0;
        }
        
        updateCustomEndList(suit, value);
        return value;
    };

    /*const getValueFromStore = (suit) => {
        if(suit in endCards){
            return endCards[suit]
        }
        
    }*/

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
                            onChange={(e) => {
                                checkNumber(e.target.value, count, suit);
                                
                            }}
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