import React, { useState } from 'react'
import { database } from './FirebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
const RegisterAndLogIn = () => {
  
const [login,setLogin] = useState(false)
  const history = useNavigate ()
    const handleSubmit =(e,type) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if(type === 'signup'){
          createUserWithEmailAndPassword(database, email, password).then (data => {
            console.log(data,"authData")
            history('/RegisterAndLogIn')
          }).catch (err => {
            alert(err.code)
            setLogin(true)
          })
        }else {
          signInWithEmailAndPassword(database, email, password).then (data => {
            console.log(data,"authData")
            history('/appointment')
          }).catch (err => {
            alert(err.code)
          })
        }
        
    }
  return (
    <body className='body'>
      <section  >
            
            <div className="home">
            <div className="containersss" >
            <div className='cta-btns'>
      <a className="btn btn-brand md-sm-2 my-3"  onClick={() => setLogin(false)}>SignUp</a>
      
     
      <a className="btn btn-outline-brand ms-sm-2"   onClick={() => setLogin(true)}>LogIn</a>
      </div>
            </div>
            </div>
           
            <div className='symon'>
          <form onSubmit={(e) => handleSubmit (e,login?'signin':'signup')}>
              <h1>{login? 'SignIn':'SignUp'}</h1>
            
              <div class="inputbox">
        <ion-icon name="mail-outline"></ion-icon>
        <input name="email"  required/>
        <label for="">Email</label>
    </div>
    <div class="inputbox">
        <ion-icon name="lock-closed-outline"></ion-icon>
        <input type="password" name="password" id='pass' required/>
        
        <label for="">Password</label>
    </div>
              <button id='button'>{login?'SignIn':'SignUp'}</button>
             
          </form>
          
          </div>
            
        </section>
    
     
  </body>
    
  )
}

export default RegisterAndLogIn;
