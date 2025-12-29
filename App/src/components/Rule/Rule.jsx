import React from 'react';
import styles from './Rule.module.css'

const Rule = ({ textRule }) => {

    return (
        <div className={styles.Rule}> 
            <span> {textRule} </span>
        </div>
    )

}

export default Rule