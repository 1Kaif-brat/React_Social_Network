import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    
            <nav className={s.nav}>
                <div className={s.list}>
                    <NavLink to='/profile' className={(navigationData) => navigationData.isActive ? s.active : s.list } >Profile</NavLink>
                </div>
                <div className={`${s.list} ${s.active}`}>
                    <NavLink to='/dialogs' className={(navigationData) => navigationData.isActive ? s.active : s.list }>Messages</NavLink>
                </div>
                <div className={s.list}>
                    <NavLink to='news' className={(navigationData) => navigationData.isActive ? s.active : s.list }>News</NavLink>
                </div>
                <div className={s.list}>
                    <NavLink to='music' className={(navigationData) => navigationData.isActive ? s.active : s.list }>Music</NavLink>
                </div>
                <div className={s.list}>
                    <NavLink to='setting' className={(navigationData) => navigationData.isActive ? s.active : s.list }>Settings</NavLink>
                </div>
            </nav>
        
    )
}

export default Navbar;