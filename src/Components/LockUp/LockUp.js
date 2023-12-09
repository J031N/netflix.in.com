import React, { useState ,useContext} from 'react'
import lockLogo from '../../Images/Lockup/logo.svg'
import lockbanner from '../../Images/SignUp/renameLogo.png'
import './LockUp.css'
import {useNavigate} from 'react-router-dom'
import { FirebaseContext } from '../../Store/FirebaseContext'

function LockUp() {

    const[lockemail,setLockemail]=useState('')
    const[lockPassword,setLockpassword]=useState('')
    const {firebase}=useContext(FirebaseContext)
    const lockSubmit=(e)=>{
        e.preventDefault()
        console.log(lockPassword);
        firebase.auth().signInWithEmailAndPassword(lockemail,lockPassword).then(()=>{
            alert('logged In')
            navigate('/netflix.com')
        }).catch((Erro)=>{
            alert('User not exist')
        })
        
    }
    const[focusing,setFocusing]=useState({
        errorEmail:false,
        errorPassword:false
    })
    const navigate=useNavigate()
    return (
        <div className='parentLock' style={{backgroundImage:`url(${lockbanner})`}} >
            <div className='childLock'><a href="#"><img src={lockLogo} alt="" /></a>
            </div>
            <div className="backImg" >
                <div className="form-wrapper">
                    <h2>Sign In</h2>
                    <form onSubmit={lockSubmit} action="#">
                        <div className="parentFormControl">
                        <div className="form-control">
                            <input type="email" name='email' required 
                            value={lockemail}
                            onChange={(e)=>setLockemail(e.target.value)}
                            onBlur={()=>setFocusing({...focusing,errorEmail:true})}
                            focus={focusing.errorEmail.toString()}
                            />

                            <label>Email</label>
                            <span>Enter Your valid Email id</span>
                        </div>
                      
                        </div>
                        
                        
                        <div className="parentFormControl">
                        <div className="form-control">
                            <input type="text" name='password' required 
                            value={lockPassword}
                            onChange={(e)=>setLockpassword(e.target.value)}
                            onBlur={()=>setFocusing({...focusing,errorPassword:true})}
                            focus={focusing.errorPassword.toString()}
                            pattern='^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[@#%$]).{8,16}$'
                            />
                            <label>Password</label>
                            <span className='lockPass'>Enter your correct password</span>
                        </div>
                        
                        </div>
                       
                        <div className="lockbtn"> <button  className="lockSubmit">Sign In</button>
                        </div>

                        <div className="form-help">
                            <div className="rememberMe">
                                <input type="checkbox" id='remember' />
                                <label htmlFor="remember">Remember Me</label>
                            </div>
                            <a href="#">Need help?</a>
                        </div>
                    </form>
                    <p>New to Netflix? <a href="#">Sign up now</a></p>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <a href="#">Learn more.</a>
                    </small>
                </div>
            </div>
            <div className="lockFooter">
                <h2>Questions? Call 000-800-919-1698</h2>
                <div className="row">
                    <div className="col">
                        <a href="#">FAQ</a>
                        <a href="#">Cookie preferance</a>
                    </div>
                    <div className="col">
                    <a href="#">Help Centre</a>
                        <a href="#">Corporate Information</a>
                    </div>
                    <div className="col">
                    <a href="#">Term of use</a>
                       
                    </div>
                    <div className="col">
                        <a href="#">Privacy</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LockUp
