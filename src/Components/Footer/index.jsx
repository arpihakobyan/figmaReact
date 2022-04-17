import React, { Component } from "react";
import styles from '../Footer/footer.module.css'
import Footer1 from "./footer";
import Footerlast from "./footerlast";
class Footer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Footer1 />
                <Footerlast/>
            </div>

        )
    }
}

export default Footer