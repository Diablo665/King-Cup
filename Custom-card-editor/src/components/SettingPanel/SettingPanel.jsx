import styles from './SettingPanel.module.css'

const SettingPanel = () => {
  return (
    <div className={styles.settingContainer}>
      <h2 className={styles.title}>Настройка карты</h2>
      
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="suit">Масть карты</label>
          <input
            type="text"
            id="suit"
            className={styles.input}
            placeholder=""
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="value">Номер карты</label>
          <input
            type="text"
            id="value"
            className={styles.input}
            placeholder="Любое число, символ, слово"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="text">Текст карты</label>
          <textarea
            id="text"
            className={styles.textarea}
            rows={4}
            placeholder="Описание карты"
          />
        </div>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              id="hasRule"
              className={styles.checkbox}
            />
            Карта содержит правило
          </label>
        </div>

        <button type="submit" className={styles.saveButton}>
          Добавить карту
        </button>
      </form>
    </div>
  );
};

export default SettingPanel;