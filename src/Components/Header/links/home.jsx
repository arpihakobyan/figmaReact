import React ,{ Component } from "react";
import styles from '../header.module.css'
class Home extends Component{
    
    render(){
      
        return(
            <a className={`${styles.nav} ${styles.container} ${styles.font}`}>Home</a>
        )
    }
}
 
export default Home