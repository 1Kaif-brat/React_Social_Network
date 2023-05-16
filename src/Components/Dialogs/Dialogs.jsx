import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(el => <DialogItems
        name={el.name} id={el.id} imgSrc={el.imgSrc}
        dispatch={props.dispatch}
        messagesData={props.messagesData}
        newMessageBody={props.newMessageBody} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
        </div>
    )

}

export default Dialogs;





