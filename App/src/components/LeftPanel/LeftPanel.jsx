import React from 'react';
import styles from './LeftPanel.module.css';
import { useRef } from 'react';
import UploadInfo from '../UploadInfo/UploadInfo';
import SelectEndCard from '../SelectEndCard/SelectEndCard';
import { getCardsList, handleFileChange, deleteInfoFromLocalSession} from '../../utils/helper';
import { useDispatch, useSelector} from 'react-redux';
import { updateStateBeforeGame, setCustomCardAdded, setCards, setEndCards} from '../../store/cardInfoSlice';
import { startGame, stopGame } from '../../store/gameStatuses';
import { setisEndCardInfoOpen, setisAllEndCardsTook} from '../../store/gameStatuses';
import EndCardInfo from '../EndCardInfo/EndCardInfo';
import { MdOutlineExitToApp } from "react-icons/md";
import { TbInfoSquare } from "react-icons/tb";


const LeftPanel = () => {
    const dispatch = useDispatch();

    const {customCardAdd} = useSelector((state) => state.game);
    const {isSmallScreen, isEndCardInfoOpen, isStartGame} = useSelector((state) => state.statuses);

    const fileInputRef = useRef(null);

    const handleUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const goToCustomCreateSite = () => {
        window.location = 'https://custom.kingcup.ru/';
    };

    const customGame = (target) => {
        handleFileChange(target)
            .then(
                (customCard) => {
                    dispatch(setCustomCardAdded('added'));
                    dispatch(setCards(customCard));
                },
                () => dispatch(setCustomCardAdded('error'))
            );
        
    };

    const deleteUploadedCard = () => {
        deleteInfoFromLocalSession('selectedFile');
        dispatch(setCustomCardAdded('notAdded'));
        dispatch(setEndCards({endCards: {"K": 4}, endTook: {"K": 0}}));
    };

    const start = () => {
        const {status, cards} = getCardsList();
        dispatch(updateStateBeforeGame(cards));
        dispatch(setisAllEndCardsTook(false));
        dispatch(startGame());
    };

    const stop = () => {
        dispatch(stopGame());
        const cards = getCardsList();
        dispatch(setCards(cards['cards']));
    };

    const openCardInfo = () => {
        dispatch(setisEndCardInfoOpen());
    };

    return (
        <div className={styles.LeftPanel}>
            <h3>Управление</h3>

            <div className={!isStartGame || !isSmallScreen ? styles.buttonsPanel : styles.mobileGameButtonPanel}>
                {!isStartGame ? (
                    <>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={customGame}
                        />

                        <button 
                            className={styles.startButton} 
                            onClick={start}
                        >
                            Начать игру
                        </button>
                        <button 
                            className={styles.uploadeButton}
                            onClick={handleUpload}
                        >
                            Загрузить свои карты
                        </button>
                        {customCardAdd === 'added' ? (
                            <button 
                                className={styles.deletedButton}
                                onClick={deleteUploadedCard}
                            >
                            Удалить загруженные карты
                            </button>
                        ) : ''}
                        <UploadInfo isCustomCardAdd={customCardAdd}/>
                        <button 
                            className={styles.downloadFile}
                            onClick={goToCustomCreateSite}
                        >
                            Создать свои карты
                        </button>
                    </>
                ) : (
                    <> 

                        {isSmallScreen ? <><MdOutlineExitToApp className={styles.endButton} onClick={stop}/> {isEndCardInfoOpen && <EndCardInfo/>} <TbInfoSquare className={styles.infoCardButton} onClick={openCardInfo}/> </> : <><button 
                            className={styles.endButton} 
                            onClick={stop}
                        >
                            Завершить игру
                        </button> <EndCardInfo /> </>}
                        
                    </>
                    
                )}
            </div>
            {(customCardAdd === 'added' && !isStartGame) && (
                <div> 
                    <SelectEndCard/>
                </div>
            )}
        </div>
    );
};

export default LeftPanel;