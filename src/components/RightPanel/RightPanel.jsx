import styles from './RightPanel.module.css';
import Rule from '../Rule/Rule';

const RightPanel = ({rules}) => {

    return (
        <div className={styles.RightPanel}>
            <h3 > Кастомные правила </h3>

            {rules.length === 0 ? ( 

            <div className={styles.gameRulesInfo}>
                <p>
                    Кастомные правила будут появляться по мере прохождения игры.
        
                    При выпадении специальной карты появится окно ввода для создания нового правила.
        
                    <span className={styles.warning}>
                        Важно: все введённые правила сохраняются до конца игры и не подлежат редактированию. 
                        Пожалуйста, внимательно формулируйте правила при их создании.
                    </span>
                    <br />
                    <strong>
                        Добавлять правила не обязатель. Если не хотите этого делать, то просто пролистайте карту с заданием.
                    </strong>
                        
                    
                </p>
            </div>

            ) : rules.map((rule, i) => 
                <Rule textRule={rule} key={i}/>
            )}
        </div>
    ) 


}

export default RightPanel