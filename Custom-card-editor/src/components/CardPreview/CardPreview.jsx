import styles from './CardPreview.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { deleteCard, openEditingPanel } from '../../store/cardsSlice';
import { saveAs } from 'file-saver'

const CardPreview = () => {
    const dispatch = useDispatch();
    const {savedCard} = useSelector((state) => state.cards)
    
    const handlerEvent = (e) => {
      if (e.target.dataset.action === 'delete') {
        const cardId = e.target.dataset.id;
        dispatch(deleteCard(Number(cardId)))
      }else if(e.target.dataset.action === 'edit') {
        const cardId = e.target.dataset.id;
        dispatch(openEditingPanel(cardId));
      }
    }

    const downloadCards = () => {
      const cardsJSON = JSON.stringify(savedCard);
      const jsonBlob = new Blob([cardsJSON], { type: 'application/json;charset=utf-8' });
      saveAs(jsonBlob, 'custom.json')
    }

    return (
      <div className={styles.previewContainer}>
        <h2 className={styles.title}>Список добавленных карт</h2>
        
        {savedCard.length === 0 ? (
          <> 
            <p className={styles.emptyMessage}>Нет добавленных карт</p>
          </>
        ) : (
          <>
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
            <tbody onClick={handlerEvent}>
              {savedCard.map((card, index) => (
                <tr key={card.id || index} className={styles.tr}>
                  <td className={styles.td}>{card.cardNumber || '-'}</td>
                  <td className={styles.td}>{card.cardSuit || '-'}</td>
                  <td className={styles.td}>{card.text || '-'}</td>
                  <td className={styles.td}>
                    {card.rules ? 'Да' : 'Нет'}
                  </td>
                  <td className={styles.td}>
                    <button
                      className={styles.deleteButton}
                      data-id={card.id}
                      data-action="delete"
                      aria-label={`Удалить карту ${card.number} ${card.suit}`}
                    >
                      Удалить
                    </button>
                    <button
                      className={styles.editButton}
                      data-id={card.id}
                      data-action="edit"
                      aria-label={`Отредактировать карту ${card.number} ${card.suit}`}
                    >
                      Редактировать
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className={styles.downloadButton} onClick={downloadCards}> Сохранить файл с картами </button> 
          </>
        )}
      </div>
    );
  };
  
  export default CardPreview;