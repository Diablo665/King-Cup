import styles from "./EndGame.module.css";
import { useDispatch } from "react-redux";
import { updateStateBeforeGame, startGame } from "../../store/cardInfoSlice";
import { getCardsList } from "../../utils/helper";
import { setisAllEndCardsTook } from "../../store/gameStatuses";


const EndGame = () => {

  const dispatch = useDispatch();

  const resetGame = () => {
    const selectedCards = getCardsList()
    dispatch(updateStateBeforeGame(selectedCards['cards']));
    dispatch(setisAllEndCardsTook(false))
    dispatch(startGame())
  }

  return (
    <div className={styles.endGameContainer}>
      <div className={styles.endGameContent}>
        <div className={styles.title}>Игра окончена!</div>
        <button className={styles.restartButton} onClick={resetGame}>
          Начать заново
        </button>
      </div>
    </div>
  );
};

export default EndGame;
