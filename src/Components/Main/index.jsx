import React, { Component } from "react";
import styles from '../Main/main.module.css'
import Main1 from "./main1";
import Main2 from "./main2/main2";
import Main3 from "./main3/main3";
import Main4 from "./main4/main4";
import Main5 from "./main5/main5";
import Footer1 from "../Footer/footer";
class Main extends Component {
    render() {
        return (
            <div >
                <Main1 />
                <Main2 />
                <Main3/>
                <Main4/>
                <Main5/>
               
            </div>
        )
    }
}

export default Main