import s from './Dialogs.module.css';
import DialogsItem from './dialogsItem/DialogsItem';
import Message from './message/Message';

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map( (e) => <DialogsItem key={e.id} id={e.id} name={e.name}/> );
    let messagesElement = props.state.messages.map( (e) =>  <Message key={e.id} message={e.message} id={e.id}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement } 
            </div>

            <div className={s.messages}>
               { messagesElement }
            </div>
        </div>
    )
}

export default Dialogs;