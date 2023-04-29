import React from 'react';
import s from './Message.module.css';


const Message = (props) => {
    let valueTextArea = React.createRef();
    
    let onPostChange = () => {
        let v = valueTextArea.current.value;
        props.updateMessage(v)
    }

    return (
        <div className={s.message}>
            <textarea ref={valueTextArea} onChange={onPostChange} />
            <button >Send</button>
        </div>

    )
}


export default Message;