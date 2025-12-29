import React from 'react';
import styles from "./Instruction.module.css";

const Instruction = () => {
  return (
    <div className={styles.instructionContainer}>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.subsectionTitle}>Как начать игру</h2>
          <p className={styles.text}>
            Для начала игры нажмите на кнопку "Начать игру"
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subsectionTitle}>Основные правила</h2>
          <ol className={styles.list}>
            <li className={styles.listItem}>Выберите карту</li>
            <li className={styles.listItem}>Прочитайте задание</li>
            <li className={styles.listItem}>Выполните задание</li>
          </ol>
        </div>
        <div className={styles.section}>
          <h2 className={styles.subsectionTitle}>Дополнительная информация</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>При игре со стандартными картами, игра завершается после того как выпадет 4 король.</li>
            <li className={styles.listItem}>Если загружены кастомные карты, то появится поле для выбора карты которая завершает игру. Нужно будет выбрать 1 или несколько номеров карт, а также количество вытянутых карт для завершения игры. </li>
            <li className={styles.warning}> При загрузке кастомных карт выбирать карты завершения игры необязательно. Этот этап можно пропустить и тогда игра будет продолжаться, пока карты не закончатся.</li>
            <li className={styles.listItem}> В случае возникновения технических проблем или вопросов, пожалуйста, напишите на электронную почту <a href="mailto:support@kingcup.ru" > support@kingcup.ru</a> . </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Instruction;
