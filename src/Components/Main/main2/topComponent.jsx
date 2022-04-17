import React, { Component } from "react";
import styles from '../main.module.css'

class Top extends Component {
    render() {
        return (
            <div className={styles.main2top}>
                <h1 className={`${styles.main2h1} ${styles.font}`}>Who we are</h1>
                <p className={`${styles.main2p} ${styles.font}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's .... <a className={styles.cursor}>→</a></p>
            </div>
        )
    }
}

export default Top