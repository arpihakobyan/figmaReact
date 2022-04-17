import React, { Component } from "react";
import styles from '../main.module.css'
import Img1 from '../main3/image 1.png'
import Img2 from '../main3/image 2.png'
import Img3 from '../main3/image 3.png'

class Bottom extends Component {
    render() {
        return (
           <div className={styles.bottomContainer}>
              <img src={Img1}/>
              <img src={Img2}/>
              <img src={Img3}/>
           
           </div>
        )
    }
}

export default Bottom