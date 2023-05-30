import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import image from './Assets/logo.png';
import Navbar from './pages/navbar';
import Form from './pages/form';
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
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





function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = () => {
    setCurrentForm(currentForm === 'login' ? 'register' : 'login');
  };

  return (
    <div className="App">
     
            

      <div className='two'>
      
           {/* {currentForm === 'login' ? (
          <Login onformSwitch={toggleForm} />
        ) : (
          <Register onformSwitch={toggleForm} />
          
        )}    */}
         <Routes>
          <Route
            exact
            path="/register"
            render={(props) => <Login {...props} />}
            /> 
          <Route
            path="/register"
            render={(props) => <Register {...props} />}
            />
        </Routes>
        <div>
         <Routes> 
            
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}>
          <Route path="/services/postpartum" element={<Postpartum />} />
          <Route path="/services/mealplan" element={<Mealplan />} />
          <Route path="/services/newborn" element={<Newborn />} />
          <Route path="/services/breastfeeding" element={<Breastfeeding />} />
          <Route path="/services/doesanddon'ts" element={<Dos />} />
          </Route>         
          <Route path="/contact" element={<Contact />} />
          <Route path="/motherandchild" element={<Mother />} />
          <Route path="/breastfeeding" element={<Breastfeeding />} />
          <Route path="/newborn" element={<Newborn />} />
          <Route path="/postpartum" element={<Postpartum />} />
          <Route path="/mealplan" element={<Mealplan />} />
          <Route path="/do'sanddon'ts" element={<Dos />} />  
         
        </Routes> 
        </div> 
      </div> 
      </div>        




     
      
    
    
      
      
       
      
        
    
  );
}

export default App;

