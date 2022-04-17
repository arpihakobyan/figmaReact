import React, { Component } from "react";
import styles from '../main.module.css'

class Last extends Component {
    render() {
        return (
            <div className={styles.bottomContainer}>
                <div>
                    <h2 className={`${styles.font} ${styles.main3h2}`}>For office</h2>
                    <p className={`${styles.font} ${styles.main3p}`}>Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.</p>
                        <button className={styles.main3button}>See more →</button>
                </div>
                <div>
                    <h2 className={`${styles.font} ${styles.main3h2}`}>For home</h2>
                    <p className={`${styles.font} ${styles.main3p}`}>Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.</p>
                        <button className={styles.main3button}>See more →</button>
                </div>
                <div>
                    <h2 className={`${styles.font} ${styles.main3h2}`}>Personal use</h2>
                    <p className={`${styles.font} ${styles.main3p}`}>Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.</p>
                        <button className={styles.main3button}>See more →</button>
                </div>

            </div>
        )
    }
}

export default Last