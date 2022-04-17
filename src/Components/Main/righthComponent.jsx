import React ,{ Component } from "react";
import styles from '../Main/main.module.css'
import chair from '../Main/chair.png'
class Right extends Component{
    render(){
        return(
           <div className={styles.leftContainer}>
              <img className={styles.img} src={chair}/>
           </div>
        )
    }
}
 
export default Right