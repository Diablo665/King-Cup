import styles from './CartsPanel.module.css';
import Card from '../Card/Card';
import EndGame from '../EndGame/EndGame';
import Instruction from '../Instruction/Instruction';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { goToPrevCard} from '../../store/cardInfoSlice';
import { useEffect } from 'react';
import { updateScreenSize} from '../../store/gameStatuses';

const CartsPanel = () => {
    const dispatch = useDispatch();
    const {cards, isStartGame, prevCards} = useSelector((state) => state.game);

    const {isSmallScreen, isAllEndCardsTook} = useSelector((state) => state.statuses)

    const goToPrev = () => {
        if(prevCards.length > 0) {
            dispatch(goToPrevCard())
        }
        
    }

    const checkScreenSize = () => {
      dispatch(updateScreenSize());
    };
  
    useEffect(() => {
      checkScreenSize(); 
  
      const handleResize = () => {
        checkScreenSize();
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <div className={styles.CartsPanel}>
        {isStartGame && cards.length > 0 && !isAllEndCardsTook ? (
          <>
            <div className={styles.startCard}>
              {isSmallScreen ? (
                <>
                  <Card
                    text={cards[0].text}
                    cardNumber={cards[0].cardNumber}
                    cardSuit={cards[0].cardSuit}
                    rules={cards[0].rules}
                  />
                  <button
                    onClick={goToPrev}
                    className={styles.mobileBackCardButton}
                  >
                    К прошлой карте
                  </button>
                </>
              ) : (
                <>
                  <IoArrowBackCircleOutline
                    className={styles.backCardButton}
                    onClick={goToPrev}
                  />
                  <Card
                    text={cards[0].text}
                    cardNumber={cards[0].cardNumber}
                    cardSuit={cards[0].cardSuit}
                    rules={cards[0].rules}
                  />
                </>
              )}
            </div>
          </>
        ) : isStartGame &&
          (cards.length === 0 || isAllEndCardsTook) ? (
          <EndGame />
        ) : (
          <Instruction />
        )}
      </div>
    );

}

export default CartsPanel