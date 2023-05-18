import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(el => {
        let messageData = props.messagesData.find(message => message.id === el.id);

        return (< DialogItems
            name={el.name} id={el.id} imgSrc={el.imgSrc}
            dispatch={props.dispatch}
            messageText={messageData.message} />)
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
        </div>
    )

}

export default Dialogs;





