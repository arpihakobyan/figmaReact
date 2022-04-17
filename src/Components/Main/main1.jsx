import React, { Component } from "react";
import styles from '../Main/main.module.css'
import Left from "./leftComponent";
import Right from "./righthComponent";
import Button from "./button";
class Main1 extends Component {
    render() {
        return (
            <div className={styles.allContainer}>
            <div className={styles.container} >
                <Left />
                <Right/>
                
            </div>
            <Button/>
            </div>
        )
    }
}

export default Main1