import React from 'react'
import logo from "../../Images/Home/netflix-logo.png"
import avatar from "../../Images/Home/Netflix-avatar.png"
import bell from '../../Images/Home/bell.png'
import gift from "../../Images/Home/gift.png"
import Search from '../../Images/Home/searchb.jpg'
import arrow from '../../Images/Home/arrow.png'
import { Grid } from '@mui/material'
import './Header.css'
function Header() {
  return (
    <Grid container spacing={1}>
    <div className='parentHeader'>
      <div className="childHeader">
        <img className='logo' src={logo} alt="" />
        
        <div className='headerHome'>
            <span className='home'>Home</span>
            <span className='home'>TV Shows</span>
            <span className='home'>Movies</span>
            <span className='home'>Latest</span>
            <span className='home'>My List</span>
        </div>
        <div className="headerAvatar">
             <img className='search' src={Search} alt="" />
             
        <span className='kids'>KIDS</span>
        <span className='kids'>DVD</span>
        <img className='gift' src={gift} alt="" />
        <img className='bell' src={bell} alt="" />
        <img className='avatar' src={avatar} alt="" />
        <img className='arrow' src={arrow} alt="" />
        </div>
        
      </div>

    </div>
    </Grid>
  )
}

export default Header
