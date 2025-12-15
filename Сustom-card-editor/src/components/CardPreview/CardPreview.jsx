import styles from './CardPreview.module.css'

const CardPreview = () => {

    const cards = [{number: 1, suit: 'T', text: 'Тестовая карта 1', rules: true},
        {number: 2, suit: 'Z', text: 'Тестовая карта 2', rules: false},
        {number: 3, suit: 'N', text: 'Тестовая карта 3', rules: true},
        {number: 4, suit: 'T', text: 'Тестовая карта 4', rules: false},
        {number: 5, suit: 'M', text: 'Тестовая карта 5', rules: true},
        {number: 6, suit: 'T', text: 'Тестовая карта 6', rules: false}]

    const onDelete = () => {
        console.log('Удалим')
    }

    return (
      <div className={styles.previewContainer}>
        <h2 className={styles.title}>Список добавленных карт</h2>
        
        {cards.length === 0 ? (
          <p className={styles.emptyMessage}>Нет добавленных карт</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Номер</th>
                <th className={styles.th}>Масть</th>
                <th className={styles.th}>Текст</th>
                <th className={styles.th}>Есть правило</th>
                <th className={styles.th}>Действие</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card, index) => (
                <tr key={card.id || index} className={styles.tr}>
                  <td className={styles.td}>{card.number || '-'}</td>
                  <td className={styles.td}>{card.suit || '-'}</td>
                  <td className={styles.td}>{card.text || '-'}</td>
                  <td className={styles.td}>
                    {card.rules ? 'Да' : 'Нет'}
                  </td>
                  <td className={styles.td}>
                    <button
                      className={styles.deleteButton}
                      onClick={onDelete}
                      aria-label={`Удалить карту ${card.number} ${card.suit}`}
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };
  
  export default CardPreview;