import React from 'react';
import s from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import DialogItems from './DialogItems/DialogItems';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogsElements = props.datadialog.map(el => <DialogItems name={el.name} id={el.id} imgSrc = {el.imgSrc} />)
    let messageElements = props.datamessage.map(el => <Message message={el.message}  dispatch = {props.dispatch}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )

}

export default Dialogs;





