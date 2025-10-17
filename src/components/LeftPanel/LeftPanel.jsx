import styles from './LeftPanel.module.css';

const LeftPanel = ({ start, onStart, onStop }) => {
    return (
        <div className={styles.LeftPanel}>
            <h3>Управление</h3>

            <div className={styles.buttonsPanel}>
                {!start ? (
                    <>
                        <button 
                            className={styles.startButton} 
                            onClick={() => onStart()}
                        >
                            Начать игру
                        </button>
                        
                        <button 
                            className={styles.uploadeButton}
                        >
                            Загрузить свои карты
                        </button>
                        <button 
                            className={styles.downloadFile}
                        >
                            Скачать файл для создания кастомных карт
                        </button>
                    </>
                ) : (
                    
                        <button 
                            className={styles.startButton} 
                            onClick={() => onStop()}
                        >
                            Завершить игру
                        </button>
                    
                )}
            </div>
        </div>
    );
};

export default LeftPanel;