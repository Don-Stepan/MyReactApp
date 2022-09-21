import s from './NavBar.module.css';
import NavBarItem from './item/NavBarItem';

const NavBar = (props) => {

    let navBarItemElement = props.navBarItems.map( (e) => <NavBarItem key={e.id} path={e.path} title={e.title} /> );

    return (
        <div className={s.myAppNavbar}>
            <ul>
                { navBarItemElement }
            </ul>
        </div>
    )
}

export default NavBar;