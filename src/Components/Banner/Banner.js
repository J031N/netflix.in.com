import React, { useContext, useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios/Axios'
import { API_KEY,imageUrl } from '../../Constants/Constants'

import {Link} from 'react-router-dom'

function Banner() {
  
const [movie,setMovie]=useState([])
 useEffect(()=>{
  axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213 `).then((res)=>{
    // console.log(res.data.results);
    setMovie(res.data.results[15])
  })
 },[])


  return (
    
    <div >
      <Link to="/Bteaser" state={{movie:movie}} style={{textDecoration:'none'}}  >
      <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}} className="banner" 
      
      >
        <div className="content">
            <h1  className='title'>{movie.name}</h1>
            <div className="banner-buttons">
                <button className='banner-btn'>Play</button>
                <button className="banner-btn">My List</button>
            </div>
            <h1 className="description">{movie.overview} </h1>
        </div>
        <div className="fade"></div>
        
      </div>
      </Link>
    </div>
  )
}

export default Banner
