import React from 'react';
import Header from './comps/Header';
import RegistrationForm from './comps/reg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Lp from './comps/Login';
import AboutUs from './comps/aboutus';
import Cardd from './comps/card';
import FormVe from './comps/Booknow';
// import Loginpage from './comps/Login';

export default function App() {
  
  return (
    <div>
   
    <Router>
      <Routes>
        <Route exact path='/' element={<Header/>}/>
        <Route exact path='/about' element={<AboutUs/>}/>
        <Route exact path='/cardd' element={<Cardd/>}/>
        <Route  exact path='/reg' element={<Lp/>}/>
        <Route  exact path='/sig' element={<RegistrationForm/>}/>
        <Route  exact path='/verify' element={<FormVe/>}/>
      </Routes>
    </Router>
    </div>
  );
}