import React, { Component } from "react";
import styles from '../main.module.css'
import Top from "./topComponent";
import Button from "./button";
import Bottom from "./bottom";
class Main2 extends Component {
    render() {
        return (
           <div className={styles.mainContainer}>
               <Top/>
               <Button/>
               <Bottom/>
           </div>
        )
    }
}

export default Main2