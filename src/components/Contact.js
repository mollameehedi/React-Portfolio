import React,{useState} from 'react'
import {FaFacebookF,FaTwitter,FaPinterestP,FaInstagram,FaBehance,FaPlay} from 'react-icons/fa';

const Contact = () => {
    const [header] = useState({
        logo:"images/logo.png",
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    })
  return (
    <div className='contact'>
        <div className='container'>
        <div className='contactSection'>
                 <div className='contactSectionLogo'>
                     <img src={ header.logo } alt={ header.logo } />
                 </div>
                 <div className='row justifyCenter'>
                    <div className='col-6'>
                        <p className='mainContent'>{header.text}</p>
                        <div className='aboutCirles'>
                            <ul> 
                                <li><FaFacebookF/></li>
                                <li><FaTwitter/></li>
                                <li><FaPinterestP/></li>
                                <li><FaInstagram/></li>
                                <li><FaBehance/></li>
                            </ul>
                        </div>
                    </div>
                 </div>
                   
                 
            </div>
        </div>
    </div>
  )
}

export default Contact
