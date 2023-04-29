import React from 'react';
import s from './DialogItems.module.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

const DialogItems = (props) => {
    
    return (
        <div className={s.dialog}>

            <NavLink to={`/dialogs/${props.id}`}>
                <div className={s.circle}>
              <img className={s.img} src={props.imgSrc}></img>
                </div>
                {props.name}</NavLink>
        </div>
    )
}

export default DialogItems;