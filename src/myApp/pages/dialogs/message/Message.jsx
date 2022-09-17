import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.messageBlock}>
            <div className={s.message} >
                 {props.message} 
                 <div className={s.remove}>Remove</div>
            </div>
        </div>
    )
}

export default Message;