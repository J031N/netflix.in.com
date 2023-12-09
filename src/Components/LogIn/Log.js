import React, { useState,useContext } from 'react'
import './Log.css'
import {useNavigate} from 'react-router-dom'
import netLogo from '../../Images/Lockup/logo.svg'
import { FirebaseContext } from '../../Store/FirebaseContext'

function Log() {
  const [form, setForm] = useState('')
  const [password, setPassword] = useState('')
  const[username,setUsername]=useState('')
  const [blur, setBlur] = useState({
    errUsername:false,
    errEmail: false,
    errPassword: false,
  })
  const navigate=useNavigate()
  const {firebase}=useContext(FirebaseContext)
  const logSubmit = (e) => {
    e.preventDefault()

    console.log(username);
    firebase.auth().createUserWithEmailAndPassword(form,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('people').add({
          id:result.user.uid,
          username:username
        }).then(()=>{
          
           navigate('/netflix.com')
        })
      })
    })
  }
 

  return (
    <div className='container'>
      <div className="logHeader">
        <img src={netLogo} alt="" />
        <h3 onClick={()=>{
          navigate('/signin')
        }} className='logSign'>Sign In</h3>
      </div>
      <div className="logLine"></div>
      <div className="logBody">

        <h1>Welcome back!</h1>
        <h1>Joining Netflix is easy.</h1>
        <p className='logPP'>Enter your Email and Password and you'll be watching in no time.</p>
        <form action="" onSubmit={logSubmit}>
        <div className="logUser">
            <input type="text" name="text" id=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              onBlur={() => setBlur({ ...blur, errUsername: true })}
              focus={blur.errUsername.toString()}
              pattern='^(?=.*?[a-zA-Z]).{4,60}$'
            />
            <span>User Name</span>
            <h4 className='username'>Username must be 4 to 12 characters</h4>
          </div>
          <div className="logEmail">
            <input type="email" name="email" id=""
              value={form}
              onChange={(e) => setForm(e.target.value)}
              required
              onBlur={() => setBlur({ ...blur, errEmail: true })}
              focus={blur.errEmail.toString()}

            />
            <span>Re-Enter your Email Id</span>
            <h4 className='reenter'>Enter your valid Email Id</h4>
          </div>
        

          <div className="logPassword">
            <input type="password" name="password" id=""
            
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              pattern='^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[@#%$]).{8,16}$'
              focus={blur.errPassword.toString()}
              onBlur={() => setBlur({ ...blur, errPassword: true })}
            />
            <label>Enter your password</label>
            <h3 className='must'>Password must have  6 to 14 characters that include atleast 1 uppercase, 1 digit and 1 special character. </h3>

          </div>

          <button className="logButton">Sign up</button>
       
        </form>

      </div>
      <div className="logFooter">
        <h2>Questions? Call 000-000-000-000</h2>
        <div className="row">
          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Privacy</a>


          </div>
          <div className="col">
            <a href="#">help Centre</a>
            <a href="#">Cookie preferances</a>


          </div>
          <div className="col">
            <a href="#">Netflix Shop</a>
            <a href="#">Corporate Information</a>


          </div>
          <div className="col">
            <a href="#">Term of use</a>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Log
