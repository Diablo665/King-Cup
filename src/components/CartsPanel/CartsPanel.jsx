import styles from './CartsPanel.module.css';
import Card from '../Card/Card';
import EndGame from '../EndGame/EndGame';
import Instruction from '../Instruction/Instruction';

const CartsPanel = ({ startGame, cards, onCardTook, onRestart, onAddRules, isRuleAdd}) => {
    return (

        <div className={styles.CartsPanel}> 
            {(startGame && cards.length > 0) ? (
                <>
                    <p> Карт осталось: {cards.length}</p>
                    <div className={styles.startCard}> 
                        <Card text={cards[0].text} cardNumber={cards[0].cardNumber} cardSuit={cards[0].cardSuit } rules={cards[0].rules} onAddRules={onAddRules} isRuleAdd={isRuleAdd} onCardTook={onCardTook}/>
                    </div>
                    
                </>
            ) : startGame && cards.length === 0 ? (
                <EndGame onRestart={onRestart} />
            ) : (
                <Instruction />
            )}
        </div>
    )

}

export default CartsPanel