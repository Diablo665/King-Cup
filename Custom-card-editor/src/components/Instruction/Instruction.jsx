import styles from "./Instruction.module.css";
import React from 'react';
import { useState } from 'react';

const Instruction = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleInstruction = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={styles.instructionContainer}>
        <div className={styles.header} onClick={toggleInstruction}>
          <h3 className={styles.title}>Инструкция по созданию и редактированию карт</h3>
          <button
            className={styles.toggleButton}
            aria-label={isOpen ? 'Скрыть инструкцию' : 'Показать инструкцию'}
          >
            {isOpen ? '−' : '+'}
          </button>
        </div>
  
        {isOpen && (
          <div className={styles.content}>
            <section className={styles.section}>
              <h4 className={styles.subsectionTitle}>1. Добавление новой карты</h4>
              <ol className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Масть карты:</strong> масть карты может быть любым символом, числом или слово.
                </li>
                <li className={styles.listItem}>
                  <strong>Номер карты:</strong> желательно указывать число от 1 до 13 (или J, Q, K для фигурных карт), но также можно указывать любой символ, число или слово.
                </li>
                <li className={styles.listItem}>
                  <strong>Текст карты:</strong> опишите действие или правило, связанное с картой.
                </li>
                <li className={styles.listItem}>
                  <strong>Есть правило:</strong> отметьте чекбокс, если карта вводит новое правило в игру (Если чекбокс отмечен, то при выпадании карты появится поле для ввода правила).
                </li>
                <li className={styles.listItem}>
                  Нажмите кнопку <strong>«Сохранить карту»</strong>, чтобы добавить карту в коллекцию.
                </li>
              </ol>
            </section>
  
            <section className={styles.section}>
              <h4 className={styles.subsectionTitle}>2. Просмотр и управление картами</h4>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  В таблице отображается список всех добавленных карт с колонками:
                  <ul className={styles.sublist}>
                    <li><strong>Номер</strong> — добавленный номер  </li>
                    <li><strong>Масть</strong> — добавленная масть карты</li>
                    <li><strong>Текст</strong> — описание действия/правила</li>
                    <li><strong>Есть правило</strong> — отметка «Да»/«Нет»</li>
                    <li><strong>Действие</strong> — кнопка «Удалить» для удаления карты и кнопка «Отредактировать» для редактирования карты</li>
                  </ul>
                </li>
                <li className={styles.listItem}>
                  Чтобы удалить карту, нажмите кнопку <strong>«Удалить»</strong> в соответствующей строке.
                </li>
                <li className={styles.listItem}>
                  Чтобы отредактировать карту, нажмите кнопку <strong>«Отредактировать»</strong> в соответствующей строке.
                </li>
                <li className={styles.listItem}>
                  Таблица автоматически обновляется после добавления, удаления и редактирования карт.
                </li>
              </ul>
            </section>
  
            <div className={styles.tip}>
              <strong className={styles.tipTitle}>Совет 1:</strong>
              <span className={styles.tipText}>
                Перед сохранением проверьте что в созданных картах нет ошибок
              </span>
            </div>
            <div className={styles.tip}>
              <strong className={styles.tipTitle}>Совет 2:</strong>
              <span className={styles.tipText}>
                В случае возникновения технических проблем или вопросов, пожалуйста, напишите на электронную почту <a href="mailto:support@kingcup.ru" className={styles.emailLink}>support@kingcup.ru</a> .
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Instruction;