import './App.css';
import Header from './myApp/header/Header';
import NavBar from './myApp/navBar/NavBar';
import Pages from './myApp/pages/Pages';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>

      <div className="myApp">
        
        <Header />

        <NavBar />

        <Pages />
       
      </div>
    </BrowserRouter>
  );
} 

export default App;
