import React from "react";
import img1 from './img/img1.webp';
import img7 from './img/service-1.jpg';
import img8 from './img/service-2.jpg';
import img9 from './img/service-3.jpg';
import {Helmet} from "react-helmet";
import services from './Products.jsx';
import RegisterAndLogIn from "./RegisterAndLogIn";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import {SwiperNavButtons} from './buttons.tsx';

import pricing2 from './img/pricing2.png'

import BackToTopButton from "./BackToTopButton.jsx";

const slider = [
    {  
        url:"https://i.ibb.co/hFGSPzR/img-1.jpg"  
      },
      {
        url: "https://i.ibb.co/NFf5Wff/img-2.jpg"
      },
      { 
        url: "https://i.ibb.co/j8RXMby/img-3.jpg"
      },
      {
        url: "https://i.ibb.co/hFGSPzR/img-1.jpg" 
      },
      {
        url: "https://i.ibb.co/NFf5Wff/img-2.jpg"
      },
]


function Services(){
   
    return(
        <body>
        <section className="hero-page" >
        <div class="page-header">
            <div class="container">
               
                    <div class="col-12">
                        <h1>SERVICES</h1>
                    </div>
                    <div class="col-12">
                    <div class="cta-btns">
          <a href="RegisterAndLogIn" class="btn btn-brand md-sm-2 my-3 "  data-aos="fade-right">Appointment</a>
          <a href="RegisterAndLogIn" class="btn btn-outline-brand ms-sm-2" data-aos="fade-right">Get in touch</a>
        </div>
                    </div>
                
            </div>
        </div>
        
            

        </section>
     
      
        <section id="about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8">
                <Swiper 
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        
       
        loop={true}
       

        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 2
            },
            1560: {
                slidesPerView: 3
            },
        }}
        
        >
               
             
            {
                slider.map(data => (
                    <SwiperSlide style={{ backgroundImage: `url(${data.url})`,height:`50vh`, width:`100%` }} className="myswiper-slider">
                          
                    </SwiperSlide>
                ))
            }
        </Swiper>
                </div>
                <div className="col-lg-4 ">
                    <h6 >SERVICES</h6>
                    <h1>20% OFF</h1>
                    <p >Define your look with precision beard grooming. From shaping to trimming, our barbers will help you maintain a sharp and polished appearance.</p>
                    <p >Elevate your style with our hairstyling services. Whether you prefer a sleek look or something more adventurous, we'll bring your vision to life.</p>
                    <a  href="#move"className="btn btn-outline-brand ">LEARN MORE</a>
                </div>
            </div>
         </div>   
       </section>
       
       
     
      
      
     
        

        
    
       <div class="service" id="move">
            <div class="container">
                <div class="section-header text-center col-">
                    <h6>Our Salon Services</h6>
                    <h2>What we Provide</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis iste! Dolorum, incidunt  </p>
                </div>
                

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item">
                            <div class="service-img">
                                <img src={img7} />
                            </div>
                            <h3>Hair Cut</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item">
                            <div class="service-img">
                                <img src={img8} alt="Image"/>
                            </div>
                            <h3>Beard Style</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                          
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item">
                            <div class="service-img">
                                <img src={img9} alt="Image"/>
                            </div>
                            <h3>Color & Wash</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                           
                        </div>
                        
                    </div>
                    <div class="cta-btns">
          <a href="RegisterAndLogIn"class="btn btn-brand md-sm-2 my-3 " >Appointment</a>
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
       <BackToTopButton/>
        </body>
       
    )
}

export default Services;