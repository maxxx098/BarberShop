import React from 'react'
import blog1 from './img/home-blog1.png'
import blog2 from './img/home-blog2.png'
import BackToTopButton from './BackToTopButton'
import RegisterAndLogIn from "./RegisterAndLogIn";
const Blog = () => {
  return (
    <body>
        <section className="hero-page" >
        <div class="page-header">
            <div class="container">
               
                    <div class="col-12">
                        <h1>BLOG</h1>
                    </div>
                    <div class="col-12">
                    <div class="cta-btns">
          <a href="RegisterAndLogIn" class="btn btn-brand md-sm-2 my-3 " >Appointment</a>
          <a href="RegisterAndLogIn" class="btn btn-outline-brand ms-sm-2">Get in touch</a>
        </div>
                    </div>
                
            </div>
        </div>
        
            

        </section>
        <section class="blog">
      <div class="container">
        <div class="row">
          <div class="col-12 intro text-center">
            <h6>Blog</h6>
            <h1>Latest Styles from the blog</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem architecto obcaecati at repudiandae nobis iste! Dolorum, incidunt  </p>
        </div>
        </div>
       <div class="row">
        <div class=".col-lg-6 col-md-6">
          <article class="blog-post">
            <img src={blog1} alt=""/>
            <div class="date">
              <div>
              <div class="day">12</div>
              <div class="year">Sep, 2014</div>
              </div>
            </div>
            <h4 class="mt-5">2014 Men's Hair Trend Everywhere</h4>
            <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem</p>
            <a href="#" class="link-more">Read more <i class="ri-arrow-right-line icon"></i></a> 
          </article> 
        </div>
        <div class=".col-lg-6 col-md-6">
          <article class="blog-post">
            <img src={blog2} alt=""/>
            <div class="date">
              <div>
              <div class="day">26</div>
              <div class="year">Aug, 2018</div>
              </div>
            </div>
            <h4 class="mt-5">2022 Men's Hair Trend Everywhere</h4>
            <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae nam illum, quia minima placeat, dolorem</p>
            <a href="#" class="link-more">Read more <i class="ri-arrow-right-line icon"></i></a> 
          </article> 
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

export default Blog

