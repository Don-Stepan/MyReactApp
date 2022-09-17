import s from './NavBarItem.module.css';
import {NavLink} from 'react-router-dom';

const NavBarItem = (props) => {
    return (
        <li className={s.item}>
            <NavLink to={props.path}><span>{props.title}</span></NavLink>
        </li>
    )
}

export default NavBarItem;