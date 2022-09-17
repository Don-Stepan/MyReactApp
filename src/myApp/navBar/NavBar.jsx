import s from './NavBar.module.css';
import NavBarItem from './item/NavBarItem';

const NavBar = () => {
    return (
        <div className={s.myAppNavbar}>
            <ul>
                <NavBarItem path='/profile' title='Profile'/>
                <NavBarItem path='/dialogs' title='Messages'/>
                <NavBarItem path='/news' title='News'/>
                <NavBarItem path='/music' title='Music'/>
                <NavBarItem path='/settings' title='Settings'/>
            </ul>
        </div>
    )
}

export default NavBar;