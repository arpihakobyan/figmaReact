import React, { Component } from "react";
import styles from '../main.module.css'

class Middle extends Component {
    render() {
        return (
           <div className={styles.main5middle }>
           <h1 className={`${styles.font} ${styles.main3h2}`}>SUBSCRIBE TO OUR NEWS LETTER</h1>
           <input className={styles.main5input} type='email' placeholder='Type Email'/>
           </div>
        )
    }
}

export default Middle