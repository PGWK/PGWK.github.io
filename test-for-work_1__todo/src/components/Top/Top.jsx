import React from 'react';
import styles from './Top.module.css';

const Top = () => {
    return (
        <div className={styles.topContainer}>
            <div className={styles.title}>To Do</div>
            <div className={styles.underline}/>
        </div>
    );
};

export default Top;