import React, { Component } from "react";
import Home from "./links/home";
import Product from "./links/product";
import Pages from "./links/pages";
import Blog from "./links/blog";
import Input from "./links/input";
import UserName from "./links/userName";
import styles from '../Header/header.module.css'
import { ReactComponent as Logo } from '../Header/logo.svg';
import {ReactComponent as Cart} from '../Header/cart.svg'
import user from '../Header/user.png'

class Header extends Component {

    render() {

        return (
            <div className={styles.container}>
                <Home/>
                <Product/>
                <Pages/>
                <Blog/>
                <Logo/>
                <Input/>
               <Cart/>
                <UserName/>
              <img className={styles.cart} src={user}/>

            </div>
        )
    }
}

export default Header