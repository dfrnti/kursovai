import './header-styles.css'
import logo from '../../images/GreenBooK.png'
import { useState } from 'react';

export default () => {
    return (
        <header class='header'>
          <div class='Green'>
          <img class='img' src={logo} alt='logo react'></img>
          </div>
        {/* <nav> */}
          <ul>
            <li><a href="">Корзина</a></li>
            <li><a href="">Войти</a></li>
          </ul>
        {/* </nav> */}
      </header>
    );
}
