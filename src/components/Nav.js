import React,{useState} from 'react'
import {FaAlignJustify} from 'react-icons/fa'

const Nav = () => {
    const[state,setState] = useState(false)
  return (
    <nav className='navbar'>
        <div className='container'>
                <div className='navbar_container'>
                    <ul className='navbar_left'> 
                        <div className='navbar_left_logo'>
                            <img src="/images/logo.png" alt='logo.png'/>
                        </div>
                    </ul>
                    {state ? (
                        <ul className='navbar_right'>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>Service</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Skills</a></li>
                        <li><a href=''>Blog</a></li>
                        <li><a href=''>Contact</a></li>
                    </ul>
                    ):''}
                    
                </div>
                <div className='toggle' onClick={() => setState(!state)}><FaAlignJustify/></div>
        </div>
    </nav>
  )
}

export default Nav
