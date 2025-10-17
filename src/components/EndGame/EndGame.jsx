import styles from "./EndGame.module.css";

const EndGame = ({ onRestart }) => {
  return (
    <div className={styles.endGameContainer}>
      <div className={styles.endGameContent}>
        <div className={styles.title}>Игра окончена!</div>
        <button className={styles.restartButton} onClick={() => onRestart()}>
          Начать заново
        </button>
      </div>
    </div>
  );
};

export default EndGame;
