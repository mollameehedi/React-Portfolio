import React from 'react'
import {FaFacebookF,FaTwitter,FaPinterestP,FaInstagram,FaBehance,FaPlay} from 'react-icons/fa';

const Banner = () => {
  return (
    <header className="header">
        <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='header__content'>
                            <div className='header__section'>
                                <ul className='header__ul'>
                                        <li><FaFacebookF/></li>
                                        <li><FaTwitter/></li>
                                        <li><FaPinterestP/></li>
                                        <li><FaInstagram/></li>
                                        <li><FaBehance/></li>
                                    </ul>
                                    <h1>I am MollaMeeHedi</h1>
                                    <p>I'm MollaMeehedi web developer with long time experience in this field.</p>
                                    <div className='header_-buttons'>
                                        <a href='' className='btn btn-outline'>My Portfolio</a>
                                        &nbsp;&nbsp;&nbsp;
                                        <a href='' className='btn btn-smart'>
                                            <FaPlay/>
                                            </a>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='header__img'>
                            <img src='images/man-01.png'  alt='banner.png'/>
                        </div>
                    </div>
                </div>
        </div>
    </header>
  )
}

export default Banner
