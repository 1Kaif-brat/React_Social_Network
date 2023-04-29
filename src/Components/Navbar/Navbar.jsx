import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (p) => {
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
                <div className={s.list}>
                    <NavLink to='friends' className={(navigationData) => navigationData.isActive ? s.active : s.list }>Friends</NavLink>
                    <div className={s.listt}>
                        <div className={s.one}><img src={p.img[0].imgSrc}/>D</div>
                        <div className={s.one}><img src={p.img[1].imgSrc}/>A</div>
                        <div className={s.one}><img src={p.img[2].imgSrc}/>M</div>

                    </div>
                </div>
            </nav>
        
    )
}

export default Navbar;