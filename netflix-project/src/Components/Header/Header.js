import './Header.css';
import React from 'react'
import logo from '../Images/net-logo.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
function Header() {
  return (
    <div>
      <div className='nav-block'>
        <div className='most-outer'>
            
            <div className='Header-container'>

                <div className='Header-left'>
                    <ul>
                    <li><img src={logo} width='100' alt="netflix"/></li>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TvShows</li>
                    <li>Movie</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Language</li>
                    <li></li>
                    </ul>
    
                </div>
                <div className='Header-right'>
                   <ul>
                  <li><SearchIcon/></li>
                  <li><NotificationsNoneIcon/></li>
                  <li><AccountBoxIcon/></li>
                  <li><ArrowDropDown/></li>
                  </ul> 
                </div>
            </div>
         </div>
       </div>
      
      
    </div>
  )
}

export default Header
