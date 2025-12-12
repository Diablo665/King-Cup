import styles from './EndCardInfo.module.css';
import { useSelector } from 'react-redux';

const EndCardInfo = () => {

    const {cards, endCardTookValue, endCards} = useSelector((state) => state.game)
    
    return (

        <div className={styles.EndCardConteiner}> 

            <p> Осталось карт: {cards.length}</p> 
            <h3> Карты завершающие игру: </h3>
            <ul> 
                {Object.entries(endCardTookValue).map(([suit, count]) => {
                   return <li key={suit}> Карта {suit} - {count} из {endCards[suit]}  </li>
                })}
            </ul>
           
        </div>
    )
}

export default EndCardInfo;