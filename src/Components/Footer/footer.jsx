import React ,{ Component } from "react";
import styles from '../Footer/footer.module.css'

class Footer1 extends Component{
    render(){
        return(
            <div className={styles.FootContainer}>
           <span>@KAMRULDESIGN</span>
           <hr className={styles.hr}/>
           <span>Created by Kamrul hasan</span>
           </div>
        )
    }
}
 
export default Footer1