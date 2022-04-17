import React, { Component } from "react";
import styles from '../main.module.css'
import Button from "./button";
import Bottom from "./middle";
import Last from "./main3bottom";
class Main3 extends Component {
    render() {
        return (
           <div className={styles.mainContainer}>
              <Button/>
              <Bottom/>
              <Last/>
           </div>
        )
    }
}

export default Main3