import React from 'react'
import './Clock.css'
import { useState, useEffect } from 'react'
import { useRef } from "react";
const Clock = () => {
   
    




// creating a function and calling it in every seconds
setInterval(() => {
  let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  let d;
  d = hour < 12 ? "AM" : "PM"; //if hour is smaller than 12, than its value will be AM else its value will be pm
  hour = hour > 12 ? hour - 12 : hour; //if hour value is greater than 12 than 12 will subtracted ( by doing this we will get value till 12 not 13,14 or 24 )
  hour = hour == 0 ? (hour = 12) : hour; // if hour value is  0 than it value will be 12

  // adding 0 to the front of all the value if they will less than 10
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

 
}, 1000); // 1000 milliseconds = 1s
    const [time, setTime] = useState('')
    function formatTime(val){
        if (val < 10){
            return "0"

        }else {
            return '0';

        }
    }
    useEffect(() =>{
        const timerID =setInterval(
            () => tick(), 1000
        )
        return function cleanup(){
            clearInterval(timerID)
        }
    })
    function tick(){
        const d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();

        setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) + s);
    }
   
  return (
    <div >
        
    <section className='ako'>
    <div class="row">
          <div class="col-12 intro text-center">
       
            <h6>Limited Time Offer</h6>
            <h1>Book Now!</h1>
           
        </div>
        </div>
  <div class="container">
    <div class="icons">
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
    </div>
    <div class="time">
      <div class="time-colon">
        <div class="time-text">
          <span class="num hour_num">08</span>
          <span class="text">Hours</span>
        </div>
        <span class="colon">:</span>
      </div>
      <div class="time-colon">
        <div class="time-text">
          <span class="num min_num">45</span>
          <span class="text">Minutes</span>
        </div>
        <span class="colon">:</span>
      </div>
      <div class="time-colon">
        <div class="time-text">
          <span class="num sec_num">06</span>
          <span class="text">Seconds</span>
        </div>
        <span class="am_pm">AM</span>
      </div>
    </div>
  </div>
  <div className="cta-btns">
          <a href="#appointment" className="btn btn-brand md-sm-2 my-3 " >Appointment</a>
          <a href="#appointment" className="btn btn-outline-brand ms-sm-2">Get in touch</a>
        </div>
</section>
    </div>
  )
}

export default Clock
