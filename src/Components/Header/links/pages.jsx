import React ,{ Component } from "react";
import styles from '../header.module.css'
class Pages extends Component{
    
    render(){
      
        return(
            <a className={`${styles.nav} ${styles.container} ${styles.font}`}>pages</a>
        )
    }
}
 
export default Pages