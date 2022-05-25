import React from 'react'
import {FaFacebookF,FaTwitter,FaPinterestP,FaInstagram,FaBehance,FaPlay} from 'react-icons/fa';

const Banner = () => {
    const [state] = React.useState({
        title:"I am MollaMeeHedi",
         text:"I'm MollaMeehedi web developer with long time experience in this field.",
         image:"images/man-01.png"
    })
  return (
    <header className="header">
        <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='header__content'>
                            <div className='header__section'>
                                <ul className='header__ul'>
                                        <li><a href='' terget='_blank'><FaFacebookF/></a></li>
                                        <li><a href='' terget='_blank'><FaTwitter/></a></li>
                                        <li><a href='' terget='_blank'><FaPinterestP/></a></li>
                                        <li><a href='' terget='_blank'><FaInstagram/></a></li>
                                        <li><a href='' terget='_blank'><FaBehance/></a></li>
                                    </ul>
                                    <h1>{state.title}</h1>
                                    <p>{state.text}</p>
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
                            <img src={state.image}  alt='banner.png'/>
                        </div>
                    </div>
                </div>
        </div>
    </header>
  )
}

export default Banner
