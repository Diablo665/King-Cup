import styles from './Header.module.css';
import { FaInfoCircle } from "react-icons/fa";

const Header = ({title}) => {
    return (
        <div className={styles.Header}> 
            <h1> 
                {title}
            </h1>
            <FaInfoCircle className={styles.infoButton} onClick={() => alert('click')}/>
        </div>
    )
}

export default Header