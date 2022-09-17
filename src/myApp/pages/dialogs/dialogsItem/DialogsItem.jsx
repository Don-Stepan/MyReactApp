import s from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogsItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;