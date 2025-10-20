import styles from './LeftPanel.module.css';
import { useRef } from 'react';
import {handleDownload} from '../../utils/helper';
import UploadInfo from '../UploadInfo/UploadInfo';
import { deleteInfoFromLocalSession } from '../../utils/helper';

const LeftPanel = ({ start, onStart, onStop, onAddCustomCard, isCustomCardAdd, setCustomCardAdded}) => {

    const fileInputRef = useRef(null);

    const handleUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const deleteUploadedCard = () => {
        deleteInfoFromLocalSession('selectedFile');
        setCustomCardAdded('notAdded');
    }

    return (
        <div className={styles.LeftPanel}>
            <h3>Управление</h3>

            <div className={styles.buttonsPanel}>
                {!start ? (
                    <>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={onAddCustomCard}
                            />

                        <button 
                            className={styles.startButton} 
                            onClick={() => onStart()}
                        >
                            Начать игру
                        </button>
                        
                        <button 
                            className={styles.uploadeButton}
                            onClick={handleUpload}
                        >
                            Загрузить свои карты
                        </button>
                        {isCustomCardAdd === 'added' ? (
                        <button 
                            className={styles.deletedButton}
                            onClick={deleteUploadedCard}
                        >
                            Удалить загруженные карты
                        </button>
                        ) : ''}
                        <UploadInfo isCustomCardAdd={isCustomCardAdd}/>
                        <button 
                            className={styles.downloadFile}
                            onClick={handleDownload}
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