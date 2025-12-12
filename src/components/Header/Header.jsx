import styles from './Header.module.css';

const Header = ({title}) => {
    return (
        <div className={styles.Header}> 
            <h1> 
                {title}
            </h1>
        </div>
    )
}

export default Header