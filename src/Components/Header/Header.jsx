import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <header className={s.header}>
        <NavLink to='/profile'>
            <img src='https://sun9-56.userapi.com/impg/FLnvlTiCv0MBdSPv_mnYqkZS4RxnNrfQ7YJCxg/B9i6G1DM8n4.jpg?size=1906x2160&quality=95&sign=1463b94c8caedca46aef491fa885b61a&type=album' />
        </NavLink>
    </header>
}

export default Header;