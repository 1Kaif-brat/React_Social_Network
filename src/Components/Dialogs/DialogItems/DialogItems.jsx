import React from 'react';
import s from './DialogItems.module.css';
import { NavLink } from 'react-router-dom';
import { addStateMessageFromTextArea } from '../../Redux/State';

const DialogItems = (props) => {
    //console.log(props.newMessageBody)
    let valueTextArea = React.createRef();
    let valueInnerHTMLDiv = React.createRef();


    let sendToStateValueTextArea = () => {
        let textareaValue = valueTextArea.current.value;
        props.dispatch(addStateMessageFromTextArea(textareaValue, props.id));
    }

    let addMessageTextToDiv = () => {
        valueInnerHTMLDiv.current.innerHTML = props.messageText;
        valueTextArea.current.value = ''
        console.log(valueTextArea.current.id)

    }

    return (
        <div className={s.dialog}>

            <NavLink to={`/dialogs/${props.id}`}>
                <div className={s.circle}>
                    <img className={s.img} src={props.imgSrc}></img>
                </div>
                {props.name}

            </NavLink>
            <div className={s.message}>
                <textarea id = {props.id} ref={valueTextArea} onChange={sendToStateValueTextArea} value={props.messageText} />
                <button className={s.btnSend} onClick={addMessageTextToDiv}>Send</button>
                <div className={s.sendmess} ref={valueInnerHTMLDiv}></div>
            </div>
        </div>
    )
}

export default DialogItems;