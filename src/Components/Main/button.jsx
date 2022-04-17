import React ,{ Component } from "react";
import styles from '../Main/main.module.css'
class Button extends Component{
    render(){
        return(
           <button className={styles.button}>Order Now</button>
        )
    }
}
 
export default Button