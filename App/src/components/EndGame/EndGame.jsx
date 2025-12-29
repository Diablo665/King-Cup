import React from 'react';
import styles from "./EndGame.module.css";
import { useDispatch, useSelector} from "react-redux";
import { updateStateBeforeGame } from "../../store/cardInfoSlice";
import { startGame } from "../../store/gameStatuses";
import { getCardsList } from "../../utils/helper";
import { setisAllEndCardsTook } from "../../store/gameStatuses";

const EndGame = () => {
  const customGame = useSelector((state) => state.game.customCardAdd)
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

        {customGame === "notAdded" && <div className={styles.endGameText}> Игра завершена! Все четыре короля найдены!
          Согласно правилам «Кубка короля», тот игрок, который вытянул последнего, четвёртого короля, получает особый «приз» — должен выпить содержимое кубка.
          Пора отмечать завершение партии!  </div>}

        <button className={styles.restartButton} onClick={resetGame}>
          Сыграть ещё раз
        </button>
      </div>
    </div>
  );
};

export default EndGame;
