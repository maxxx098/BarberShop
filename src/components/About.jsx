import React from "react";
import img2 from './img/team-1.jpg';
import img3 from './img/team-2.jpg';
import img4 from './img/team-3.jpg';
import img5 from './img/team-4.jpg';
import img6 from './img/about.png';
import img7 from './img/blew.png';

import ReactDOM from 'react-dom/client';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import RegisterAndLogIn from "./RegisterAndLogIn";

import gallery1 from './img/gallery1.png'
import gallery2 from './img/gallery2.png'
import gallery3 from './img/gallery3.png'
import gallery4 from './img/gallery4.png'

import BackToTopButton from "./BackToTopButton";

function About(){
    

    
    return(
      <body>
    
        
        
        <section className="hero-page" >
        
        <div class="page-header">
            <div class="container">
               
                    <div class="col-12">
                        <h1 >ABOUT US</h1>
                    </div>
                    <div class="col-12">
                    <div class="cta-btns">
          <a href="RegisterAndLogIn" class="btn btn-brand md-sm-2 my-3 " data-aos="fade-right">Appointment</a>
          <a href="RegisterAndLogIn" class="btn btn-outline-brand ms-sm-2 " data-aos="fade-right">Get in touch</a>
        </div>
                    </div>
                
            </div>
        </div>
        
        
            

        </section>
           
   
        <section id="about">
       
        
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img src={img6}  />
                </div>
                <div className="col-lg-4 offset-lg-2">
                    <h6 >Learn About Us</h6>
                    <h1>25 YEARS OF EXPERIENCE</h1>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <p >It looks pretty easy, and simple when observing, but in reality there’s whole a lot more to it. You have to invest the time to learn, and develop skills to become a great barber just like in any other profession.</p>
                    <a  href="#next"className="btn btn-outline-brand ">LEARN MORE</a>
                </div>
            </div>
         </div>   

       </section>

       <section id="next">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8">
                <Swiper 
        className='myswiper'
        modules={[EffectCoverflow, Autoplay]}
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
        margin={{
           
        }}
        
        >
               
             
               {
               
               <SwiperSlide  className="myswiper-slider">
                      <div className="auto-grid">
                      <div className="box">
      <h2 >03</h2>
    <h3 >MISSION</h3>
    <p >At [Your Barber Shop Name], our mission is to redefine grooming as an art form and empower individuals to express their unique style with confidence. 
        We are dedicated to providing exceptional haircuts and grooming services in a welcoming and inclusive environment.</p>
        
      </div>   

                      </div>
               </SwiperSlide>
         
       }
       {
          
          <SwiperSlide  className="myswiper-slider">
                 <div className="auto-grid">
                      <div className="box">
      <h2 >03</h2>
    <h3 >VISION</h3>
    <p >At [Your Barber Shop Name], our mission is to redefine grooming as an art form and empower individuals to express their unique style with confidence. 
        We are dedicated to providing exceptional haircuts and grooming services in a welcoming and inclusive environment.</p>
        
      </div>   

                      </div>
     
          </SwiperSlide>
    
       }
              {
          
          <SwiperSlide  className="myswiper-slider">
                <div className="auto-grid">
                      <div className="box">
      <h2 >03</h2>
    <h3 >CORE VALUES</h3>
    <p >At [Your Barber Shop Name], our mission is to redefine grooming as an art form and empower individuals to express their unique style with confidence. 
        We are dedicated to providing exceptional haircuts and grooming services in a welcoming and inclusive environment.</p>
        
      </div>   

                      </div>
          </SwiperSlide>
    
  }
        </Swiper>
                </div>
                <div className="col-lg-4 ">
                    <h6 >About</h6>
                    <h1>Discover More</h1>
                    <p >Define your look with precision beard grooming. From shaping to trimming, our barbers will help you maintain a sharp and polished appearance.</p>
                    <p >Elevate your style with our hairstyling services. Whether you prefer a sleek look or something more adventurous, we'll bring your vision to life.</p>
                    <a  href="#team"className="btn btn-outline-brand ">LEARN MORE</a>
                </div>
            </div>
         </div>   
       </section>
      
      
       <section class="team" id="team">
      <div class="container">
        <div class="row">
          <div class="col-12 intro text-center">
            <h6>Team</h6>
            <h1>Meet our Barber</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis iste! Dolorum, incidunt  </p>
        </div>
        </div>
        <div class="row text-center">
          <div class="col-lg-3 col-md-6">
                <div class="team-member">
                    <div className="team-item">
                <div className="team-img">
                  <img src={img2} alt=""/>
                  </div>
                  <div class="social-links">
                    <a href="#"><i class="ri-facebook-fill"></i></a>
                    <a href="#"><i class="ri-twitter-fill"></i></a>
                    <a href="#"><i class="ri-instagram-fill"></i></a>
                    <a href="#"><i class="ri-google-fill"></i></a>          
                  </div>
                  <div className="team-text">
                  <h5 class="mt-4">Ahsen Riaz</h5>
                  <p>Senior CEO</p>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="team-member">
                <div className="team-item">
                <div className="team-img">
                  <img src={img4} alt=""/>
                  </div>
                  <div class="social-links">
                  <a href="#"><i class="ri-facebook-fill"></i></a>
                    <a href="#"><i class="ri-twitter-fill"></i></a>
                    <a href="#"><i class="ri-instagram-fill"></i></a>
                    <a href="#"><i class="ri-google-fill"></i></a>       
                  </div>

                 <div className="team-text">
                 <h5 class="mt-4">Mutahir Riaz</h5>
                  <p>Senior CEO</p>
                 </div>
                </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="team-member">
                    <div className="team-item">
                  <div className="team-img">
                  <img src={img5} alt=""/>
                  </div>
                  <div class="social-links">
                  <a href="#"><i class="ri-facebook-fill"></i></a>
                    <a href="#"><i class="ri-twitter-fill"></i></a>
                    <a href="#"><i class="ri-instagram-fill"></i></a>
                    <a href="#"><i class="ri-google-fill"></i></a>         
                  </div>
                  <div className="team-text">
                  <h5 class="mt-4">Ahmed Riaz</h5>
                  <p>Junior CEO</p>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="team-member">
                    <div className="team-item">
                  <div className="team-img">
                  <img src={img5} alt=""/>
                  </div>
                  <div class="social-links">
                  <a href="#"><i class="ri-facebook-fill"></i></a>
                    <a href="#"><i class="ri-twitter-fill"></i></a>
                    <a href="#"><i class="ri-instagram-fill"></i></a>
                    <a href="#"><i class="ri-google-fill"></i></a>         
                  </div>
                  <div className="team-text">
                  <h5 class="mt-4">Ahmed Riaz</h5>
                  <p>Junior CEO</p>
                  </div>
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
       
    <section class="reviews">
      <div class="container">
        <div class="row">
          <div class="col-12 intro text-center">
            <h6>Reviews</h6>
            <h1>Listen to our customers</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis iste! Dolorum, incidunt  </p>
        </div>
        </div>
        <div class="row gy-5">
          <div class="col-lg-4 col-md-6">
            <div class="review">
               <div class="d-flex">
                <img src={img5} alt=""/>
                <div class="ms-3">
                  <h5>Henry Cavil</h5>
                  <small>@HenryCavil</small>
                </div>
                <div class="icon"><i class="ri-twitter-fill"></i></div>
               </div>
               <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis isten</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="review">
               <div class="d-flex">
                <img src={img2} alt=""/>
                <div class="ms-3">
                  <h5>Will Smith</h5>
                  <small>@WillSmith</small>
                </div>
                <div class="icon"><i class="ri-twitter-fill"></i></div>
               </div>
               <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis isten</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="review">
               <div class="d-flex">
                <img src={img4} alt=""/>
                <div class="ms-3">
                  <h5>BlackAdam</h5>
                  <small>@BlackAdam</small>
                </div>
                <div class="icon"><i class="ri-twitter-fill"></i></div>
               </div>
               <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis isten</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="review">
               <div class="d-flex">
                <img src={img2} alt=""/>
                <div class="ms-3">
                  <h5>Shane Watson</h5>
                  <small>@ShaneWatson</small>
                </div>
                <div class="icon"><i class="ri-twitter-fill"></i></div>
               </div>
               <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis isten</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="review">
               <div class="d-flex">
                <img src={img4} alt=""/>
                <div class="ms-3">
                  <h5>Tom</h5>
                  <small>@Tom</small>
                </div>
                <div class="icon"><i class="ri-twitter-fill"></i></div>
               </div>
               <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis isten</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="review">
               <div class="d-flex">
                <img src={img5} alt=""/>
                <div class="ms-3">
                  <h5>Bruce Wayne</h5>
                  <small>@BruceWayne</small>
                </div>
                <div class="icon"><i class="ri-twitter-fill"></i></div>
               </div>
               <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis isten</p>
            </div>
          </div>
        </div>
   
        <div class="cta-btns">
          <a href="RegisterAndLogIn" class="btn btn-brand md-sm-2 my-3 " >Appointment</a>
          <a href="RegisterAndLogIn" class="btn btn-outline-brand ms-sm-2">Get in touch</a>
        </div>
      </div>
    </section>
        

        
    
   
         
      
       
       <section>
       <div class="gallery-area section-padding30">
            <div class="container">
                
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-9 col-sm-10">
                        <div class="section-tittle text-center mb-100">
                            <span>our image gellary</span>
                            <h2>some images from our barber shop</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="boxx-snake mb-30">
                           <img className="gallery-img" src={gallery1} alt="" />
                            
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-6 col-sm-6">
                        <div class="boxx-snake mb-30">
                            <img className="gallery-img" src={gallery2} alt="" />
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-6 col-sm-6">
                        <div class="boxx- snake mb-30">
                           <img className="gallery-img" src={gallery3} alt="" />
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="boxx-snake mb-30">
                            <img className="gallery-img" src={gallery4} alt="" />
                            <div class="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       </section>
       
        
            
        <BackToTopButton/>
      </body>
        
        
 
    );
}

export default About;
const root = ReactDOM.createRoot(document.getElementById('root'));