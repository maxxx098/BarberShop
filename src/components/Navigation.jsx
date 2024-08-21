import React from "react";
import {NavLink} from "react-router-dom"
import Appointment  from "./Appointment.jsx";
import ScrollTotop from "./scrolltotop.js";
function Navigation(){
    return(
      <body>
        
    <ScrollTotop/>
        <div className="navigation">
          
          <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
            <a class="navbar-brand"  href="#"><span>A <span>L <span>O <span> T <span>A <span> N</span></span></span></span></span></span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/"  > HOME
                <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about"  >ABOUT US</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services" >SERVICES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products"   >PRODUCTS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog"  >BLOG</NavLink>
              </li>
              
            </ul>
            <NavLink className="btn btn-outline-brand ms-lg-3"  to="/RegisterAndLogIn"> APPOINTMENT</NavLink>

            </div>
            
            </div>
          </nav>
        </div>
        
        </body>
    )
}
export default Navigation;