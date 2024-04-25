import './header-styles.css'
import logo from '../../logo.svg'
import { useState } from 'react';

export default () => {
    const [now, setNow] = useState(new Date());

    setInterval(() => setNow (new Date()), 1000)
    return (
        <header>
        <img src={logo} alt='logo react'></img>
        <nav>
          <ul>
            <li><a href='#'>Item 1</a></li>
            <li><a href='#'>Item 2</a></li>
            <li><a href='#'>Item 3</a></li>
          </ul>
        </nav>
        <span>Time now: {(new Date()).toLocaleTimeString()}</span>
      </header>
    );
}