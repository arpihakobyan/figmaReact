import React, { Component } from "react";
import styles from '../main.module.css'
import Top from "./Top";
import Middle from "./middle";

class Main5 extends Component {
    render() {
        return (
           <div className={styles.mainContainer}>
              <Top/>
              <Middle/>
              
           </div>
        )
    }
}

export default Main5