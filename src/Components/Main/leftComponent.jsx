import React ,{ Component } from "react";
import styles from '../Main/main.module.css'
class Left extends Component{
    render(){
        return(
           <div className={styles.leftContainer}>
               <p className={`${styles.font} ${styles.p}`}>Sit with Luxury</p>
           </div>
        )
    }
}
 
export default Left