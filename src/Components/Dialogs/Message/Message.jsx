import React from 'react';
import s from './Message.module.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default Message;