
import React from 'react'
import BackToTopButton from './BackToTopButton'
import { database } from './FirebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Clock from './Clock';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const Appointment = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const history = useNavigate ()
   
  const handleClick   = () => {
    signOut(database).then(val=>{
      console.log(val,"val")
      history('/')
    })

    
  }
  function Submit (e) {
 
    const formEle = document.querySelector("form")
    
    e.preventDefault()
    console.log("Submitted")
    const formData = new FormData(formEle)
    fetch('https://script.google.com/macros/s/AKfycbwhr8oGnp00AQVjl6ht_B_tC7Swh9VKEA1s-pzbcJ6MMC5vO9D_ajvjZgw-xq4kCQVWhQ/exec', {
      method: 'POST',
      body: formData
    } )
    
  }
  return (
    <body>
        <section className="hero-page" >
        <div className="page-header">
            <div className="container">
               
                    <div className="col-12">
                        <h1 >APPOINTMENT</h1>
                    </div>
                    <div className="col-12">
                    <div className="cta-btns">
          <a href="#appointment" className="btn btn-brand md-sm-2 my-3 " >Appointment</a>
          <a href="#appointment" className="btn btn-outline-brand ms-sm-2">Get in touch</a>
        </div>
                    </div>
                
            </div>
        </div>
        
      

        </section>
        
        <section>
        <div className="service" >
            <div className="container">
                <div className="section-header text-center col-">
                    <h6 >Discover More</h6>
                    <h2 >Where are we located?</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis iste! Dolorum, incidunt  </p>
                </div>
                

                <div className="row">
                <div className="col-lg-8 col-md-6">
                <iframe  width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=44%20Kabihasnan%20St.%20Quezon%20City+(ALOTAN%20%20Barber%20Shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
                    
                   </div>
                   <div className="col-lg-4 col-md-6"><br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <h6>SHOP NAME:</h6>
               <p>ALOTAN Barber Shop</p>
               <h6>LOCATION:</h6>
               <p>44 Kabihasnan St. QUEZON CITY, MANILA</p>
               <h6>PHONE NUMBER:</h6>
               <p>09661344171</p>
               <a href="#appointment" className="btn btn-brand md-sm-2 my-3 " >Appointment</a>
          <a href="#" className="btn btn-brand ms-sm-2">Get in touch</a>
                    
                   </div>
                    
                </div>
                 
                
            </div>
        </div>
        </section>
        <div class="row">
          
            <Clock/>
        </div>
        
       
 

        
        <section className='body' id='appointment'>
     
      <section  >
      <div class="row">
          <div class="col-12 intro text-center">
       
            <h6>Discover More</h6>
            <h1>Book Now!</h1>
           
        </div>
        </div>

       
           
            <div className='symon'>
         <div className='auto-grid'>
         <form  className='form' onSubmit={(e)=>Submit(e)}>
              <h1></h1>
              <div class="inputbox">
              <ion-icon name="person-circle-outline"></ion-icon>
        <input name='Name'  required/>
        <label for="">Name</label>
    </div>
              <div class="inputbox">
        <ion-icon name="mail-outline"></ion-icon>
        <input name="Email"  required/>
        <label for="">Email</label>
    </div>
    
    <div class="inputbox">
    <ion-icon name="albums-outline"></ion-icon>
        <input type="text" name='Message' required/>
        <label for="">Message</label>
    </div>
   
<div>
<button id='button' type='submit' variant="primary" onClick={handleShow}>SEND</button>
<Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  


</div>



          </form>
         </div>
          
          </div>
            
        </section>
       
    
     
  </section>
 
        <section class="team" id="team">
      <div class="container">
        <div class="row">
          <div class="col-12 intro text-center">
            <h6>Sign out?</h6>
            <h1>Just click the button below!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis iste! Dolorum, incidunt  </p>
        </div>
        </div>
        
        <div class="cta-btns">
          <a onClick={handleClick} class="btn btn-brand md-sm-2 my-3 " >Sign Out</a>
          <a href="#appointment" class="btn btn-outline-brand ms-sm-2">Get in touch</a>
        </div>
      </div>
    </section>
   

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>BOOKING APPOINTMENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>MESSAGE SENT</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        <BackToTopButton/>

    </body>
  )
}

export default Appointment;
