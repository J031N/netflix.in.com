import React, { useState } from 'react'

import './Trailer.css'
import { Button, Grid } from '@mui/material'
import { imageUrl } from '../../Constants/Constants'
import { useLocation } from 'react-router-dom'
import Youtube from 'react-youtube'
import play from '../../Images/SignUp/PLAY.png'
import download from '../../Images/SignUp/download.png'
import share from '../../Images/Lockup/share.png'
import thumb from '../../Images/Lockup/thumb.png'
import TPlus from '../../Images/Lockup/trailerPlus.png'
import axios from '../../Axios/Axios'
import { API_KEY } from '../../Constants/Constants'

function BannerTeaser() {
    const location = useLocation(true)

   const [urlId,setUrlId]=useState('')

    const opts = {
        height: '390',
        width: '100%',
       
        playerVars: {
         
          autoplay: 1,
        },
      };

      const trailerSubmit=(id)=>{
        console.log(id)
        axios.get(`/tv/${id}/videos?language=en-US&api_key=${API_KEY}`).then((res)=>{
            console.log(res.data);
            if(res.data.results.length!==0){
                setUrlId(res.data.results[0])
            }else{
                alert('Trailer not available')
            }
        })
      }
    return (
        <div className='parentTrailer'>

            <Grid container >


                <Grid item xs={8}>
                    <div className="trailerImage" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${imageUrl + location.state.movie.backdrop_path})` }} >
                        <div className='trailerContent' >
                            <Grid container>
                                <h1 style={{ fontSize: '50px', color: 'red',textDecoration:'none' }} >{location.state.movie.original_name }</h1>
                            </Grid>

                            <Grid container>
                                <h3 style={{ marginTop: '50px', fontWeight: '100', }}>{location.state.movie.overview}</h3>
                                <Button onClick={()=>{
                                    trailerSubmit(location.state.movie.id)
                                }} variant='contained' sx={{ color: 'black', backgroundColor: 'white', marginTop: '30px', }}>Play Trailer</Button>
                            </Grid>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="trailerReview" style={{ backgroundColor: "#111", height: '37.5rem', padding: '20px', fontFamily: 'initial' }}>
                        <h1 style={{ fontSize: '45px', color: 'white' }}>{ location.state.movie.name }</h1>
                       <div>
                        <h4 style={{ color: 'gray',marginTop:'10px',  fontSize:'20px' }} className="trailerLanguage">Language : {location.state.movie.original_language}</h4>
                        <h5 style={{ color: 'gray',marginTop:'10px',fontSize:'17px' }} className="trailerReleaseDtae">Release Dtae : {location? location.state.movie.release_date :'hello'}</h5>
                        <h5 style={{color:'gray',marginTop:'10px',fontSize:'17px'}}>IMBD : {location.state.movie.vote_average}</h5>
                        </div>
                        <Grid  sx={{mt:'30px'}}>
                            <Button variant='contained' sx={{ bgcolor: 'white', color: 'black', width: '100%',padding:'15px 0', fontSize:'18px' }}>Play  <img className='trailerPlay' src={play} alt="" /></Button>
                        </Grid>
                        <Grid sx={{mt:'17px' }}>
                            <Button variant='contained' sx={{ bgcolor: '#3D3B3B', color: 'white', width: '100%',padding:'15px 0',fontSize:'18px' }}>Download <img className='trailerDownload' src={download} alt="" /></Button>
                        </Grid>
                        <div className="trailerLast">
                           
                                
                                <h5 style={{marginRight:'0px' }}> <img style={{marginLeft:'10px'}} src={TPlus} alt="" /> MyList </h5>
                           
                                
                                <h5> <img style={{marginRight:'50px'}} src={thumb} alt="" />  Rate</h5>
                           
                                
                                <h5>  <img style={{width:'28px'}} src={share} alt="" />Share </h5>
                            
                        </div>
                    </div>
                </Grid>
            </Grid>
           <Youtube videoId={urlId.key}  opts={opts} />
        </div>

    )
}

export default BannerTeaser
