import React, { useEffect } from "react";
import img1 from './img/banner.png';
import img6 from './img/about.png';
import img7 from './img/service-1.jpg';
import img8 from './img/service-2.jpg';
import img9 from './img/service-3.jpg';
import pricing2 from './img/pricing2.png'
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import {SwiperNavButtons} from './SwiperNavButton.tsx';
import img2 from './img/team-1.jpg';
import img3 from './img/team-2.jpg';
import img4 from './img/team-3.jpg';
import img5 from './img/team-4.jpg';
import RegisterAndLogIn from "./RegisterAndLogIn";


import BackToTopButton from "./BackToTopButton.jsx";
import  AOS  from "aos";
import 'aos/dist/aos.css'


function Home(){
   useEffect (()=> {
  AOS.init({duration: 2000})
   },{})
    return(
        <body>
        <section className="hero" >
            
            <div className="home">
            <div className="containersss" >
                <img class="img-fluid" src={img1} data-aos="fade-right" />
            </div>
            </div>
           
            <a href="#about"><button  className="btn btn-brand " data-aos="fade-right" id="bttn"  >Let's get started!</button></a>
            
        </section>
        <div data-aos="fade-right">
        <div class="quick-info element-animate" >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 bgcolor">
            <div class="row">
              <div class="col-md-4 mb-3">
                <div class="media">
                  <div class="mr-3 icon-wrap"><span class="fa-solid fa-phone"></span></div>
                  <div class="media-body">
                    <h5>+1 234 5633 342</h5>
                    <p>Call us 24/7 we will get back to you ASAP</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="media">
                  <div class="mr-3 icon-wrap"><span class="fa-solid fa-location-dot"></span></div>
                  <div class="media-body">
                    <h5>249 Division Rad</h5>
                    <p>44 Kabihasnan St. Quezon City, Manila</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="media">
                  <div class="mr-3 icon-wrap"><span class="fa-solid fa-clock"></span></div>
                  <div class="media-body">
                    <h5>Daily: 8 am - 10 pm</h5>
                    <p>Mon-Fri, Sunday <br/> Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
        
        <section id="about">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <img src={img6}   />
                </div>
                <div class="col-lg-4 offset-lg-2" data-aos="fade-right">
                    <h6  >Learn About Us</h6>
                    <h1 >25 YEARS OF EXPERIENCE</h1>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <a  href="#"class="btn btn-outline-brand ">LEARN MORE</a>
                </div>
            </div>
         </div>   

       </section>
       <div class="service" >
            <div class="container">
                <div class="section-header text-center col-">
                    <h6 data-aos="fade-right">Our Salon Services</h6>
                    <h2 data-aos="fade-right">What we Provide</h2>
                    <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis iste! Dolorum, incidunt  </p>
                </div>
                

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item" data-aos="fade-right">
                            <div class="service-img" >
                                <img src={img7}  />
                            </div>
                            <h3 data-aos="fade-right">Hair Cut</h3>
                            <p data-aos="fade-right">
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item" data-aos="fade-right">
                            <div class="service-img">
                                <img src={img8} alt="Image"/>
                            </div>
                            <h3 data-aos="fade-right">Beard Style</h3>
                            <p data-aos="fade-right">
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                          
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item" data-aos="fade-right">
                            <div class="service-img">
                                <img src={img9} alt="Image"/>
                            </div>
                            <h3 data-aos="fade-right">Color & Wash</h3>
                            <p data-aos="fade-right">
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                           
                        </div>
                        
                    </div>
                    <div class="cta-btns" data-aos="zoom-in">
          <a href="RegisterAndLogIn" class="btn btn-brand md-sm-2 my-3 " >Appointment</a>
          <a href="RegisterAndLogIn" class="btn btn-brand ms-sm-2">Get in touch</a>
        </div>
                </div>
                 
                
            </div>
        </div>
        
      
       
      
        <section className="about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img src={pricing2} alt=""/>
                </div>
               
                <div class="col-xl-7 col-lg-7">
                        <div class="section-tittle">
                            <span>Our Best Pricing</span>
                            <h2>We provide best price<br /> in the city!</h2>
                        </div>
                       
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="pricing-list">
                                    <ul>
                                        <li>Styling. . . . . . . . . . . . . . . . . . . . . . . . . . . . <span>$25</span></li>
                                        <li>Styling + Color. . . . . . . . . . . . . . . . . . . <span>$65</span></li>
                                        <li>Styling + Tint. . . . . . . . . . . . . . . . . . . . . .<span>$65</span></li>
                                        <li>  Semi-permanent wave. . . . . . . . . . . . .<span>$65</span></li>
                                        <li> Cut + Styling. . . . . . . . . . . . . . . . . . . . . .<span>$63</span></li>
                                        <li> Cut + Styling + Color. . . . . . . . . . . . . <span>$100</span></li>
                                        <li> Cut + Styling + Tint. . . . . . . . . . . . . . . .<span>$100</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="pricing-list">
                                    <ul>
                                        <li>Cut. . . . . . . . . . . . . . . . . . . . . . . . . . . . .<span>$25</span></li>
                                        <li>Shave. . . . . . . . . . . . . . . . . . . . . . . . . . <span>$65</span></li>
                                        <li>Beard trim. . . . . . . . . . . . . . . . . . . . . .  <span>$65</span></li>
                                        <li>Cut + beard trim. . . . . . . . . . . . . . . . .  <span>$65</span></li>
                                        <li>Cut + shave. . . . . . . . . . . . . . . . . . . . . . .<span>$63</span></li>
                                        <li>Clean up. . . . . . . . . . . . . . . . . . . . . . . . .<span>$100</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
           
            </div>
            </div>
                
           
         
       </section>
       <section className="testimonials-h2">
        <h2>Testimonials</h2>
            <div className="testimonial">
              
            <div>
            <Swiper 
        
        className='myswiper'
        modules={[ EffectCoverflow, Autoplay, ]}
        grabCursor={true}
        centeredSlides={true}
        
        coverflowEffect={{
            depth: 100,
            modifier: 3,
           
               
          
          
          }}
         
  
         
        >
         
        <SwiperNavButtons >
       
        </SwiperNavButtons> 
            
            {
              
                    <SwiperSlide  className="myswiper-slider">
                          
                            <div className="container">
                              <div className="owl-carousel testimonials-carousel">
                                <div className="testimonial-item">
                                  <img src={img2} alt=""/>
                                  <p>
                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat. Fusce venenatis at lectus in malesuada. Suspendisse sit amet dolor et odio varius mattis.
                                  </p>
                                  <h2>Client Name</h2>
                                  <h3>Profession</h3>
                                </div>
                              </div>
                            </div>
                          
                    </SwiperSlide>
              
            }
            {
               
               <SwiperSlide  className="myswiper-slider">
                  
                            <div className="container">
                              <div className="owl-carousel testimonials-carousel">
                                <div className="testimonial-item">
                                <img src={img5} alt=""/>
                                  <p>
                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat. Fusce venenatis at lectus in malesuada. Suspendisse sit amet dolor et odio varius mattis.
                                  </p>
                                  <h2>Client Name</h2>
                                  <h3>Profession</h3>
                                </div>
                              </div>
                            </div>
                          
          
               </SwiperSlide>
         
            }
            
                   {
               
               <SwiperSlide  className="myswiper-slider">
                 
                            <div className="container">
                              <div className="owl-carousel testimonials-carousel">
                                <div className="testimonial-item">
                                <img src={img4} alt=""/>
                                  <p>
                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat. Fusce venenatis at lectus in malesuada. Suspendisse sit amet dolor et odio varius mattis.
                                  </p>
                                  <h2>Client Name</h2>
                                  <h3>Profession</h3>
                                </div>
                              </div>
                            </div>
                          
               </SwiperSlide>

              
         
       }
     
        </Swiper>
            </div>
            </div>
        </section>
        <section class="features">
      <div class="container">
        <div class="row">
          <div class="col-12 intro text-center">
            <h6>Feature</h6>
            <h1>Why we are awesome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis iste! Dolorum, incidunt  </p>
        </div>
        </div>
       <div class="row gy-5">
        <div class="col-lg-4 col-sm-6">
          <div class="feature">
            <div class="icon-features"><i class="ri-pen-nib-fill"></i></div>
            <div>
              <h3 class="h5">Service title</h3>
              <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et, doloremque facilis accusamus facere excepturi? Loremrchitectoe.t, libero  </p> 
              <a href="#" class="link-more">Know more <i class="ri-arrow-right-line icon"></i></a> 
              </div> 
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="feature">
            <div class="icon-features"><i class="ri-fire-fill"></i></div>
            <div>
              <h3 class="h5">Service title</h3>
              <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et, doloremque facilis accusamus facere excepturi? Loremrchitectoe.t, libero  </p> 
              <a href="#" class="link-more">Know more <i class="ri-arrow-right-line icon"></i></a> 
              </div> 
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="feature">
            <div class="icon-features"><i class="ri-user-fill"></i>
            </div>
            <div>
              <h3 class="h5">Service title</h3>
              <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et, doloremque facilis accusamus facere excepturi? Loremrchitectoe.t, libero  </p> 
              <a href="#" class="link-more">Know more <i class="ri-arrow-right-line icon"></i></a> 
              </div> 
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="feature">
            <div class="icon-features"><i class="ri-heart-fill"></i>
            </div>
            <div>
              <h3 class="h5">Service title</h3>
              <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et, doloremque facilis accusamus facere excepturi? Loremrchitectoe.t, libero  </p> 
              <a href="#" class="link-more">Know more <i class="ri-arrow-right-line icon"></i></a> 
              </div> 
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="feature">
            <div class="icon-features"><i class="ri-wifi-fill"></i>
            </div>
            <div>
              <h3 class="h5">Service title</h3>
              <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et, doloremque facilis accusamus facere excepturi? Loremrchitectoe.t, libero  </p> 
              <a href="#" class="link-more">Know more <i class="ri-arrow-right-line icon"></i></a> 
              </div> 
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="feature">
            <div class="icon-features"><i class="ri-customer-service-fill"></i>
            </div>
            <div>
              <h3 class="h5">Service title</h3>
              <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et, doloremque facilis accusamus facere excepturi? Loremrchitectoe.t, libero  </p> 
              <a href="#" class="link-more">Know more <i class="ri-arrow-right-line icon"></i></a> 
              </div> 
          </div>
        </div>
        
       </div>
        <div class="cta-btns">
          <a href="RegisterAndLogIn" class="btn btn-brand md-sm-2 my-3 " >Appointment</a>
          <a href="RegisterAndLogIn" class="btn btn-outline-brand ms-sm-2">Get in touch</a>
        </div>
      </div>
     
    </section>
       
        
    <BackToTopButton/>
        </body>
    )
}
export default Home;