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

      </div>
    </div>
  );
};

export default Instruction;
