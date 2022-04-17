import React, { Component } from "react";
import styles from '../main.module.css'
import Img from '../main5/logo.png'
class Top extends Component {
    render() {
        return (
            <div className={styles.bottomContainer}>
                <img src={Img} />

                <div>
                    <h2 className={`${styles.font} ${styles.main3h2}`}>QUICK <br />
                        NAVIGATION</h2>
                        <a className={`${styles.font} ${styles.main5a}`}>About us</a>
                        <a className={`${styles.font} ${styles.main5a}`}>News & Events</a>
                        <a className={`${styles.font} ${styles.main5a}`}>Terms & Conditions</a>
                </div>
                <div>
                    <h2 className={`${styles.font} ${styles.main3h2}`}>KNOWLEDGE <br /> BASE
                      </h2>
                        <a className={`${styles.font} ${styles.main5a}`}>FAQ </a>
                        <a className={`${styles.font} ${styles.main5a}`}>Return policy</a>
                        <a className={`${styles.font} ${styles.main5a}`}>EMI</a>
                </div>
                <div>
                    <h2 className={`${styles.font} ${styles.main3h2}`}>INFORMATION</h2>
                        <a className={`${styles.font} ${styles.main5a}`}>New arrival</a>
                        <a className={`${styles.font} ${styles.main5a}`}>Installment</a>
                        <a className={`${styles.font} ${styles.main5a}`}>Delivery</a>
                        <a className={`${styles.font} ${styles.main5a}`}>Warranty</a>
                        <a className={`${styles.font} ${styles.main5a}`}>Privecy Policy</a>
                        
                </div>
            </div>
        )
    }
}

export default Top