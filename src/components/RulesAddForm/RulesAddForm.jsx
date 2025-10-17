import { useState } from "react";
import styles from "./RulesAddForm.module.css";

const RulesAddForm = ({ onAddRules }) => {
  const [newRule, setNewRule] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRules([newRule]);
    setNewRule('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Новое правило</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Правило"
        value={newRule}
        onChange={(e) => setNewRule(e.target.value)}
      />
      <div className={styles.buttonContainer}>
        <button className={styles.button} type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
};

export default RulesAddForm;