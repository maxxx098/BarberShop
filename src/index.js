import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import ScrollTotop from './components/scrolltotop.js';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import {
 Navigation,Home,About,Services,Products,Blog,Appointment,Down
} from "./components/index.js"
import RegisterAndLogIn from './components/RegisterAndLogIn.jsx';

ReactDOM.render(
  
  <BrowserRouter>
    



    
    <Navigation/>
    
      
    
  <Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/appointment" element={<Appointment/>}/>
    <Route path="/RegisterAndLogIn" element={<RegisterAndLogIn/>}/>
    
   
    </Routes>
   
    <Down/>
   
    
    <ScrollTotop/>
   
</BrowserRouter>,

document.getElementById("root")
);


reportWebVitals();
