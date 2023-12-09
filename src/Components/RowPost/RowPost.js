import React, { useContext, useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../Axios/Axios'
import { imageUrl } from '../../Constants/Constants'

import {Link, useNavigate} from 'react-router-dom'


function RowPost(props) {
const[post,setPost]=useState([])

const navigate=useNavigate()
  useEffect(()=>{
    axios.get(props.url).then((res)=>{
      // console.log(res.data);
      setPost(res.data.results)
    }).catch(err=>{
        alert("Network Error")
    })
   
  },[])

  
  return (
   <div className="bannerNet">
    <div className='row'>
      <h1 className={props.isSmall ? 'titleSmall' :'titleBig' }>{props.title}</h1>
      <div className="posters">
        {post.map((movie)=>{
          
            return(
              <Link to='/teaser' state={{movie:movie}}>
                <img
                
                className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="posters" />
         </Link>
            )
          })
        }
        
      </div>
      </div> 
     
    </div>
   
  )
}

export default RowPost
