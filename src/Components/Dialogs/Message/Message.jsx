import React from 'react';
import s from './Message.module.css';
import { actionUpdateMessage } from '../../Redux/State';


const Message = (props) => {
    let valueTextArea = React.createRef();

    let onPostChange = () => {
        let mess = valueTextArea.current.value;
        props.dispatch(actionUpdateMessage(mess))
    }

    return (
        <div className={s.message}>
            <textarea ref={valueTextArea} onChange={onPostChange} />
            <button >Send</button>
        </div>

    )
}


export default Message;