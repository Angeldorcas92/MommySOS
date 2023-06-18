import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import image from './Assets/logo.png';
import Navbar from './pages/navbar';
import Form from './pages/form';
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route, Routes, Outlet} from 'react-router-dom';
import Breastfeeding from './pages/breastfeeding';
import Postpartum from './pages/postpartum';
import Newborn from './pages/newborncare';
import Mother from './pages/motherandchild';
import Services from './pages/services';
import Contact from './pages/contact';
import Dos from './pages/does&don\'ts';
import About from './pages/about';
import Mealplan from './pages/mealplan';
import Dropdown from './pages/dropdown';
import Vaginaldelivery from './pages/vaginal';
import CS from './pages/cs';
import Rout from './Routes/routes';






function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = () => {
  //   setCurrentForm(currentForm === 'login' ? 'register' : 'login');
  // };
 

  return (
    
    <div className="App">
      
        
      
             
          {/* <Routes>
          <Route
            exact
            path="/register"
            render={(props) => <Login {...props} />}
            /> 
          <Route
            path="/register"
            render={(props) => <Register {...props} />}
            />
        </Routes>  */}
        <div>
           <Rout/> 
        </div> 
      </div> 
           




     
      
    
    
      
      
       
      
        
    
  );
}

export default App;

