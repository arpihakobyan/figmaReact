import React, { Component } from "react";
import styles from '../main.module.css'
import Top from "./top";
import Image from "./middle";
import Bottom from "./bottom";
class Main4 extends Component {
    render() {
        return (
           <div className={styles.mainContainer}>
              <Top/>
              <Image/>
              <Bottom/>
           </div>
        )
    }
}

export default Main4