import { BiError } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import styles from './UploadInfo.module.css';

const UploadInfo = ({ isCustomCardAdd }) => {
    const status = {

        'error': ['Ошибка загрузки карт', 'error', <BiError />],
        'added': ['Карты загружены', 'successfully', <MdDone />],
        'notAdded': ['Кастомные карты не добавлены', '', <BsClockHistory />]

    }
    
    const [text, className, emog] = status[isCustomCardAdd];

    return(
        
        <p className={`${styles.customCard} ${className === 'error' ? styles.error : className === '' ? '' : styles.successfully} `}> 
            <span> {emog} </span>
            <span> {text} </span>
        </p>
    )
}

export default UploadInfo;