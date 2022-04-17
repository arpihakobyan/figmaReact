import React, { Component } from "react";
import styles from '../main.module.css'
import Img from '../main4/image 8.png'
class Image extends Component {
    render() {
        return (
           <img className={styles.main4top} src={Img}/>
        )
    }
}

export default Image