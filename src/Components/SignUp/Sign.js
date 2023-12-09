import React, { useState } from 'react'
import './Sign.css'
import background from '../../Images/SignUp/renameLogo.png'
import logos from '../../Images/Lockup/logo.svg'
import down from '../../Images/SignUp/down-icon.png'
import imgCol from '../../Images/SignUp/feature-1.png'
import imgCol2 from '../../Images/SignUp/feature-2.png'
import imgCol3 from '../../Images/SignUp/feature-3.png'
import imgCol4 from '../../Images/SignUp/feature-4.png'
import {  useNavigate } from 'react-router-dom'
import firebase from '../../Firebase/config'

function Sign() {
  const navaigate=useNavigate()
const [focus,setFocus]=useState(false)
  const [email,setEmail]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    firebase.firestore().collection('EmailUsers').add({
      id:email
    }).then(()=>{
      navaigate('/signup')
    })
    
  }
 
  return (
    <div >
      <div className="parentNav">
       
        <nav className='navBar'>
          <img className='netflix' src={logos} alt="" />
          <div className="signUpButtons">
       
            <button  className="englishButton">English <img src={down} alt="" /></button>
         
            <button onClick={()=>{
              navaigate('/signin')
            }} className="signUpButton">Sign In</button>

          </div>
        </nav>
        
      </div>

      <div className='parentSign' style={{ backgroundImage: `url(${background})` }}>
        <div className="signUpBody">
          <h1 className='hits'>The biggest Indian hits. Ready to watch here </h1>
          <h1 className='oneFourNine'>from ₹ 149. </h1>
          <h1 className='join'>Join today. Cancel anytime.</h1>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <form action="" className='emailForSignUp'>
            <div className="signEmail">
            
            <input type="email" placeholder='Email address' name='email'
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}} 
             required
             onBlur={()=>setFocus(true)}
             focus={focus.toString()}
             />
           
           
           
            <h4 className='inline'>Email is required</h4>
            </div>
            
            <button onClick={handleSubmit} className="submit">Get started</button>
          
           



          </form>

        </div>


      </div>
      <div className="line"></div>
      <div className="features">

        <div className="row">
          <div className="text-col">
            <h2>Enjoy on your TV.</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <din className="img-col">
            <img src={imgCol} alt="" />
          </din>
        </div>
        <div className="line"></div>
       
        <div className="row">
          <din className="img-col">
            <img src={imgCol2} alt="" />
          </din>
          <div className="text-col">
            <h2>Download your shows to watch offline</h2>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>

        </div>
       
        <div className="line"></div>
        <div id='hello' className="row">
          <div className="text-col">
            <h2>Watch everywhere</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <din className="img-col">
            <img src={imgCol3} alt="" />
          </din>
        </div>
        <div className="line"></div>
        <div className="row">
          <din className="img-col">
            <img src={imgCol4} alt="" />
          </din>
          <div className="text-col">
            <h2>Create profiles for kids</h2>
            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>

        </div>
      </div>
      <div className="line"></div>

      <div className="faq" >
        <h2>Frequently Asked Questions</h2>

        <ul className="accordian">
          <li>
            <input type="radio" name='accordian' id='first' />
            <label htmlFor="first">What is Netflix?</label>
            <div className="contain">
              <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

              </p>
            </div>

          </li>
          <li>
            <input type="radio" name='accordian' id='second' />
            <label htmlFor="second">How much does Netflix cost?</label>
            <div className="contain">
              <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
            </div>

          </li>
          <li>
            <input type="radio" name='accordian' id='third' />
            <label htmlFor="third">Where can I watch?</label>
            <div className="contain">
              <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
              </p>
            </div>

          </li>
          <li>
            <input type="radio" name='accordian' id='fourth' />
            <label htmlFor="fourth">How do I cancel</label>
            <div className="contain">
              <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
            </div>

          </li>
          <li>
            <input type="radio" name='accordian' id='fifth' />
            <label htmlFor="fifth">What can I watch on Netflix? </label>
            <div className="contain">
              <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
            </div>

          </li>
          <li>
            <input type="radio" name='accordian' id='six' />
            <label htmlFor="six">Is Netflix good for kid?</label>
            <div className="contain">
              <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

<br /> Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
              </p>
            </div>

          </li>
        </ul>

      </div>
    
      <div className="lastSign">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="lastStart">
        <div className="lastInput">
          <input type="email" placeholder='Email address' required name='email' value={email}
          onChange={(e)=>setEmail(e.target.value)}
          onBlur={()=>setFocus(true)}
          focus={focus.toString()}
          /> 
            <h4>Email is required</h4>
        </div>
      
        <button onClick={handleSubmit} className="lastButton">Get started</button>
       
        </div>
      


    </div>
    <div className="line"></div>
    <div className="footer">
      <h2>Questions? Call 000-000-000-000</h2>
      <div className="row">
        <div className="col">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">speed Test</a>
          <a href="#">Netflix India</a>
        </div>
        <div className="col">
          <a href="#">Help Centre</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie preferance</a>
          <a href="#">Legal Notice</a>
         
        </div>
        <div className="col">
          <a href="#">Account</a>
          <a href="#">Way to watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on Netflix</a>
          
        </div>
        <div className="col">
          <a href="#">Media centre</a>
          <a href="#">Term of use</a>
          <a href="#">Contact Us</a>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sign
