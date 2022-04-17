import React, { Component } from "react";
import styles from '../main.module.css'
import Img1 from '../main2/image 4.png'
import Img2 from '../main2/image 5.png'
import Img3 from '../main2/image 6.png'
import Img4 from '../main2/image 7.png'
class Bottom extends Component {
    render() {
        return (
           <div className={styles.bottomContainer}>
              <img src={Img1}/>
              <img src={Img2}/>
              <img src={Img3}/>
              <img src={Img4}/>
           </div>
        )
    }
}

export default Bottom