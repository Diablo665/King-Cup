import { useState } from "react";
import styles from "./RulesAddForm.module.css";
import { useDispatch } from 'react-redux';
import { addRule } from "../../store/cardInfoSlice";

const RulesAddForm = () => {

  const [newRule, setNewRule] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRule(newRule));
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