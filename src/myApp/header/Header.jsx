import './Header.css';
import logo from './../../logo.svg';

const Header = () => {
    return (
        <div className='myAppHeader'>
            <img src={logo} className="App-logo" alt="logo" />
            <div className='headerTitte'>
                <span>My React App</span>
            </div>
        </div>
    );
}

export default Header;