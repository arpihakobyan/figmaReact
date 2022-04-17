import React ,{ Component } from "react";
import styles from '../header.module.css'
class Input extends Component{
    
    render(){
      
        return(
           < input className={`${styles.input}  ${styles.font}`} placeholder='🔍 What are you looking for'/>
        )
    }
}
 
export default Input