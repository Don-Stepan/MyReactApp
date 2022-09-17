import s from './Dialogs.module.css';
import DialogsItem from './dialogsItem/DialogsItem';
import Message from './message/Message';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem id='1' name='Customer1'/> 
                <DialogsItem id='2' name='Customer2' />
                <DialogsItem id='3' name='Customer3' />
                <DialogsItem id='4' name='Customer4' /> 
            </div>

            <div className={s.messages}>
               <Message message='hi' />
               <Message message='hello' />
               <Message message='nono nini' />
               <Message message='Yo Yo Yo' />
            </div>
        </div>
    )
}

export default Dialogs;