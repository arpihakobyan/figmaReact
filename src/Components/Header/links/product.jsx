import React ,{ Component } from "react";
import styles from '../header.module.css'
class Product extends Component{
    
    render(){
      
        return(
            <a className={`${styles.nav} ${styles.container} ${styles.font}`}>product</a>
        )
    }
}
 
export default Product