import styles from './AlertPanel.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { closeAlertMessage } from '../../store/cardsSlice';

const AlertPanel = () => {

    const dispatch = useDispatch();

    const close = () => {
        dispatch(closeAlertMessage());
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.panel}>
                <h3 className={styles.title}> Уведомление уровня "Энциклопедическая Сага"</h3>
                <div>
            Текст конечно бесплатный, но ты это… полегче с объёмом.
            Это уже не карта, это почти книжка.
            Желаю удачи всем, кто это будет читать вслух.
            
            P.S: За эту прекрастную карту-книжку пьём половину бокала.
                </div>
         
                <div className={styles.buttonGroup}>
                    <button className={styles.continueButton} onClick={close}>Вернутся к созданию карт</button>
                </div>
            </div>
        </div>
    );
};

export default AlertPanel;