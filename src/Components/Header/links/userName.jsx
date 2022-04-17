import React ,{ Component } from "react";
import styles from '../header.module.css'
import {ReactComponent as Cart} from '../cart.svg'
class UserName extends Component{
    
    render(){
      
        return(
            // <div className={` ${styles.cart1}}`}>
          
            <span className={`${styles.font} ${styles.cart1} }`}>Kamrul</span>
            // </div>
        )
    }
}
 
export default UserName