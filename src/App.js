import './App.css';
import Header from './myApp/header/Header';
import NavBar from './myApp/navBar/NavBar';
import Pages from './myApp/pages/Pages';
import { BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>

      <div className="myApp">
        
        <Header />

        <NavBar navBarItems={props.state.sidebar.navBarItems} />

        <Pages state={props.state.pages} />
       
      </div>
    </BrowserRouter>
  );
} 

export default App;
