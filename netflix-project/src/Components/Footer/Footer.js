import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'
function Footer() {
  return (
    <div className='Footer-outer-container'>
      <div className='Footer-inner-container'>
        <div className='footer-icon'>
           <FacebookOutlinedIcon/>
           <InstagramIcon/>
           <YouTubeIcon/>
           </div>  
        <div className='footer-data'>
          <div>
            <ul>
            <li>Audio Desccription</li>
            <li>Investor Belations</li>
            <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Coorporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
            <li>Media center</li>
            <li>Privacy</li>
            <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className='service-code'>
          <p>
            Service
          </p>
        </div>
        <div className='copy-write'>
          &copy; 1997-2024 Netflix, Int.
        </div>
      </div>
    </div>
  )
}

export default Footer
